import { IWhatsAppErrorAPI } from './iwhatsapp.service'

interface IPhoneWhatsApp {
  id: String;
  verifiedName: String;
  codeVerificationStatus: 'NOT_VERIFIED' | 'VERIFIED';
  displayPhoneNumber: String;
  qualityRating: String;
}

interface IResponseWhatsAppPhone {
  verified_name: String;
  code_verification_status: 'NOT_VERIFIED' | 'VERIFIED';
  display_phone_number: String;
  quality_rating: String;
  id: String;
}

interface IRegisterPhone {
  phoneId: string;
  messagingProduct: 'whatsapp',
  pin: string;
}

interface IWhatsAppPhone {

  /**
   * With the phone number’s ID in hand, you can register it. 
   * In the registration API call, you perform two actions at the same time
   *  - Register the phone.
   *  - Enable two-step verification by setting a 6-digit registration code
   * @param registerPhone 
   * @returns { Promise<boolean | IWhatsAppErrorAPI> }
   */
  registerPhone(registerPhone: IRegisterPhone): Promise<boolean | IWhatsAppErrorAPI>;

  /**
   * Get phones of business account
   * @returns { Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> }
   */
  getPhones(): Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI>;


}

export { IWhatsAppPhone, IPhoneWhatsApp, IResponseWhatsAppPhone, IRegisterPhone }
