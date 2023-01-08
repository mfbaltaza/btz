/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly FORM_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}