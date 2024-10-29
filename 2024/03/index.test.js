import { expect, expectTypeOf, test, describe } from "vitest";
import { findSafestPath } from "./index.js";
describe("find Safest Path", () => {
	test("test 1", () => {
		expectTypeOf(
			findSafestPath([
				[1, 3, 1],
				[1, 5, 1],
				[4, 2, 1],
			]),
		).toBeNumber();
	});

	test("test 2", () => {
		expect(
			findSafestPath([
				[1, 3, 1],
				[1, 5, 1],
				[4, 2, 1],
			]),
		).toBe(7);
	});

	test("test 3", () => {
		expect(
			findSafestPath([
				[5, 9],
				[4, 2],
			]),
		).toBe(11);
	});

	test("test 4", () => {
		expect(
			findSafestPath([
				[1, 1, 1],
				[1, 1, 1],
				[1, 1, 1],
			]),
		).toBe(5);
	});

	test("test 5", () => {
		expect(
			findSafestPath([
				[1, 2, 3],
				[3, 2, 1],
				[4, 4, 4],
			]),
		).toBe(10);
	});

	test("test 6", () => {
		expect(
			findSafestPath([
				[1, 2],
				[3, 4],
				[6, 5],
				[7, 8],
			]),
		).toBe(20);
	});

	test("test 7", () => {
		expect(
			findSafestPath([
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			]),
		).toBe(21);
	});
});
