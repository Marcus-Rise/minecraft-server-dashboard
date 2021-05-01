import { CommandModel } from "./command.model";

/**
 * Sends a message in the chat
 * @link https://minecraft.fandom.com/wiki/Commands/say
 */
class SayCommandModel extends CommandModel {
  constructor(message: string) {
    super("say", [message]);
  }
}

export { SayCommandModel };
