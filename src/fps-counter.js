export class FpsCounter {

	constructor() {
		this.fps = 0;
		this.lastFrameTime = 0;
		this.frameCount = 0;
	}

	update() {
		let currentFrameTime = Math.floor(Date.now() / 1000);
		if (this.lastFrameTime === 0) {
			this.lastFrameTime = currentFrameTime;
		}

		if (currentFrameTime === this.lastFrameTime) {
			// jeżeli to ta sama sekunda co poprzednio to zwiększamy liczbę klatek o 1
			this.frameCount++;
		}
		else {
			this.lastFrameTime = currentFrameTime;
			this.fps = this.frameCount;
			this.frameCount = 1;
		}
	}

	getFps() {
		return this.fps;
	}

}
