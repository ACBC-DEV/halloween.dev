export function battleHorde(zombies, humans) {
	let zTotal = 0;
	let hTotal = 0;

	for (const zombie of zombies) {
		zTotal += +zombie;
	}
	for (const human of humans) {
		hTotal += +human;
	}
	if (zTotal === hTotal) return "x";
	return zTotal > hTotal ? `${zTotal - hTotal}z` : `${hTotal - zTotal}h`;
}
