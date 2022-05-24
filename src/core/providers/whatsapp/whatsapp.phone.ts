import { IRequestService } from '../../interfaces/irequest.service'
import { IWhatsAppErrorAPI } from '../../interfaces/iwhatsapp.service'
import { IPhoneWhatsApp, IResponseWhatsAppPhone, IWhatsAppPhone } from '../../interfaces/iwhatsapp.phone'
import 'dotenv/config'

class WhatsAppPhone implements IWhatsAppPhone {
  constructor(
    private request: IRequestService, 
    private token: string,
    private accountId?: string,
  ) {
    this.accountId = this.accountId ?? process.env.WHATSAPP_ACCOUNT_ID_CLOUD_API
  }

  /**
   * Get phones of account
   * @returns { Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> }
   */
  async getPhones(): Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> {
    const url = `${process.env.URL_WHATSAPP_CLOUD_API_META}/${this.accountId}/phone_numbers` as string
    return new Promise((resolve, reject) => {
      this.request
        .get({ 
          url, 
          token: this.token 
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
