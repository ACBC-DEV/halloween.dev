import { expect, expectTypeOf, test, describe } from "vitest";
import { findTheKiller } from "./index.js";
describe("findThe killer", () => {
	test("test 1", () => {
		expectTypeOf(
			findTheKiller("d~~~~~a", [
				"Dracula",
				"Freddy Krueger",
				"Jason Voorhees",
				"Michael Myers",
			]),
		).toBeString();
	});

	test("test 2", () => {
		expect(
			findTheKiller("d~~~~~a", [
				"Dracula",
				"Freddy Krueger",
				"Jason Voorhees",
				"Michael Myers",
			]),
		).toBe("Dracula");
	});

	test("test 3", () => {
		expect(findTheKiller("~r~dd~", ["Freddy", "Freddier", "Fredderic"])).toBe(
			"Freddy,Freddier,Fredderic",
		);
	});

	test("test 4", () => {
		expect(findTheKiller("~r~dd$", ["Freddy", "Freddier", "Fredderic"])).toBe(
			"",
		);
	});

	test("test 5", () => {
		expect(findTheKiller("mi~~def", ["Midudev", "Midu", "Madeval"])).toBe("");
	});

	test("test 6", () => {
		expect(
			findTheKiller("~~~~~~", ["Pennywise", "Leatherface", "Agatha"]),
		).toBe("Pennywise,Leatherface,Agatha");
	});

	test("test 7", () => {
		expect(
			findTheKiller("~~~~~~$", ["Pennywise", "Leatherface", "Agatha"]),
		).toBe("Agatha");
	});

	test("test 8", () => {
		expect(
			findTheKiller("s~v~r~", [
				"Severus Snape",
				"Sirius Black",
				"Salazar Slytherin",
			]),
		).toBe("Severus Snape");
	});

	test("test 9", () => {
		expect(
			findTheKiller("~~~~~y$", ["Chucky", "Tiffany", "Freddy", "Mickey"]),
		).toBe("Chucky,Freddy,Mickey");
	});
});
