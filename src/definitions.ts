declare module '@capacitor/core' {
  interface PluginRegistry {
    CookiesFlush: CookiesFlushPlugin;
  }
}

export interface CookiesFlushPlugin {
  flush(): Promise<void>;
}
