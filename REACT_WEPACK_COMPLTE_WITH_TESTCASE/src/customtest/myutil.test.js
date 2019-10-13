import { multiply, divide } from "./myutil";

test("multiply 1 * 2 to equal 2", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("divide 2 / 1 to equal 2", () => {
  expect(divide(2, 1)).toBe(2);
});
