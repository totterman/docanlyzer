package fi.smartbass.docanlyzer;

import dev.langchain4j.model.azure.AzureOpenAiChatModel;
import dev.langchain4j.model.azure.AzureOpenAiEmbeddingModel;
import dev.langchain4j.model.azure.AzureOpenAiStreamingChatModel;
import dev.langchain4j.model.chat.ChatLanguageModel;
import dev.langchain4j.model.chat.StreamingChatLanguageModel;
import dev.langchain4j.model.embedding.EmbeddingModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnProperty(value = "llm.ollama", havingValue = "false", matchIfMissing = false)
public class AzureOpenAIConfig {
    @Value("${spring.azure.openai.key}")
    private String openAiKey;

    @Value("${spring.azure.openai.endpoint}")
    private String openAiEndpoint;

    @Value("${spring.azure.openai.deployment-name}")
    private String openAiDeploymentName;

    @Value("${spring.azure.openai.embedding-name}")
    private String openAiEmbeddingName;

    @Bean
    public EmbeddingModel embeddingModel() {
        return AzureOpenAiEmbeddingModel.builder()
                .apiKey(openAiKey)
                .endpoint(openAiEndpoint)
                .deploymentName(openAiEmbeddingName)
                .build();
    }

    @Bean
    public ChatLanguageModel chatLanguageModel() {
        return AzureOpenAiChatModel.builder()
                .apiKey(openAiKey)
                .endpoint(openAiEndpoint)
                .deploymentName(openAiDeploymentName)
                .temperature(0.0d)
                .build();
    }
}
