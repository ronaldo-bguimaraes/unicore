export type Nullable<T> = T | null;

export interface IUnicoreApiConfig {

}

export interface IUnicoreApi<T extends IUnicoreApiConfig = IUnicoreApiConfig> {
  readonly config: T;
}

export abstract class UnicoreApi<T extends IUnicoreApiConfig> implements IUnicoreApi<T> {
  private _config: T;

  constructor(config: T) {
    this._config = config;
  }

  public get config(): Readonly<T> {
    return this._config;
  }
}

export interface IUnicoreNode {
  readonly parent: Nullable<IUnicoreElement>;
}

export abstract class UnicoreNode implements IUnicoreNode {
  private _parent: Nullable<IUnicoreElement>;

  constructor() {
    this._parent = null;
  }

  get parent(): Nullable<IUnicoreElement> {
    return this._parent;
  }
}

interface IUnicoreNodeList<T extends IUnicoreNode> extends Iterable<T> {

}

export class UnicoreNodeList<T extends IUnicoreNode = IUnicoreNode> extends Set<T> implements IUnicoreNodeList<T> {

}

export interface UnicoreNodeConstructor {
  new(): UnicoreNode;
}

export interface IUnicoreElement extends IUnicoreNode {
  readonly children: UnicoreNodeList;
}

export abstract class UnicoreElement extends UnicoreNode implements IUnicoreElement {
  private readonly _children: UnicoreNodeList;

  constructor() {
    super();
    this._children = new UnicoreNodeList();
  }

  get children(): UnicoreNodeList {
    return this._children;
  }
}

export interface IUnicoreInput<T extends Object> extends IUnicoreNode {
  value: Nullable<T>;
}

export interface IUnicoreOutput<T extends Object> extends IUnicoreNode {
  value: Nullable<T>;
}


export interface IUnicoreHandlerConfig<T extends IUnicoreApi> {
  api: T;
}

export class UnicoreHandler<T extends IUnicoreApi, U extends IUnicoreHandlerConfig<T>> {
  private _config: U;

  constructor(config: U) {
    this._config = config;
  }

  get config(): U {
    return this._config;
  }

  get api(): T {
    return this.config.api;
  }
}