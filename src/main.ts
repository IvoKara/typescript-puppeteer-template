import puppeteer from 'puppeteer'

import { webDevUrl } from './constants'
import { delay, isHeadless } from './utils'
import type { Status } from './types';

(async () => {
  const browser = await puppeteer.launch({
    headless: isHeadless,
  })

  const page = await browser.newPage()
  await page.goto(webDevUrl)

  delay(15_000)

  const heading = await page
    .locator(`h3#building-a-better-web-together`)
    .map(h3 => h3.dataset.text)
    .wait()

  console.info(heading)

  const status: Status = 'done'
  console.info(status)

  await browser.close()
})()
