interface IWhatsAppErrorAPI<T = any> {
  data?: T;
  error?: T;
  headers?: T;
  status: number;
}

interface IWhatsAppService {}

export { IWhatsAppService, IWhatsAppErrorAPI }
