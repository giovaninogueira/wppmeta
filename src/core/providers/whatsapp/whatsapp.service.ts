import { IRequestService } from '../../interfaces/irequest.service'
import 'dotenv/config'

class WhatsAppService {
  /**
   * Construct
   * @param request
   * @param token
   * @param accountId
   */
  constructor(
    protected request: IRequestService,
    protected token: string,
    protected phoneId: string,
    protected accountId?: string,
  ) {
    this.accountId = this.accountId ?? process.env.WHATSAPP_ACCOUNT_ID_CLOUD_API
  }
}

export { WhatsAppService }
