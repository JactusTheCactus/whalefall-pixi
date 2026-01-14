//import "./assets/style.css";
import Decimal from "break_eternity.js";
jQuery(() => {
	function fmt(x: Decimal) {
		if (x.lt(1e6)) {
			return x.toFixed(0);
		} else {
			return `${x.mantissa.toFixed(2)}e${x.exponent}`;
		}
	}
	class Game {
		gold = new Decimal(0);
		miners = new Decimal(1);
		update() {
			$("#gold").text(fmt(this.gold));
			$("#miners").text(fmt(this.miners));
		}
		tick(dt: number) {
			this.gold = this.gold.add(this.miners.mul(dt));
		}
		buy(gen: "miner") {
			switch (gen) {
				case "miner":
					if (this.gold.gte(10)) {
						this.gold = this.gold.sub(10);
						this.miners = this.miners.add(1);
						this.update();
					}
					break;
			}
		}
	}
	const game = new Game();
	const lastUpdate = Date.now();
	setInterval(() => {
		const now = Date.now();
		const dt = (now - lastUpdate) / 1000;
		game.tick(dt);
	}, 1000);
	$("#buyminer").on("click",()=>game.buy("miner"))
	game.update();
});
