// unlighthouse.config.ts
import { defineUnlighthouseConfig } from "unlighthouse/config";
import { executablePath } from "puppeteer";

export default defineUnlighthouseConfig({
  site: "http://localhost:3000",
  debug: true,
  scanner: {
    samples: 3,
    throttle: true,
    maxRoutes: 100,
  },
  puppeteerOptions: {
    headless: false,
    args: ["--no-sandbox"],
    executablePath: executablePath(),
  },
});
