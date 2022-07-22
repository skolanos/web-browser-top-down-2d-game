import { FpsCounter } from './fps-counter';
import { ResourceManager } from './resource-manager';
import { MapRendererOrthogonal } from './map-renderer-orthogonal';
import { KeyboardController } from './keyboard-controller';

export class GameEngine {

	/**
	 *
	 * @param {CanvasRenderingContext2D} ctx
	 */
	constructor(ctx) {
		this._ctx = ctx;

		this._fpsCounter = new FpsCounter();
		this._resourceManager = new ResourceManager();
		this._mapRenderer = new MapRendererOrthogonal(this);
		this._keyboardController = new KeyboardController();

		this.updateCallback = null;
		this.drawCallback = null;
		this._tick = 0;
		this._lastTime = 0;
	}

	get ctx() {
		return this._ctx;
	}

	get fps() {
		return this._fpsCounter.getFps();
	}

	get resourceManager() {
		return this._resourceManager;
	}

	get keyboardController() {
		return this._keyboardController;
	}

	get mapRenderer() {
		return this._mapRenderer;
	}

	run(updateCallback, drawCallback) {
		this.updateCallback = updateCallback;
		this.drawCallback = drawCallback;

		this._tick = window.performance.now();
		window.requestAnimationFrame(() => this.animationFrame());
	}

	/*private*/ animationFrame() {
		this._lastTime = this._tick;
		this._tick = window.performance.now();
		const dt = this._tick - this._lastTime;
		this._fpsCounter.update();
		let updated = false;
		if (dt > 0) {
			updated = true;
			this.updateCallback(dt);
		}

		if (updated) {
			this.drawCallback();
		}

		window.requestAnimationFrame(() => this.animationFrame());
	}

}
