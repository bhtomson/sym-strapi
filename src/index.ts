// src/index.ts
import type { Core } from '@strapi/strapi';

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Ensure Koa trusts proxy headers in v5 (same as server.proxy.koa = true)
    strapi.server.app.proxy = true;

    // Debug: show which DB config file Strapi bundled
    // (folder is the compiled app root when running on Render)
    // You can remove this once things are stable.
    try {
      // eslint-disable-next-line no-console
      console.log('=== BOOT cwd:', process.cwd());
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fs = require('fs');
      // eslint-disable-next-line no-console
      console.log(
        '=== DB CONFIG FILES IN ./config ===',
        fs.readdirSync('./config').filter((f: string) => f.includes('database'))
      );
    } catch {}
  },
};
