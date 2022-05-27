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
  pin: string;
}

interface IWhatsAppPhone {
  registerPhone(registerPhone: IRegisterPhone): Promise<boolean >;
  getPhones(): Promise<IPhoneWhatsApp[] >;
}

export { IWhatsAppPhone, IPhoneWhatsApp, IResponseWhatsAppPhone, IRegisterPhone }
