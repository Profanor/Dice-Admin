/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

import apiClient from "@/api/configs/client";
import { ApiError } from "../Error/ApiError";

export class BaseService {
  protected client = apiClient;

  protected async get<T>(url: string) {
    try {
      const response = await this.client.get<T>(url);
      return response.data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.client.post<T>(url, data);
      return response.data;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  protected async delete(url: string): Promise<void> {
    try {
      await this.client.delete(url);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  private handleError(err: unknown): ApiError {
    if (err && typeof err === "object" && "isAxiosError" in err) {
      const axiosErr = err as AxiosError as any;
      const message = axiosErr.response?.data?.message || axiosErr.message;
      const status = axiosErr.response?.status;
      const details = axiosErr.response?.data;

      return new ApiError(message, status, details);
    }

    return new ApiError("An unknown error occurred");
  }
}
