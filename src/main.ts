import { question } from "readline-sync";
import { IDE } from "../extras/Extras";
import { exec } from "child_process";
import { error } from "console";
import { stderr, stdout } from "process";
import { OPTIONTypes } from "../types/types";

function getCodeIDE() {
  exec("code .", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
  });
}

function getTypeIDE(message: any): string[] {
  message.map((e: string) => {
    if (e.startsWith("Code")) {
      getCodeIDE();
    }
  });

  return message;
}

interface Message {
  message: string;
  getMessage(): void;
}

class IntroMessage implements Message {
  message: "";
  constructor(message: OPTIONTypes) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}

function main() {
  let messageWelcome = new IntroMessage("| Welcome to OpenIDE |");
  console.log(messageWelcome.getMessage());

  const message = new IDE("| Enter Type: |");
  let command = question(message.getTypesCommad());

  if (command.startsWith("Code")) {
    getTypeIDE(command.toString()) as unknown as string;

    console.log("You Chose: " + message.getTypesCommad());
  }
}

main();
