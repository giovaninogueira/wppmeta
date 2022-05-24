interface IResponse<T = any> {
  data?: T;
  error?: T;
  status: number;
}

interface IRequestService {
  /**
   * HTTP Get
   * @param { url, token }
   * @returns { Promise<IResponse> }
   */
  get({ url, token }: { url: string; token: string }): Promise<IResponse>;
}

export { IRequestService, IResponse }
