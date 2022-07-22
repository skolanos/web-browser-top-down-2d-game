import { Point2 } from './types/point2';
import { Vector2 } from './types/vector2';
import { GameEngine } from './game-engine';
import { GameObject } from './game-object';
import { hudDebugger } from './hud-debugger';

var gameEngine = null;
var player = null;

var configuration = {
	input: {
		movePlayerLeftKey: Keyboard.A,
		movePlayerRightKey: Keyboard.D,
		movePlayerUpKey: Keyboard.W,
		movePlayerDownKey: Keyboard.S
	}
};

document.addEventListener('DOMContentLoaded', async () => {
	document.body.focus();

	let ctx = document.querySelector('#game-canvas').getContext('2d');
	ctx.imageSmoothingEnabled = false;

	gameEngine = new GameEngine(ctx);
	try {
		await gameEngine.resourceManager.load([
			{ id: 'grafika-tileset.png',     type: 'image',      url: './assets/maps/grafika-tileset.png' },
			{ id: 'grafika-tileset.tileset', type: 'tileset',    url: './assets/maps/grafika-tileset.json' },
			{ id: 'map-001.tilemap',         type: 'tilemap',    url: './assets/maps/map-001.json' }
		]);
	}
	catch (e) {
		console.log('Wystąpił błąd przy wczytywaniu zasobów.', e);
		return;
	}
	gameEngine.keyboardController.attache();

	/*
	player = new GameObject(gameEngine);
	player.id = 'player';
	player.position = new Point2(100, 100);
	player.size = new Point2(48, 48);
	player.direction = Vector2.vectorRight();
	player.setTilemap(gameEngine.resourceManager.get('player'));
	*/

	gameEngine.mapRenderer.tilemap = gameEngine.resourceManager.get('map-001.tilemap');
	gameEngine.mapRenderer.tileset = gameEngine.resourceManager.get('grafika-tileset.tileset');
	gameEngine.mapRenderer.image = gameEngine.resourceManager.get('grafika-tileset.png');

	gameEngine.run(update, draw);
});

const update = (dt) => {
	hudDebugger.clear();

	if (gameEngine.keyboardController.isDown(configuration.input.movePlayerUpKey)) {
	}
	else if (gameEngine.keyboardController.isDown(configuration.input.movePlayerDownKey)) {
	}
	if (gameEngine.keyboardController.isDown(configuration.input.movePlayerLeftKey)) {
	}
	else if (gameEngine.keyboardController.isDown(configuration.input.movePlayerRightKey)) {
	}
};

const draw = () => {
	// wyczyszczenie ekranu
	gameEngine.ctx.fillStyle = 'rgba(63, 72, 204, 1.0)';
	gameEngine.ctx.fillRect(0, 0, gameEngine.ctx.canvas.width, gameEngine.ctx.canvas.height);

	hudDebugger.add('FPS: ' + gameEngine.fps);

	/*
	player.draw();
	*/
	gameEngine.mapRenderer.draw();

	hudDebugger.draw(gameEngine.ctx);
};
