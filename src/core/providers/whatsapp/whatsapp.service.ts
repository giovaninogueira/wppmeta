import { IRequestService } from '../../interfaces/irequest.service'
import { IWhatsAppConfig } from '../../interfaces/iwhatsapp.service'
import 'dotenv/config'
import { RequestService } from '../request/request.service'

class WhatsAppService {
  /**
   * Construct
   * @param request 
   * @param token 
   * @param accountId 
   */
  constructor(protected request: IRequestService, protected token: string, protected accountId?: string) {
    this.accountId = this.accountId ?? process.env.WHATSAPP_ACCOUNT_ID_CLOUD_API
  }
}

export { WhatsAppService }
