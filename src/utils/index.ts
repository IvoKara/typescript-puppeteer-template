import process from 'node:process'

export async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const isHeadless = process.env.HEADLESS === 'false' ? false : 'new'
