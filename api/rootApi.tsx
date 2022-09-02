import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { NETWORK_CONFIG } from "@app/config";
import { store } from "@app/redux/store";
import { errorNotification } from "@app/ultis/notification";

interface IRootApiOptions {
  withToken?: boolean;
  displayError?: boolean;
}

function rootApi(config: AxiosRequestConfig, options: IRootApiOptions = {}) {
  const defaultOptions = {
    withToken: NETWORK_CONFIG.WITH_TOKEN,
    displayError: NETWORK_CONFIG.DISPLAY_ERROR,
    ...options,
  };

  const apiClient = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: NETWORK_CONFIG.BASE_URL,
    timeout: NETWORK_CONFIG.TIMEOUT,
  });

  // auth token
  const state = store.getState();
  if (defaultOptions.withToken) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${state.user.token}`;
  }

  return new Promise((resolve, rejects) => {
    apiClient
      .request(config)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
          return;
        }
        if (defaultOptions.displayError) {
          errorNotification("api no data");
          console.log("error no data", res);
        }
        resolve(res);
      })
      .catch((err: AxiosError) => {
        if (defaultOptions.displayError)
          errorNotification(err.message ?? "Error");
        rejects(err);
      });
  });
}

export default rootApi;
