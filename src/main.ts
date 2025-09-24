import { question } from "readline-sync";
import { IDE } from "../extras/Extras";
import { exec } from "child_process";
import { error } from "console";
import { stderr, stdout } from "process";
import { OPTIONTypes } from "../types/types";

function getCodeIDE(name: OPTIONTypes) {
  exec(`${name}`, (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
  });
}

function getTypeIDE(message: any): string[] {
  message.map((e: string) => {
    getCodeIDE(e);
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
    getTypeIDE("code .") as unknown as string;

    const projectName = new IntroMessage("Enter Project to Create: ");
    const project_name = question(projectName.getMessage());

    if (project_name == "Webstorm") {
      getTypeIDE("webstorm .");
    }

    console.log("You Chose: " + message.getTypesCommad());
  }
}

main();
