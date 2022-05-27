import { IWhatsAppErrorAPI } from './iwhatsapp.service'

interface IPhoneWhatsApp {
  id: string;
  verifiedName: string;
  codeVerificationStatus: 'NOT_VERIFIED' | 'VERIFIED';
  displayPhoneNumber: string;
  qualityRating: string;
}

interface IResponseWhatsAppPhone {
  verified_name: string;
  code_verification_status: 'NOT_VERIFIED' | 'VERIFIED';
  display_phone_number: string;
  quality_rating: string;
  id: string;
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
