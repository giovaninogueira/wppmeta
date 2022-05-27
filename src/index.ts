import { RequestService } from './core/providers/request/request.service'
import { WhatsAppMessageService } from './core/providers/whatsapp/whatsapp.message'

const request = new RequestService()
const whats = new WhatsAppMessageService(request, '', '')
whats.send({
  messagingProduct: 'whatsapp',
  recipientType: 'individual',
  to: 'string',
})
