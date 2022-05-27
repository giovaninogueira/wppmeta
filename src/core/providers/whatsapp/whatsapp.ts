import { IWhatsApp } from '../../interfaces/iwhatsapp'
import {
  IRequestWhatsAppMessageLocationSend,
  IRequestWhatsAppMessageMidiaSend,
  IRequestWhatsAppMessageTextSend,
  IResponseWhatsAppMessageSend,
  IWhatsAppMessage,
} from '../../interfaces/iwhatsapp.message'
import { IPhoneWhatsApp, IRegisterPhone, IWhatsAppPhone } from '../../interfaces/iwhatsapp.phone'
import { IWhatsAppErrorAPI } from '../../interfaces/iwhatsapp.service'

class WhatsApp implements IWhatsApp {
  /**
   * Creates an instance of whats app.
   * @param whatsPhone 
   * @param whatsMessage 
   */
  constructor(private whatsPhone: IWhatsAppPhone, private whatsMessage: IWhatsAppMessage) {}

  /**
   * @inheritdoc
   */
  async registerPhone(registerPhone: IRegisterPhone): Promise<boolean | IWhatsAppErrorAPI> {
    return this.whatsPhone.registerPhone(registerPhone)
  }

  /**
   * @inheritdoc
   */
  async getPhones(): Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> {
    return this.whatsPhone.getPhones()
  }

  /**
   * @inheritdoc
   */
  async sendText(message: IRequestWhatsAppMessageTextSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI> {
    return this.whatsMessage.sendText(message)
  }

  /**
   * @inheritdoc
   */
  async sendMidia(message: IRequestWhatsAppMessageMidiaSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI> {
    return this.whatsMessage.sendMidia(message)
  }

  /**
   * @inheritdoc
   */
  async sendLocation(message: IRequestWhatsAppMessageLocationSend): Promise<IResponseWhatsAppMessageSend | IWhatsAppErrorAPI> {
    return this.whatsMessage.sendLocation(message)
  }
}

export { WhatsApp }
