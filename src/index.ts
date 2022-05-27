import { WppMeta } from './core/providers/wppmeta/wppmeta'

const token =
  'EAAKk8rcIctoBAH0wtnjW3kDQZCGg7VsguK5yoj2qOZCZCD3jaZCli6taY6ObMdA3DgvezfyYFYPcsPEhpiMbVcwCOKuIH668W5AhCclyf3WXJ5V1mjsrXzTjRnD5TsPZC3v1lPrCDeSK6j5ii8ZAeF3v0sTUOe6nXtVDfruXPYnfwr1aniO1XLV3vyZAdBUKwdkVwsQ3fB5AQZDZD'
const whatsApp = WppMeta.config({
  token,
  accountId: '108299961890984',
  phoneId: '103858795675152',
})

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
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
