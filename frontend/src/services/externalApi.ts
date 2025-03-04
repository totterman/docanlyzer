import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface Message {
  text: string;
}

export interface AppError {
  message: string;
}

export interface ApiResponse {
  data: Message | null;
  error: AppError | null;
}

export async function callExternalApi(options: {
  config: AxiosRequestConfig;
}): Promise<ApiResponse> {
  try {
    const response: AxiosResponse = await axios(options.config);
    const { data } = response;
    return {
      data,
      error: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const { response } = axiosError;
      let message = "http request failed";
      if (response && response.statusText) {
        message = response.statusText;
      }
      if (axiosError.message) {
        message = axiosError.message;
      }
      if (response && response.data && (response.data as AppError).message) {
        message = (response.data as AppError).message;
      }
      return {
        data: null,
        error: {
          message,
        },
      };
    }
    return {
      data: null,
      error: {
        message: (error as Error).message,
      },
    };
  }
}
