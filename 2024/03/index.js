export function findSafestPath(dream) {
	const n = dream.length;
	const m = dream[0].length;
	const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

	// Llenar la primera fila y la primera columna
	dp[0][0] = dream[0][0];
	for (let i = 1; i < n; i++) {
		dp[i][0] = dp[i - 1][0] + dream[i][0];
	}
	for (let j = 1; j < m; j++) {
		dp[0][j] = dp[0][j - 1] + dream[0][j];
	}

	// Llenar el resto de la matriz dp
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dream[i][j];
		}
	}

	return dp[n - 1][m - 1];
}
