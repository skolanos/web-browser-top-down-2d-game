export class Vector2 {

	/**
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(x, y) {
		this.x = (x) ? x : 0.0;
		this.y = (y) ? y : 0.0;
	}

	static vectorZero() {
		return new Vector2(0.0, 0.0);
	}

	static vectorRight() {
		return new Vector2(1.0, 0.0);
	}

	static vectorLeft() {
		return new Vector2(-1.0, 0.0);
	}

	static vectorUp() {
		return new Vector2(0.0, -1.0);
	}

	static vectorDown() {
		return new Vector2(0.0, 1.0);
	}

	/**
	 * 
	 * @param {Vector2} vector2 
	 */
	assign(vector2) {
		this.x = vector2.x;
		this.y = vector2.y;
	}

	clone() {
		return new Vector2(this.x, this.y);
	}

	/**
	 * 
	 * @param {Vector2} vector2 
	 * 
	 * @return {boolean}
	 */
	equals(vector2) {
		return this.x === vector2.x && this.y === vector2.y;
	}

	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	/**
	 * 
	 * @param {Vector2} vector2 
	 */
	add(vector2) {
		return new Vector2(this.x + vector2.x, this.y + vector2.y);
	}

	subtract() {
		return new Vector2(this.x - vector2.x, this.y - vector2.y);
	}

	multiply() {
		return new Vector2(this.x * vector2.x, this.y * vector2.y);
	}

	divide() {
		return new Vector2(this.x / vector2.x, this.y / vector2.y);
	}

	normalize() {
		return new Vector2(this.x / this.length(), this.y / this.length());
	}

	/**
	 * Iloczyn skalarny.
	 * 
	 * @param {Vector2} vector2 
	 */
	dot(vector2) {
		return this.x * vector2.x + this.y * vector2.y;
	}

	/**
	 * 
	 * @param {Vector2} vector2 
	 */
	cross(vector2) {
		return this.x * vector2.y - this.y * vector2.x;
	}

	/*
	angle(vecto1, vector2) {
		return Math.acos(vector1.dot(vecto2) / (vector1.length() * vector2.length()));
	}
	*/

	toString() {
		return `Vector2=[x: ${this.x}, y: ${this.y}]`;
	}

}
