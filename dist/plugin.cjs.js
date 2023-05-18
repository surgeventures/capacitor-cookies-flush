'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CookiesFlush = core.registerPlugin('CookiesFlush', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CookiesFlushWeb()),
});

class CookiesFlushWeb extends core.WebPlugin {
    async flush() {
        return Promise.resolve();
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CookiesFlushWeb: CookiesFlushWeb
});

exports.CookiesFlush = CookiesFlush;
//# sourceMappingURL=plugin.cjs.js.map
