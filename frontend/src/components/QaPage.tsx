import { Provider } from "react-redux";
import { storage } from "../storage/storage";
import { Input } from "./Input";
import { Output } from "./Output";
import { useTranslation } from "react-i18next";
import { Instruction } from "./Instruction";

export function QaPage() {
    const { t } = useTranslation();
    return (
        <>
        <Instruction />
        <Provider store={storage}>
        <Output />
        <Input />
      </Provider>
      </>
    );
}