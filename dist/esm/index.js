import { registerPlugin } from '@capacitor/core';
const CookiesFlush = registerPlugin('CookiesFlush', {
    web: () => import('./web').then(m => new m.CookiesFlushWeb()),
});
export * from './definitions';
export { CookiesFlush };
//# sourceMappingURL=index.js.map