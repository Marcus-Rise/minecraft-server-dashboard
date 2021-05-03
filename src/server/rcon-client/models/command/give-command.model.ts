import { CommandModel } from "./command.model";

class GiveCommandModel extends CommandModel {
  constructor(target: string, item: string, count?: number) {
    super("give", [target, item, count]);
  }
}

export { GiveCommandModel };
