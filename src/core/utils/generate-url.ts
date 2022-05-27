import 'dotenv/config'

/**
 * Get URL with endpoint
 * @param { string } endpoint
 * @returns { string }
 */
export const getUrl = (endpoint: string): string => {
  return `https://graph.facebook.com/v13.0/${endpoint}`
}
