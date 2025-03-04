package fi.smartbass.docanlyzer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class ReplyController {

    private static final Logger logger = LoggerFactory.getLogger(ReplyController.class);

    private final ReplyService service;

    public ReplyController(ReplyService service) {
        this.service = service;
    }
    @GetMapping(value = "/api/answer", produces = "application/json")
    public String getAnswer(@RequestParam(value = "question", defaultValue = "What are the 10 most important financial key indicators in an annual report?") String question) {
    // public Flux<String> getAnswer(@RequestParam(value = "question", defaultValue = "What are the 10 most important financial key indicators in an annual report?") String question) {
        return service.answer(question);
    }
}
