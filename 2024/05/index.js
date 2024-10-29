export function escapePyramidHead(room) {
	const nlength = room.length;

	const pyramidFlatIndex = room.flat().findIndex((s) => s === "▲");
	const youFlatIndex = room.flat().findIndex((s) => s === "T");

	const pyramidY = pyramidFlatIndex % nlength;
	const pyramidX = Math.floor(pyramidFlatIndex / nlength);

	const youY = youFlatIndex % nlength;
	const youX = Math.floor(youFlatIndex / nlength);

	const queue = [[pyramidX, pyramidY, 0]];
	const visited = new Set([[pyramidX, pyramidY].toString()]);

	const directions = [
		{ x: -1, y: 0 },
		{ x: 1, y: 0 },
		{ x: 0, y: -1 },
		{ x: 0, y: 1 },
	];

	while (queue.length > 0) {
		const [x, y, steps] = queue.shift();
		if (youX === x && youY === y) return steps;

		for (const { x: dx, y: dy } of directions) {
			const nx = x + dx;
			const ny = y + dy;
			if (nx < 0 || ny < 0) continue;
			if (nx >= nlength || ny >= nlength) continue;
			if (room[nx][ny] === "#") continue;
			if (visited.has([nx, ny].toString())) continue;
			visited.add([nx, ny].toString());
			queue.push([nx, ny, steps + 1]);
		}
	}

	return -1;
}
