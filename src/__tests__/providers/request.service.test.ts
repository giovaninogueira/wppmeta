import { RequestService } from './../../core/providers/request/request.service'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Test of provider request', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('RequestService get - Ok', async () => {
    const requestService = new RequestService()
    mockedAxios.get.mockResolvedValue({
      data: {
        data: {},
      },
      status: 200,
    })

    const response = await requestService.get({ url: 'www.teste.com.br', token: '123456' })
    expect(response.status).toBe(200)
    expect(response.data).toBeDefined()
  })

  it('RequestService get - Error', () => {
    const requestService = new RequestService()
    mockedAxios.get.mockRejectedValueOnce({
      response: {
        data: {},
        status: 400
      }
    })

    requestService.get({ url: 'www.teste.com.br', token: '123456' }).catch((response) => {
      expect(response.status).toBe(400)
      expect(response.error).toBeDefined()
    })
  })
})
