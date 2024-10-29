export function findTheKiller(whisper, suspects) {
	const matchedSuspects = suspects.filter((suspect) => {
		const regexPattern = whisper.replace(/~/g, "\\w"); // Cambia cada ~ a \\w* para permitir 0 o más caracteres alfanuméricos
		const regex = new RegExp(`^${regexPattern}`, "gi"); // Añade ^ y $ para coincidir el patrón completo
		return regex.test(suspect);
	});
	return matchedSuspects.length === 0 ? "" : matchedSuspects.join(",");
}
