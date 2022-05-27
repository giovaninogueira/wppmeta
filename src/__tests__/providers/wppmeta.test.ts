import { WppMeta } from '../../core/providers/wppmeta/wppmeta'
import { WhatsApp } from '../../core/providers/whatsapp/whatsapp'

describe('Test of provider WppMeta', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Test config WppMeta - Ok', () => {
    const wppMeta = WppMeta.config({
      accountId: 'accountId',
      phoneId: 'phoneId',
      token: 'token',
    })
    expect(wppMeta instanceof WhatsApp).toEqual(true)
  })
})
