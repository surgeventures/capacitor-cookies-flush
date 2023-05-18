import { WebPlugin } from '@capacitor/core';
import type { CookiesFlushPlugin } from './definitions';
export declare class CookiesFlushWeb extends WebPlugin implements CookiesFlushPlugin {
    flush(): Promise<void>;
}
