var capacitorCookiesFlush = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
