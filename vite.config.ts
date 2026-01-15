import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const dir = dirname(fileURLToPath(import.meta.url));
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	const baseConfig: Record<string, any> = {
		server: { hmr: { overlay: false } },
		build: { rollupOptions: { input: {} } },
	};
	function addPath(id: string, path: string) {
		baseConfig.build.rollupOptions.input[id] = resolve(dir, path);
	}
	addPath("main", "index.html");
	addPath("game", "game/index.html");
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
