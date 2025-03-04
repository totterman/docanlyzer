package fi.smartbass.docanlyzer;

import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.store.embedding.EmbeddingStore;
import dev.langchain4j.store.embedding.neo4j.Neo4jEmbeddingStore;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NeoConfig {

    @Value("${spring.neo4j.uri}")
    private String uri;

    @Value("${spring.neo4j.authentication.username}")
    private String username;

    @Value("${spring.neo4j.authentication.password}")
    private String password;

    @Bean
    public EmbeddingStore<TextSegment> embeddingStore() {
        return Neo4jEmbeddingStore.builder()
                .driver(GraphDatabase.driver(uri, AuthTokens.basic(username, password)))
                // .dimension(768)
                .dimension(1536)
                .label("Embedding")
                .indexName("chunkVectorIndex")
                .embeddingProperty("value")
                .retrievalQuery("""
            WITH node AS answerEmb, score
            ORDER BY score DESC LIMIT 10
            MATCH (answerEmb) <-[:HAS_EMBEDDING]- (answer) -[:HAS_PARENT*]-> (s:Section)
            WITH s, answer, score, answerEmb
            MATCH (d:Document) <-[*]- (s) <-[:HAS_PARENT*]- (chunk:Chunk)
            WITH d, s, answer, chunk, score, answerEmb ORDER BY d.url_hash, s.title, chunk.block_idx ASC
            WITH d, s, collect(answer) AS answers, collect(chunk) AS chunks, max(score) AS maxScore, answerEmb
            RETURN {source: d.url, page: chunks[0].page_idx+1, matched_chunk_id: answers[0].uuid} AS metadata,
                maxScore AS score,
                answers[0].uuid AS id,
                reduce(text = "", x IN chunks | text + x.sentences + '.') AS text, 
                answerEmb.value AS value LIMIT 3;
    """)
                .build();
    }
}
