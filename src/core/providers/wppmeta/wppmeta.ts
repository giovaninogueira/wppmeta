import { IWhatsApp } from '../../interfaces/iwhatsapp'
import { RequestService } from '../request/request.service'
import { WhatsApp } from '../whatsapp/whatsapp'
import { WhatsAppMessageService } from '../whatsapp/whatsapp.message'
import { WhatsAppPhone } from '../whatsapp/whatsapp.phone'

interface IWppMetaConfig {
  phoneId: string;
  accountId: string;
  token: string;
}

abstract class WppMeta {
  /**
   * Config Whatsapp cloud api
   * @param wppConfig
   * @returns { IWhatsApp }
   */
  static config(wppConfig: IWppMetaConfig): IWhatsApp {
    const request = new RequestService()
    return new WhatsApp(
      new WhatsAppPhone(request, wppConfig.token, wppConfig.phoneId, wppConfig.accountId),
      new WhatsAppMessageService(request, wppConfig.token, wppConfig.phoneId, wppConfig.accountId),
    )
  }
}

export { WppMeta }
