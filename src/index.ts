import { RequestService } from './core/providers/request/request.service'
import { WhatsAppMessageService } from './core/providers/whatsapp/whatsapp.message'

const request = new RequestService()
const token = 'EAAHGSsvHDYwBADJYSp61t6AlZBTHcnA0UOTQUgpiy8Ypm52XzWJW7lIQWWg9kIZATZAhd7ZBZAI9qc1aif3fkLvqlCGzUtszIO1ZCtJ2TKmZBaPKZAyzUyDsr15UHdO4HoB0VHAZCaHbnnjtMkqMpkWDRwJW8ZBnWUfymg5XPJZArxUoHHm4ys5QnhPBaIMpRJlTaIKEEJiZBZCiRSAZDZD'
const whats = new WhatsAppMessageService(request, token)
whats.sendText({
  recipientType: 'individual',
  phoneId: '107957148596580',
  to: '5517992230802',
  text: {
    previewUrl: false,
    body: 'olá'
  }
}).then((data) => {
  console.log(data)
}).catch((error) => console.log(error))
