import { expect, expectTypeOf, test, describe } from "vitest";
import { escapePyramidHead } from "./index.js";
describe("escape Pyramid Head", () => {
	test("test 1", () => {
		expectTypeOf(
			escapePyramidHead([
				[".", ".", "#", ".", "▲"],
				["#", ".", "#", ".", "#"],
				[".", ".", ".", ".", "."],
				["#", "#", "#", ".", "#"],
				["T", ".", ".", ".", "."],
			]),
		).toBeNumber();
	});

	test("test 2", () => {
		expect(
			escapePyramidHead([
				["T", ".", "#", "."],
				[".", ".", ".", "."],
				["▲", ".", ".", "#"],
				[".", "#", "#", "#"],
			]),
		).toBe(2);
	});

	test("test 3", () => {
		expect(
			escapePyramidHead([
				[".", ".", "#", ".", "▲"],
				["#", ".", "#", ".", "#"],
				[".", ".", ".", ".", "."],
				["#", "#", "#", ".", "#"],
				["T", ".", ".", ".", "."],
			]),
		).toBe(8);
	});
	test("test 4", () => {
		expect(
			escapePyramidHead([
				["#", "#", "#"],
				["▲", ".", "#"],
				[".", "#", "T"],
			]),
		).toBe(-1);
	});
	test("test 5", () => {
		expect(
			escapePyramidHead([
				["#", "#"],
				["▲", "T"],
			]),
		).toBe(1);
	});
	test("test 6", () => {
		expect(
			escapePyramidHead([
				[".", ".", "."],
				["T", "▲", "."],
				[".", ".", "."],
			]),
		).toBe(1);
	});
});
