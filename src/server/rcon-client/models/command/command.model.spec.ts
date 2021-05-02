import { CommandModel } from "./command.model";

describe("CommandModel", () => {
  it("should return plain string", () => {
    expect(new CommandModel("test", ["arg1", "arg2"]).toString()).toEqual("test arg1 arg2");
  });

  it("should return plain string with undefined arg", () => {
    expect(new CommandModel("test", [undefined, "arg2"]).toString()).toEqual("test arg2");
  });

  it("should return plain string without args", () => {
    expect(new CommandModel("test").toString()).toEqual("test");
  });
});
