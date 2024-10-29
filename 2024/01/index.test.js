import { expect, expectTypeOf, test, describe } from "vitest";
import { createMagicPotion } from "./index.js";
describe("create magin Potion", () => {
	test("test 1", () => {
		expectTypeOf(createMagicPotion([], 1)).toBeArray();
	});

	test("test 2", () => {
		expect(createMagicPotion([13, 5, 6, 2], 8)).toStrictEqual([2, 3]);
	});

	test("test 3", () => {
		expect(createMagicPotion([11, 3, 7, 5], 10)).toStrictEqual([1, 2]);
	});

	test("test 4", () => {
		expect(createMagicPotion([4, 3, 2, 3, 4], 6)).toStrictEqual([0, 2]);
	});

	test("test 5", () => {
		expect(createMagicPotion([0, 0, -2, 3], 2)).toBeUndefined();
	});

	test("test 6", () => {
		expect(createMagicPotion([10, 5, 2, 3, 7, 5], 10)).toStrictEqual([3, 4]);
	});

	test("test 7", () => {
		expect(createMagicPotion([1, 2, 3, 4, 5], 8)).toStrictEqual([2, 4]);
	});

	test("test 8", () => {
		expect(createMagicPotion([5, 1, 4, 6, 2], 9)).toStrictEqual([0, 2]);
	});

	test("test 9", () => {
		expect(createMagicPotion([1, -2, 3, -4, 5], -1)).toStrictEqual([0, 1]);
	});

	test("test 10", () => {
		expect(createMagicPotion([10, 20, 30, 40], 50)).toStrictEqual([1, 2]);
	});

	test("test 11", () => {
		expect(createMagicPotion([], 10)).toBeUndefined();
	});
});
