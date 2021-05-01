class CommandModel {
  constructor(public name: string, public args: Array<string | number>) {}

  toString(): string {
    return `${this.name} ${this.args.join(" ")}`;
  }
}

export { CommandModel };
