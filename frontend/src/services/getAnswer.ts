import { AxiosProgressEvent, AxiosRequestConfig } from "axios";
import { ApiResponse, callExternalApi } from "./externalApi";
import eventEmitter from "./emitter";

export async function getAnswer(question: string): Promise<ApiResponse> {
  const config: AxiosRequestConfig = {
    url: `/api/answer?question=${question}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
      let eventObj: XMLHttpRequest | undefined = undefined;
      if (progressEvent.event?.currentTarget) {
        eventObj = progressEvent.event?.currentTarget;
      } else if (progressEvent.event?.srcElement) {
        eventObj = progressEvent.event?.srcElement;
      } else if (progressEvent.event?.target) {
        eventObj = progressEvent.event?.target;
      }
      if (!eventObj) return;
      const dataChunk = eventObj.response;
      eventEmitter.emit("CHUNK", dataChunk);
    }
  };

  const { data, error } = (await callExternalApi({ config })) as ApiResponse;

  return {
    data,
    error,
  };
}
