import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { el } from "./html.ts";
document.querySelector<HTMLDivElement>("#app")!.appendChild(
	el(
		undefined,
		{},
		el(
			"a",
			{ href: "https://vite.dev", target: "_blank" },
			el("img", { src: viteLogo, className: "logo", alt: "Vite Logo" })
		),
		el(
			"a",
			{ href: "http://www.typescriptlang.org/", target: "_blank" },
			el("img", {
				src: typescriptLogo,
				className: "logo vanilla",
				alt: "TypeScript Logo",
			})
		),
		el("h1", {}, "Vite + Typescript"),
		el(
			undefined,
			{ className: "card" },
			el("button", { id: "counter", type: "button" }),
			el(
				"p",
				{ className: "read-the-docs" },
				"Click on the Vite and TypeScript logos to learn more"
			)
		)
	)
);
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
