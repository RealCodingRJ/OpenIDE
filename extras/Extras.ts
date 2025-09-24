import { OPTIONTypes } from "../types/types";

interface Extras {
  message: string;
  getTypesCommad(command: OPTIONTypes): void;
}

export class IDE implements Extras {
  message: "";
  constructor(message: OPTIONTypes) {
    this.message = message;
  }

  getTypesCommad(): string {
    return this.message;
  }
}
