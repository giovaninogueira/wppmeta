import axios from 'axios'
import { IRequestService, IResponse } from '../../interfaces/irequest.service'

class RequestService implements IRequestService {
  /**
   * Make Config Bearer Token
   * @param token
   * @returns {any}
   */
  private makeHeaders(token: string): any {
    return {
      headers: { Authorization: `Bearer ${token}` },
    }
  }

  /**
   * @inheritdoc
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
            headers: error.response.headers,
            status: error.response.status,
          }),
        )
    })
  }

  /**
   * @inheritdoc
   */
  post({ url, token, data }: { url: string; token: string, data: any }): Promise<IResponse> {
    const config = this.makeHeaders(token)
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then((response) =>
          resolve({
            data: response.data,
            status: response.status,
          }),
        )
        .catch((error) =>
          reject({
            error: error.response.data.error,
            headers: error.response.headers,
            status: error.response.status,
          }),
        )
    })
  }
}

export { RequestService }
