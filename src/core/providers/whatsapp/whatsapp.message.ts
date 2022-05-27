import {
  IRequestWhatsAppMessageLocationSend,
  IRequestWhatsAppMessageMidiaSend,
  IRequestWhatsAppMessageTextSend,
  IResponseWhatsAppMessageSend,
  IWhatsAppMessage,
} from '../../interfaces/iwhatsapp.message'
import { IWhatsAppErrorAPI } from '../../interfaces/iwhatsapp.service'
import {
  MESSAGE_LOCATION,
  MESSAGE_MIDIA,
  MESSAGE_PRODUCT,
  MESSAGE_TEXT,
  RECIPIENT_TYPE,
} from '../../types/whatsapp.types'
import { getUrl } from '../../utils/generate-url'
import { WhatsAppService } from './whatsapp.service'

class WhatsAppMessage extends WhatsAppService implements IWhatsAppMessage {
  /**
   * @inheritdoc
   */
  async sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend> {
    const objRequest = this.makeObjRequestText(message)
    return this.requestMessage(objRequest)
  }

  /**
   * @inheritdoc
   */
  async sendMidia(message: IRequestWhatsAppMessageMidiaSend): Promise<IResponseWhatsAppMessageSend> {
    const objRequest = this.makeObjRequestMidia(message)
    return this.requestMessage(objRequest)
  }

  /**
   * @inheritdoc
   */
  async sendLocation(message: IRequestWhatsAppMessageLocationSend): Promise<IResponseWhatsAppMessageSend> {
    const objRequest = this.makeObjRequestLocation(message)
    return this.requestMessage(objRequest)
  }

  /**
   * Request Message
   * @param objRequest
   * @returns { Promise<any> }
   */
  private async requestMessage(objRequest: any): Promise<any> {
    const url = getUrl(`${this.phoneId}/messages`)
    return new Promise((resolve, reject) => {
      this.request
        .post({
          url,
          token: this.token,
          data: objRequest,
        })
        .then((response) => {
          resolve(this.makeResponse(response.data))
        })
        .catch((error: IWhatsAppErrorAPI) => reject(error))
    })
  }

  /**
   * Make Response
   * @param data
   * @returns { IResponseWhatsAppMessageSend }
   */
  private makeResponse(data: any): IResponseWhatsAppMessageSend {
    return {
      messagingProduct: MESSAGE_PRODUCT,
      contacts: data.contacts.map((contract: any) => {
        return {
          phoneNumber: contract.input,
          whatsAppId: contract.wa_id,
        }
      }),
      messages: data.messages.map((message: any) => {
        return {
          wamId: message.id,
        }
      }),
    }
  }

  /**
   * Make Obj request location
   * @param { IRequestWhatsAppMessageMidiaSend } message
   */
  private makeObjRequestLocation(message: IRequestWhatsAppMessageLocationSend) {
    return {
      messaging_product: MESSAGE_PRODUCT,
      recipient_type: message.recipientType ?? RECIPIENT_TYPE,
      to: message.to,
      type: MESSAGE_LOCATION,
      location: message.location,
    }
  }

  /**
   * Make Obj request midia
   * @param { IRequestWhatsAppMessageMidiaSend } message
   */
  private makeObjRequestMidia(message: IRequestWhatsAppMessageMidiaSend) {
    return {
      messaging_product: MESSAGE_PRODUCT,
      recipient_type: message.recipientType ?? RECIPIENT_TYPE,
      to: message.to,
      type: MESSAGE_MIDIA,
      image: {
        id: message.mediaObjectId,
      },
    }
  }

  /**
   * Make Obj Request Text
   * @param message
   * @returns
   */
  private makeObjRequestText(message: IRequestWhatsAppMessageTextSend) {
    return {
      messaging_product: MESSAGE_PRODUCT,
      recipient_type: message.recipientType ?? RECIPIENT_TYPE,
      to: message.to,
      type: MESSAGE_TEXT,
      text: {
        preview_url: message.body.useUrl,
        body: message.body.message,
      },
    }
  }
}

export { WhatsAppMessage }
