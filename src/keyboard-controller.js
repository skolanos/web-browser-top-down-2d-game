export const Keyboard = {
	leftArrow: 37,
	rightArrow: 39,
	upArrow: 38,
	downArrow: 40,
	A: 65,
	D: 68,
	W: 87,
	S: 83,
	F: 70,
	space: 32
};

export class KeyboardController {

	constructor() {
		this.repetitionSpeed = 500;
		this.pressedKeys = new Array(255);
	}

	attache() {
		window.addEventListener('keydown', (event) => {
			// console.log(event.keyCode);
			this.onKeydown.call(this, event);
		});
		window.addEventListener('keyup', (event) => {
			this.onKeyup.call(this, event);
		});
	}

	/*private*/ onKeydown(event) {
		event.preventDefault();

		if (!this.pressedKeys[event.keyCode]) {
			this.pressedKeys[event.keyCode] = { time: new Date().getTime(), checked: false };
		}
		else {
			if (new Date().getTime() - this.pressedKeys[event.keyCode].time > this.repetitionSpeed) {
				this.pressedKeys[event.keyCode] = { time: new Date().getTime(), checked: false };
			}
		}
	}

	/*private*/ onKeyup(event) {
		event.preventDefault();

		this.pressedKeys[event.keyCode] = undefined;
	}

	isDown(keyCode) {
		return this.pressedKeys[keyCode] !== undefined;
	}

	isPressed(keyCode) {
		let res = false;

		if (this.pressedKeys[keyCode]) {
			if (!this.pressedKeys[keyCode].checked && new Date().getTime() - this.pressedKeys[keyCode].time <= this.repetitionSpeed) {
				this.pressedKeys[keyCode].checked = true;
				res = true;
			}
		}

		return res;
	}

}
