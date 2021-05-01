import { CommandModel } from "./command.model";

describe("CommandModel", () => {
  it("should return plain string", () => {
    expect(new CommandModel("test", ["arg1", "arg2"]).toString()).toEqual("test arg1 arg2");
  });
});
