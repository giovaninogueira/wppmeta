interface IResponse<T = any> {
  data?: T;
  error?: T;
  headers?: T;
  status: number;
}

interface IRequestService {
  /**
   * HTTP Get
   * @param { url, token }
   * @returns { Promise<IResponse> }
   */
  get({ url, token }: { url: string; token: string }): Promise<IResponse>;

  /**
   * HTTP Post
   * @param { url, token }
   * @returns { Promise<IResponse> }
   */
  post({ url, token, data }: { url: string; token: string; data: any }): Promise<IResponse>;
}

export { IRequestService, IResponse };
