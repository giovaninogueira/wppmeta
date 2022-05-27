import { IRequestService } from './irequest.service'

interface IWhatsAppErrorAPI<T = any> {
  data?: T;
  error?: T;
  headers?: T;
  status: number;
}

interface IWhatsAppConfig {
  request: IRequestService;
  token: string;
  accountId?: string;
}

interface IWhatsAppService {}

export { IWhatsAppService, IWhatsAppErrorAPI, IWhatsAppConfig }
