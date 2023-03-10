const { isEmpty, isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("validation test suites - isValid", () => {
    test("should return false as the label is undefined", () => {
        const result = isValid();
        expect(result).toBe(false);
    });
    test("should return false as the label is empty", () => {
        const result = isValid("");
        expect(result).toBe(false);
    });
    test("should return false as the label is not eight char or more", () => {
        const result = isValid("azer");
        expect(result).toBe(false);
    });
    test("should return false as the label does not contain a special char", () => {
        const result = isValid("azertyui");
        expect(result).toBe(false);
    });
    test("should return false as the label does not contain a number", () => {
        const result = isValid("azruytruioyz=");
        expect(result).toBe(false);
    });
    test("should return true as the label is valid", () => {
        const result = isValid("aazzzzee!8è!");
        expect(result).toBe(true);
    });
});
