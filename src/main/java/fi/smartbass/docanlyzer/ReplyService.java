package fi.smartbass.docanlyzer;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

@Service
public class ReplyService {

    private final Agent agent;

    public ReplyService(NeoAgentFactory neoAgentFactory) {
        this.agent = neoAgentFactory.createAgent();
    }

    /*
    public Flux<String> answer(String question) {
        Sinks.Many<String> sink  = Sinks.many().unicast().onBackpressureBuffer();
        agent.answer(question)
                .onNext(sink::tryEmitNext)
                .onComplete(t -> sink.tryEmitComplete())
                .onError(sink::tryEmitError)
                .start();
        return sink.asFlux();
    }

     */
    public String answer(String question) {
        return agent.answer(question);
    }

}
