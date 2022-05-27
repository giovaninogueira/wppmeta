import { RequestService } from '../../core/providers/request/request.service';
import { WhatsAppPhone } from '../../core/providers/whatsapp/whatsapp.phone';
import { WhatsAppMessage } from '../../core/providers/whatsapp/whatsapp.message';
import { WhatsApp } from '../../core/providers/whatsapp/whatsapp';

describe('Test of provider WhatsApp', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Test List of phones - Ok', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    jest.spyOn(whatsPhone, 'getPhones').mockResolvedValue([
      {
        id: 'id',
        verifiedName: 'verifiedName',
        codeVerificationStatus: 'VERIFIED',
        displayPhoneNumber: 'displayPhoneNumber',
        qualityRating: 'qualityRating',
      },
    ]);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const phones = await whatsApp.getPhones();
    expect(phones).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          verifiedName: expect.any(String),
          codeVerificationStatus: expect.any(String),
          displayPhoneNumber: expect.any(String),
          qualityRating: expect.any(String),
        }),
      ]),
    );
  });

  it('Test List of phones - Error', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    jest.spyOn(whatsPhone, 'getPhones').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 500,
    });
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    whatsApp.getPhones().catch((error) => {
      expect(error).toEqual(
        expect.objectContaining({
          error: expect.any(String),
          headers: expect.any(Object),
          status: expect.any(Number),
        }),
      );
    });
  });

  it('Test register of phone - Ok', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    jest.spyOn(whatsPhone, 'registerPhone').mockResolvedValue(true);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const success = await whatsApp.registerPhone({
      phoneId: '7849878',
      pin: '123456',
    });
    expect(success).toEqual(true);
  });

  it('Test register of phone - Error', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    jest.spyOn(whatsPhone, 'registerPhone').mockResolvedValue(false);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const success = await whatsApp.registerPhone({
      phoneId: '7849878',
      pin: '123456',
    });
    expect(success).toEqual(false);
  });

  it('Test send message Text - Ok', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendText').mockResolvedValue({
      messagingProduct: 'whatsapp',
      contacts: [
        {
          phoneNumber: 'phoneNumber',
          whatsAppId: 'whatsAppId',
        },
      ],
      messages: [
        {
          wamId: 'wamId',
        },
      ],
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const response = await whatsApp.sendText({
      to: '551799223802',
      body: {
        message: 'oii',
        useUrl: true,
      },
    });
    expect(response.messagingProduct).toBe('whatsapp');
    expect(response.contacts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          phoneNumber: expect.any(String),
          whatsAppId: expect.any(String),
        }),
      ]),
    );
  });

  it('Test send message Text - Error', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendText').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 500,
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    whatsApp
      .sendText({
        to: '551799223802',
        body: {
          message: 'oii',
          useUrl: true,
        },
      })
      .catch((error) => {
        expect(error).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            headers: expect.any(Object),
            status: expect.any(Number),
          }),
        );
      });
  });

  it('Test send message media - Ok', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendMidia').mockResolvedValue({
      messagingProduct: 'whatsapp',
      contacts: [
        {
          phoneNumber: 'phoneNumber',
          whatsAppId: 'whatsAppId',
        },
      ],
      messages: [
        {
          wamId: 'wamId',
        },
      ],
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const response = await whatsApp.sendMidia({
      to: '551799223802',
      mediaObjectId: '5645451',
    });
    expect(response.messagingProduct).toBe('whatsapp');
    expect(response.contacts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          phoneNumber: expect.any(String),
          whatsAppId: expect.any(String),
        }),
      ]),
    );
  });

  it('Test send message midia - Error', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendMidia').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 500,
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    whatsApp
      .sendMidia({
        to: '551799223802',
        mediaObjectId: '471678800',
      })
      .catch((error) => {
        expect(error).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            headers: expect.any(Object),
            status: expect.any(Number),
          }),
        );
      });
  });

  it('Test send message location - Ok', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendLocation').mockResolvedValue({
      messagingProduct: 'whatsapp',
      contacts: [
        {
          phoneNumber: 'phoneNumber',
          whatsAppId: 'whatsAppId',
        },
      ],
      messages: [
        {
          wamId: 'wamId',
        },
      ],
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    const response = await whatsApp.sendLocation({
      to: '5517992230802',
      location: {
        longitude: '-20.7751211',
        latitude: '-49.4194561',
        name: 'Giovani',
        address: 'Rua',
      },
    });
    expect(response.messagingProduct).toBe('whatsapp');
    expect(response.contacts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          phoneNumber: expect.any(String),
          whatsAppId: expect.any(String),
        }),
      ]),
    );
  });

  it('Test send message location - Error', async () => {
    const token = 'token';
    const phoneId = 'phoneId';
    const accountId = 'accountId';
    const requestService = new RequestService();
    const whatsPhone = new WhatsAppPhone(requestService, token, phoneId, accountId);
    const whatsMessage = new WhatsAppMessage(requestService, token, phoneId, accountId);
    jest.spyOn(whatsMessage, 'sendLocation').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 500,
    });
    const whatsApp = new WhatsApp(whatsPhone, whatsMessage);
    whatsApp
      .sendLocation({
        to: '5517992230802',
        location: {
          longitude: '-20.7751211',
          latitude: '-49.4194561',
          name: 'Giovani',
          address: 'Rua',
        },
      })
      .catch((error) => {
        expect(error).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            headers: expect.any(Object),
            status: expect.any(Number),
          }),
        );
      });
  });
});
