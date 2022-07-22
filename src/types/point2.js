export class Point2 {

	/**
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 */
	constructor(x, y) {
		this.x = (x) ? x : 0.0;
		this.y = (y) ? y : 0.0;
	}

	/**
	 * 
	 * @param {Point2} point2 
	 * 
	 * @return {boolean}
	 */
	equals(point2) {
		return this.x === point2.x && this.y === point2.y;
	}

	/**
	 * Sprawdzenie czy punkt leży na odcinku.
	 * 
	 * Na podstawie:
	 * https://lobo.guru/2019/11/09/przynaleznosc-punktu-do-odcinka/
	 * 
	 * @param {Point2} pointA
	 * @param {Point2} pointB
	 */
	laysOnLineSegment(pointA, pointB) {
		// czy punkty leżą na prostej (obliczenie wyznacznika macieży)
		const wyznacznik = pointA.x * pointB.y + pointB.x * this.y + this.x * pointA.y - pointB.y * this.x - this.y * pointA.x - pointA.y * pointB.x;
		if (wyznacznik != 0) {
			return false;
		}
		// czy punkt leży na odcinku
		if ((this.x >= Math.min(pointA.x, pointB.x))
			&& (this.x <= Math.max(pointA.x, pointB.x))
			&& (this.y >= Math.min(pointA.y, pointB.y))
			&& (this.y <= Math.max(pointA.y, pointB.y))) {
			return true;
		}
		return false;
	}

	toString() {
		return `Point2=[x: ${this.x}, y: ${this.y}]`;
	}

}
