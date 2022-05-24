import axios from 'axios'
import { IRequestService, IResponse } from '../../interfaces/irequest.service'

class RequestService implements IRequestService {
  /**
   * Make Config Bearer Token
   * @param token
   * @returns {any}
   */
  private makeHeaders(token: String): any {
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  /**
   * HTTP Get
   * @param { url, token }
   * @returns { Promise<IResponse> }
   */
  get({ url, token }: { url: string; token: string }): Promise<IResponse> {
    const config = this.makeHeaders(token)
    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((response) =>
          resolve({
            data: response.data.data,
            status: response.status,
          }),
        )
        .catch((error) =>
          reject({
            error: error.response.data.error,
            status: error.response.status,
          }),
        )
    })
  }
}

export { RequestService }
