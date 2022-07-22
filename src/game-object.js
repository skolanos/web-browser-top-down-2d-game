import { Point2 } from './types/point2';
import { Vector2 } from './types/vector2';

export class GameObject {

	constructor(gameEngine) {
		this.gameEngine = gameEngine;

		this.id = '';
		this.position = new Point2(0, 0); // pozycja obiektu w świecie gry
		this.size = new Point2(0, 0); // szerokość i wysokość obiektu
		this.direction = Vector2.vectorDown(); // kierunek w którym zwrócony jest obiekt
		this.tilemap = null;
		this.tileset = null;
	}

	setTilemap(tilemap) {
		this.tilemap = tilemap;
	}

	setTileset(tileset) {
		this.tileset = tileset;
	}

	draw() {
		this.gameEngine.ctx.drawImage(this.tilemap.data, 0, 0, this.size.x, this.size.y, this.position.x, this.position.y, this.size.x, this.size.y);
	}

}
