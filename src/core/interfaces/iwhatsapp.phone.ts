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

interface IWhatsAppPhone {
  /**
   * Get phones of account
   * @returns { Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI> }
   */
  getPhones(): Promise<IPhoneWhatsApp[] | IWhatsAppErrorAPI>;
}

export { IWhatsAppPhone, IPhoneWhatsApp, IResponseWhatsAppPhone }
