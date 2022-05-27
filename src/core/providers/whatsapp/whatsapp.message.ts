import {
  IRequestWhatsAppMessageTextSend,
  IResponseWhatsAppMessageSend,
  IWhatsAppMessage,
} from '../../interfaces/iwhatsapp.message'
import { IWhatsAppErrorAPI } from '../../interfaces/iwhatsapp.service'
import { MESSAGE_PRODUCT, MESSAGE_TEXT } from '../../types/whatsapp.types'
import { getUrl } from '../../utils/generate-url'
import { WhatsAppService } from './whatsapp.service'

class WhatsAppMessageService extends WhatsAppService implements IWhatsAppMessage {  
  /**
   * @inheritdoc
   */
  sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI> {
    const url = getUrl(`${message.phoneId}/messages`)
    const objRequest = this.makeObjRequestText(message)
    return new Promise((resolve, reject) => {
      this.request
        .post({
          url,
          token: this.token,
          data: objRequest,
        })
        .then((response) => {
          console.log(JSON.stringify(objRequest))
          resolve({
            messagingProduct: MESSAGE_PRODUCT,
            contacts: [],
            messages: []
          })
        })
        .catch((error: IWhatsAppErrorAPI) => reject(error))
    })
  }

  /**
   * Make Obj Request Text
   * @param message 
   * @returns 
   */
  private makeObjRequestText(message: IRequestWhatsAppMessageTextSend) {
    return {
      messaging_product: MESSAGE_PRODUCT,
      recipient_type: message.recipientType,
      to: message.to,
      type: MESSAGE_TEXT,
      text: {
        preview_url: message.text.previewUrl,
        body: message.text.body,
      },
    }
  }
}

export { WhatsAppMessageService }
