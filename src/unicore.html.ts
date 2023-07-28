import { IUnicoreApiConfig, Nullable, UnicoreApi, UnicoreElement, UnicoreNodeConstructor } from "./unicore";

export interface IUnicoreHtmlApiConfig extends IUnicoreApiConfig {
  domElement: Nullable<HTMLElement>;
}

export class UnicoreHtmlApi<T extends IUnicoreHtmlApiConfig> extends UnicoreApi<T> {
  create<B extends UnicoreNodeConstructor>(type: B) {
    const p = new type();
  }

}

export class UnicoreHtmlButtonElement extends UnicoreElement {

}