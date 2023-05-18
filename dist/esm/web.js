import { WebPlugin } from '@capacitor/core';
export class CookiesFlushWeb extends WebPlugin {
    async flush() {
        return Promise.resolve();
    }
}
//# sourceMappingURL=web.js.map