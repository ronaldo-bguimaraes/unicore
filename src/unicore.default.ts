import { UnicoreElement } from "./unicore";

interface IUnicoreButtonElementConfig {

}

interface IUnicoreButtonElement {

}

export class UnicoreButtonElement<T extends IUnicoreButtonElementConfig> extends UnicoreElement implements IUnicoreButtonElement {
  private readonly _config: T;

  constructor(config: T) {
    super();
    this._config = config;
  }

  get config(): IUnicoreButtonElementConfig {
    return this._config;
  }
}

const btn = new UnicoreButtonElement({});