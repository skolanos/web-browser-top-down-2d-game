class HudDebugger {

	constructor() {
		this.messages = [];
	}

	clear() {
		this.messages = [];
	}

	add(text) {
		this.messages.push(text);
	}

	addIfNotExists(text, search_text) {
		let idx = -1;
		for (let i=0; i < hudDebugger.messages.length; i++) {
			if (hudDebugger.messages[i].indexOf(search_text) >= 0) {
				idx = i;
				break;
			}
		}
		if (idx < 0) {
			hudDebugger.messages.push(text);
		}
	}

	draw(/** @type {CanvasRenderingContext2D} */ ctx) {
		ctx.save();
		ctx.translate(10, 10);
		ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
		ctx.fillRect(0, 0, 300, ctx.canvas.height - 10 - 10);
		ctx.font = '10pt sans-serif';
		ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
		for (let i = 0; i < this.messages.length; i++) {
			ctx.fillText(this.messages[i], 10, 14 + 16 * i);
		}
		ctx.restore();
	}

}

export const hudDebugger = new HudDebugger();
