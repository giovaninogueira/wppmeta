import { RequestService } from '../../core/providers/request/request.service';
import { WhatsAppMessage } from '../../core/providers/whatsapp/whatsapp.message';

describe('Test of provider WhatsApp Message', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Test Send text - Ok', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockResolvedValue({
      data: {
        messaging_product: 'whatsapp',
        contacts: [
          {
            input: 'PHONE_NUMBER',
            wa_id: 'WHATSAPP_ID',
          },
        ],
        messages: [
          {
            id: 'wamid.ID',
          },
        ],
      },
      status: 200,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    const response = await whatsAppMessage.sendText({
      to: '5517992230802',
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

  it('Test Send text - Error', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 400,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    whatsAppMessage
      .sendText({
        to: '5517992230802',
        body: {
          message: 'oii',
          useUrl: true,
        },
      })
      .catch((error) => {
        expect(error).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            status: expect.any(Number),
          }),
        );
      });
  });

  it('Test Send Midia - Ok', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockResolvedValue({
      data: {
        messaging_product: 'whatsapp',
        contacts: [
          {
            input: 'PHONE_NUMBER',
            wa_id: 'WHATSAPP_ID',
          },
        ],
        messages: [
          {
            id: 'wamid.ID',
          },
        ],
      },
      status: 200,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    const response = await whatsAppMessage.sendMidia({
      to: '5517992230802',
      mediaObjectId: '7987567897',
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

  it('Test Send Midia - Error', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 400,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    whatsAppMessage
      .sendMidia({
        to: '5517992230802',
        mediaObjectId: '89478974',
      })
      .catch((error) => {
        expect(error).toEqual(
          expect.objectContaining({
            error: expect.any(String),
            status: expect.any(Number),
          }),
        );
      });
  });

  it('Test Send Location - Ok', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockResolvedValue({
      data: {
        messaging_product: 'whatsapp',
        contacts: [
          {
            input: 'PHONE_NUMBER',
            wa_id: 'WHATSAPP_ID',
          },
        ],
        messages: [
          {
            id: 'wamid.ID',
          },
        ],
      },
      status: 200,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    const response = await whatsAppMessage.sendLocation({
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

  it('Test Send Location - Error', async () => {
    const request = new RequestService();
    jest.spyOn(request, 'post').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 400,
    });
    const whatsAppMessage = new WhatsAppMessage(request, 'token', 'phoneId');
    whatsAppMessage
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
            status: expect.any(Number),
          }),
        );
      });
  });
});
