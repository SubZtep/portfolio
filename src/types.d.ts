/// <reference types="vite/client" />

declare module "marked" {
  export const parse: (template: string) => string
}
