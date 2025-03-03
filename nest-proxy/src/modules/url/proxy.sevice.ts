import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
class ProxyService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }
  async fetchData(url: URL) {
    const httpResponse = await this.httpService.axiosRef.get(url.href);
    if (!httpResponse.data) {
      throw new Error('Response not found');
    }
    return httpResponse.data;
  }
}

export default ProxyService;
