import 'dotenv/config'

/**
 * Get URL with endpoint
 * @param { string } endpoint
 * @returns { string }
 */
export const getUrl = (endpoint: string): string => {
  return `${process.env.URL_WHATSAPP_CLOUD_API_META}/${endpoint}`
}
