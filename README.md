# docanlyzer
Multilingual investor assistant

### Function

A collection of PDF documents is processed by the Spring Boot app and sent to nlp-ingestor.

nlp-ingestor runs in a Docker container. It receives a PDF file and parses the contents into JSON blocks. The JSON blocks are tagged as headers, tables, table rows etc.",

The Spring Boot app receives the JSON blocks and builds a tree structure from them, mirroring the original PDF document structure. 

The Spring Boot app loads the tree structured document blocks into the neo4j database. Block types are mapped as entities, and their relations follow the tree structure.

Embeddings from the document text elements are created using a LLM embedding model. Embeddings are stored in the neo4j database. Relations from the embeddings to their origin text block are also stored in neo4j.

Users (= you) can make questions to the system through this React user interface. The question is fed to the AI system, which seeks the most similar text chunks from the neo4j database.",

Using the most similar text pieces, the LLM formulates an answer to the question and returns it to the user.

### React frontend

The frontend is implemented in React and Typescript, and decorated with Tailwind CSS. React Hooks useContext, useEffect, useLoaderData and useReducer are put in use. Repeating HTML code is avoided with the style-functions Pagestyle, Warningstyle, and SectionStyle.

Moreover, the frontend is multilingual. Demo options are English, Finnish and Swedish. Signing in can be tried with credentials:

### Spring Boot backend

The backend handles HTTP requests and calls the LLM using langchain4j API.

### Graph database element structure

The structure of the neo4j database goes like this: a Document consists of Sections, which may be text Chunks or Tables. In other words, Sections belong to Documents, or (subsections) to higher level Sections. Text Chunks and Tables belong in Sections, and have Embeddings constructed from their textual content.


## Environments for development and production

The production instance runs in a container on Azure Spring Apps. Azure OpenAI is used as the LLM, and Neo4j AURA DB as the graph database. Both of these are cloud based services to avoid the costs from running more Azure containers.

Development runs on a Linux workstation with 32GB RAM and a GPU. A Spring Boot app reads PDF files and sends their contents to nlp-ingestor for parsing into JSON chunks, which the Spring Boot app organises in a tree structure. In development, both the neo4j database and the Ollama LLM run in Docker containers.
