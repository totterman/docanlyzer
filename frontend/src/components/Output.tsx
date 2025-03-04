import { useSelector } from "react-redux";
import { RootState } from "../storage/storage";

export function Output() {
  const qListRef = useSelector((storage: RootState) => storage.question.qaList);

  return (
    <div className="container mx-auto ml-4 py-4 h-[calc(100%-24rem)] overflow-y-auto">
      <ul className="list-none">
        {qListRef.map((qa) => (
          <li key={qa.question} className="border-b py-4">
            <h3 className="bg-slate-100 font-semibold ml-2 mt-6 mr-2">{qa.question}</h3>
            <div className="whitespace-pre-wrap mx-8">{qa.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
