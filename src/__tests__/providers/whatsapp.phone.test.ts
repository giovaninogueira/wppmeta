import { RequestService } from '../../core/providers/request/request.service'
import { WhatsAppPhone } from '../../core/providers/whatsapp/whatsapp.phone'

describe('Test of provider WhatsApp Phone', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Test List of phones - Ok', async () => {
    const request = new RequestService()
    jest.spyOn(request, 'get').mockResolvedValue({
      data: [
        {
          verified_name: 'Test Number',
          code_verification_status: 'NOT_VERIFIED',
          display_phone_number: '15550213123',
          quality_rating: 'GREEN',
          id: '103858795675152',
        },
      ],
      status: 200,
    })
    const whatsAppPhone = new WhatsAppPhone(request, 'token')
    const phones = await whatsAppPhone.getPhones()
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
    )
  })

  it('Test List of phones - Error', async () => {
    const request = new RequestService()
    jest.spyOn(request, 'get').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 400,
    })
    const whatsAppPhone = new WhatsAppPhone(request, 'token')
    whatsAppPhone.getPhones().catch((error) => {
        console.log(error)
        expect(error).toEqual(
            expect.objectContaining({
                error: expect.any(String),
                status: expect.any(Number)
            })
        )
    })
  })

  it('Test register phones - Ok', async () => {
    const request = new RequestService()
    jest.spyOn(request, 'post').mockResolvedValue({
      data: 'true',
      status: 200,
    })
    
    const whatsAppPhone = new WhatsAppPhone(request, 'token')
    const success = await whatsAppPhone.registerPhone({
      messagingProduct: 'whatsapp',
      phoneId: '6545889',
      pin: '123456'
    })
    expect(success).toEqual(true)
  })

  it('Test List of phones - Error', async () => {
    const request = new RequestService()
    jest.spyOn(request, 'post').mockRejectedValue({
      error: 'error',
      headers: {},
      status: 400,
    })
    const whatsAppPhone = new WhatsAppPhone(request, 'token')
    whatsAppPhone.registerPhone({
      messagingProduct: 'whatsapp',
      phoneId: '6545889',
      pin: '123456'
    }).catch((error) => {
        console.log(error)
        expect(error).toEqual(
            expect.objectContaining({
                error: expect.any(String),
                status: expect.any(Number)
            })
        )
    })
  })
})
