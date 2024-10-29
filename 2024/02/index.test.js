import { expect, expectTypeOf, test, describe } from "vitest";
import { battleHorde } from "./index.js";
describe("battle Horde", () => {
	test("test 1", () => {
		expectTypeOf(battleHorde("", "")).toBeArray();
	});

	test("test 2", () => {
		expect(battleHorde("242", "334")).toBe("2h");
	});

	test("test 3", () => {
		expect(battleHorde("444", "282")).toBe("x");
	});

	test("test 4", () => {
		expect(battleHorde("555", "666")).toBe("3h");
	});

	test("test 5", () => {
		expect(battleHorde("321", "123")).toBe("x");
	});

	test("test 6", () => {
		expect(battleHorde("4598", "7682")).toBe("3z");
	});

	test("test 7", () => {
		expect(battleHorde("8989898999", "7779998811")).toBe("20z");
	});

	test("test 8", () => {
		expect(battleHorde("57685849323", "98765438965")).toBe("10h");
	});
});
