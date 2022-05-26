import { IRequestService } from '../../interfaces/irequest.service'
import { IWhatsAppErrorAPI } from '../../interfaces/iwhatsapp.service'
import {
  IPhoneWhatsApp,
  IRegisterPhone,
  IResponseWhatsAppPhone,
  IWhatsAppPhone,
} from '../../interfaces/iwhatsapp.phone'
import { getUrl } from '../../utils/generate-url'

class WhatsAppPhone implements IWhatsAppPhone {
  constructor(private request: IRequestService, private token: string, private accountId?: string) {
    this.accountId = this.accountId ?? process.env.WHATSAPP_ACCOUNT_ID_CLOUD_API
  }

  /**
   * @inheritdoc
   */
  registerPhone(registerPhone: IRegisterPhone): Promise<boolean | IWhatsAppErrorAPI> {
    const url = getUrl(`/${registerPhone.phoneId}/register`)
    return new Promise((resolve, reject) => {
      this.request
        .post({
          url,
          token: this.token,
          data: {
            messaging_product: registerPhone.messagingProduct,
            pin: registerPhone.pin,
          },
        })
        .then((response) => {
          resolve(response.data.success === 'true')
        })
        .catch((error: IWhatsAppErrorAPI) => reject(error))
    })
  }

  /**
   * @inheritdoc
   */
  async getPhones(): Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> {
    const url = getUrl(`/${this.accountId}/phone_numbers`)
    return new Promise((resolve, reject) => {
      this.request
        .get({
          url,
          token: this.token,
        })
        .then((response) => {
          const phones = response.data.map((data: IResponseWhatsAppPhone) => {
            return {
              id: data.id,
              verifiedName: data.verified_name,
              codeVerificationStatus: data.code_verification_status,
              displayPhoneNumber: data.display_phone_number,
              qualityRating: data.quality_rating,
            }
          })
          resolve(phones)
        })
        .catch((error: IWhatsAppErrorAPI) => reject(error))
    })
  }
}

export { WhatsAppPhone }
