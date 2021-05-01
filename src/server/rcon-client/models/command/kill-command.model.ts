/**
 * Kills entities (players, mobs, items, etc.)
 * @link https://minecraft.fandom.com/wiki/Commands/kill
 */
import { CommandModel } from "./command.model";

class KillCommandModel extends CommandModel {
  constructor(target: string) {
    super("kill", [target]);
  }
}

export { KillCommandModel };
