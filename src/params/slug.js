/** @param {string} param */
export function match(param) {
	return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(param);
}