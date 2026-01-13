export function el<K extends keyof HTMLElementTagNameMap = "div">(
	tag?: K,
	props: Partial<HTMLElementTagNameMap[K]> = {},
	...children: (Node | string)[]
) {
	const node = document.createElement((tag ?? "div") as K);
	Object.assign(node, props);
	for (const child of children) {
		node.append(
			child instanceof Node ? child : document.createTextNode(child)
		);
	}
	return node;
}
