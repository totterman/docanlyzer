/* eslint-disable jsx-a11y/anchor-is-valid */
import { FormEvent, useEffect, useState } from "react";
import { getAnswer } from "../services/getAnswer";
import { Question } from "../types/question";
import { useDispatch } from "react-redux";
import { add, clear } from "../storage/questionSlice";
import { useTranslation } from "react-i18next";
import eventEmitter from "../services/emitter";
import { Tooltip } from "react-tooltip";

export function Input() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    eventEmitter.on("CHUNK", dataChunk => {
      setAnswer(dataChunk);
    });

    // stop listening on unmount
    return function cleanup() {
      eventEmitter.off("CHUNK");
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prompt = formData.get("prompt") as string;
    if (prompt === undefined || prompt === "") return;

    getAnswer(prompt).then((data) => {
      const s = JSON.stringify(data.data, null, 2);
      const qa: Question = {
        question: prompt,
        answer: s.substring(1, s.length - 1).replaceAll("\\n", "\n"),
      };
      dispatch(add(qa));
      setAnswer("");
      console.log("New Question: [" + prompt + "]:[" + qa.answer + "]");
    });
  }

  function handleReset(e: FormEvent<HTMLFormElement>) {}

  function handleClear() {
    console.log("Clear pressed");
    dispatch(clear());
  }

  return (
    <div className="container mx-auto py-4 h-28">
      <div className="whitespace-pre-line mb-2 px-4">{answer}</div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="flex flex-col mb-2 mt-4 px-4">
          <label htmlFor="prompt">{t("question")}</label>
          <input id="prompt" type="text" name="prompt" maxLength={2000} />
        </div>
        <button
          type="submit"
          className="mt-4 ml-4 h-10 px-8  text-slate-100 font-semibold bg-sky-700 "
        >
          {t("send")}
        </button>
        <a data-tooltip-id="common" data-tooltip-content={t("ttClear")}>
        <button
          type="button"
          onClick={handleClear}
          className="mt-2 ml-4 h-10 px-8  text-sky-700 font-semibold bg-slate-100"
        >
          {t("clear")}
        </button>
        </a>
        <Tooltip id="common" />
      </form>
    </div>
  );
}
