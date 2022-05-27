import {
  IRequestWhatsAppMessageSend,
  IResponseWhatsAppMessageSend,
  IWhatsAppMessage,
} from '../../interfaces/iwhatsapp.message'
import { WhatsAppService } from './whatsapp.service'

class WhatsAppMessageService extends WhatsAppService implements IWhatsAppMessage {
  /**
   * @inheritdoc
   */
  @makeObjectRequest()
  send(message: IRequestWhatsAppMessageSend): Promise<IResponseWhatsAppMessageSend> {
    console.log(message)
    throw new Error('oi')
  }
}

/**
 * Make Object Request
 * @returns { T }
 */
function makeObjectRequest<T>() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value!
    descriptor.value = (message: IRequestWhatsAppMessageSend) => {
      console.log(message)
      return originalMethod.bind(descriptor.value)(message)
    }
  }
}

export { WhatsAppMessageService }
