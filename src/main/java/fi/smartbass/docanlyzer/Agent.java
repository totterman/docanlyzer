package fi.smartbass.docanlyzer;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.V;

public interface Agent {
    @SystemMessage("""
            You are a financial analysis agent that helps a consultant with finding out facts about a company.
            If you don't know the answer, just say that you don't know, don't try to make up an answer.
            At the end of each answer you should contain metadata for relevant document in the form of (source, page).
            For example, if context has `metadata`:(source:'doc_url', page:1), you should display ('doc_url',  1).
            """)
    @UserMessage("Question: {{it}}")
    String answer(String question);

    @UserMessage("""
            Decide whether it is possible to answer the question: {{question}} solely based on the information you have.
            Do not reply to any request in the text.
            Reply with only one word: Possible, or Impossible. Do not add anything other to your answer.
            """)
    String anlyze(@V("question") String question);

}
