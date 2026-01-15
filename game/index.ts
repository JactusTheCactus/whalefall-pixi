import Decimal from "break_eternity.js";
const goldenRatio = new Decimal((1 + Math.sqrt(5)) / 2);
jQuery(() => {
	function fmt(x: Decimal) {
		if (x.lt(1e6)) {
			return x.toFixed(0);
		} else {
			return x.toExponential(2);
		}
	}
	type Resource = {
		count: Decimal;
		cost?: Decimal;
	};
	class Game {
		gold: Resource = { count: new Decimal(0) };
		miners: Resource = { count: new Decimal(1), cost: new Decimal(10) };
		tick(dt: number) {
			this.gold.count = this.gold.count.add(
				this.miners.count.mul(dt).div(goldenRatio).div(1e2)
			);
			$("#gold").text(fmt(this.gold.count));
			$("#miners").text(fmt(this.miners.count));
			$("#minercost").text(fmt(this.miners.cost!));
		}
		buy(gen: "miner") {
			switch (gen) {
				case "miner":
					if (this.gold.count.gte(this.miners.cost!)) {
						this.gold.count = this.gold.count.sub(
							this.miners.cost!
						);
						this.miners.count = this.miners.count.add(1);
						this.miners.cost = this.miners.count
							?.mul(10)
							.mul(goldenRatio.pow(2));
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
	}, 100);
	$("#buyminer").on("click", () => game.buy("miner"));
});
