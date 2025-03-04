import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
class ProxyService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  decodeEncodedUrl(rawUrl: string): string {
    if (!rawUrl.startsWith('http://') && !rawUrl.startsWith('https://')) {
      console.log(rawUrl);
      const decodedUrl = decodeURIComponent(rawUrl);
      console.log(decodedUrl);
      return decodedUrl;
    }
    return rawUrl;
  }

  async getData(url: string): Promise<unknown> {
    const httpResponse = await this.httpService.axiosRef.get<unknown>(url);
    if (httpResponse.data === undefined) {
      throw new Error('Response from get request not found');
    }
    return httpResponse.data;
  }

  async postData(url: string, body: unknown): Promise<unknown> {
    const httpResponse = await this.httpService.axiosRef.post<unknown>(
      url,
      body,
    );
    if (!httpResponse.data === undefined) {
      throw new Error('Response from post request not found');
    }
    return httpResponse.data;
  }

  async putData(url: string, body: unknown): Promise<unknown> {
    const httpResponse = await this.httpService.axiosRef.put<unknown>(
      url,
      body,
    );
    if (!httpResponse.data === undefined) {
      throw new Error('Response from put request not found');
    }
    return httpResponse.data;
  }
  async patchtData(url: string, body: unknown): Promise<unknown> {
    const httpResponse = await this.httpService.axiosRef.patch<unknown>(
      url,
      body,
    );
    if (!httpResponse.data === undefined) {
      throw new Error('Response from patch request not found');
    }
    return httpResponse.data;
  }

  async deletetData(url: string): Promise<unknown> {
    const httpResponse = await this.httpService.axiosRef.delete<unknown>(url);
    if (!httpResponse.data === undefined) {
      throw new Error('Response from delete request not found');
    }
    return httpResponse.data;
  }
}

export default ProxyService;
