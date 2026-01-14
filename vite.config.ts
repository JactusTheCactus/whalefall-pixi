import { defineConfig } from "vite";
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	const baseConfig = { server: { hmr: { overlay: false } } };
	if (command === "build") {
		// npm run build
		return { ...baseConfig };
	} else {
		const serveConfig = { ...baseConfig };
		if (isPreview) {
			// npm run preview
			return { ...serveConfig };
		} else {
			// npm run dev
			return { ...serveConfig };
		}
	}
});
