export class MapRendererOrthogonal {

	constructor(gameEngine) {
		this.gameEngine = gameEngine;

		this.tilemap = null;
		this.tileset = null;
		this.image = null;
	}

	draw() {
		for (let i = 0; i < this.tilemap.data.layers.length; i++) {
			let current_layer = this.tilemap.data.layers[i];
			if (current_layer.visible && current_layer.data) {
				for (let y = 0; y < current_layer.height; y++) {
					for (let x = 0; x < current_layer.width; x++) {
						const tileno = current_layer.data[y * current_layer.width + x];
						if (tileno !== 0) {
							let current_tileset = this.tileset.data;

							const sx = Math.floor((tileno - 1) % current_tileset.columns) * current_tileset.tilewidth;
							const sy = Math.floor((tileno - 1) / current_tileset.columns) * current_tileset.tileheight;
							const sw = current_tileset.tilewidth;
							const sh = current_tileset.tileheight;
							const dx = x * current_tileset.tilewidth;
							const dy = y * current_tileset.tileheight;
							const dw = current_tileset.tilewidth;
							const dh = current_tileset.tileheight;

							this.gameEngine.ctx.drawImage(this.image.data, sx, sy, sw, sh, dx, dy, dw, dh);
						}
					}
				}
			}
			else if (current_layer.visible && current_layer.objects) {
				
			}
		}
	}

}
