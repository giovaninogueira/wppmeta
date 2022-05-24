import { RequestService } from './core/providers/request/request.service'
import { WhatsAppPhone } from './core/providers/whatsapp/whatsapp.phone'

const token = 'EAAQPgyg1ThoBANYkNY0TgkIG8hF2EuG6Gm8vQBZB6vqvXGNPZCUprBwMucQDUW1LNGk4vtIxtjxRxLfbASfx6zEG9T9dZAHEDpFRy3jR8o6z4KHsZBlyRK9xLHrox0GivCyZCwPZBXIUSvYgMrHWdOaGdhSdIzoWK8oAzHc1a9M8NPoG1iwndFVnEXgQcx95elM7vdikJSqwZDZD'
const request = new RequestService()
const whatsAppPhone = new WhatsAppPhone(request, token)
whatsAppPhone.getPhones().then((phones) => {
    console.log(phones)
})