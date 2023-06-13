interface ISite {
  url: string;
  title?: string;
  description?: string;
  h1?: Array<string>;
  h2?: Array<string>;
  links?: Array<string>;
  creationDate: Date;
  updateDate: Date;
}

export type {ISite}
