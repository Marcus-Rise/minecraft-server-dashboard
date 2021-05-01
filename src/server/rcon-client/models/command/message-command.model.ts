import { CommandModel } from "./command.model";

/**
 * Sends a private message to one or more players
 * @link https://minecraft.fandom.com/wiki/Commands/msg
 */
class MessageCommandModel extends CommandModel {
  constructor(target: string, message: string) {
    super("msg", [target, message]);
  }
}

export { MessageCommandModel };
