export function makeSerializable(object) {
	return JSON.parse(JSON.stringify(object));
}
