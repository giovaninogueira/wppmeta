import { IRequestService } from './irequest.service';

interface IWhatsAppErrorAPI<T = any> {
  error?: T;
  headers?: T;
  status: number;
}

interface IWhatsAppConfig {
  request: IRequestService;
  token: string;
  accountId?: string;
}

export { IWhatsAppErrorAPI, IWhatsAppConfig };
