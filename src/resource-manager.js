export class ResourceManager {

	constructor() {
		this.resources = [];
	}

	async load(resourcesList) {
		const images = resourcesList.filter(item => item.type === 'image').map(item => {
			return new Promise((resolve, reject) => {
				let img = new Image();
				img.onload = () => {
					resolve({
						id: item.id,
						type: item.type,
						url: item.url,
						data: img
					});
				};
				img.onerror = () => {
					reject({
						id: item.id,
						type: item.type,
						url: item.url,
						data: null
					});
				};
				img.src = item.url;
			});
		});
		const jsons = resourcesList.filter(item => item.type !== 'image').map(item => {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.open('GET', item.url, true);
				xhr.responseType = 'json';
				xhr.onload = () => {
					const status = xhr.status;
					if (status === 200) {
						resolve({
							id: item.id,
							type: item.type,
							url: item.url,
							data: xhr.response
						});
					} else {
						reject({
							id: item.id,
							type: item.type,
							url: item.url,
							data: null
						});
					}
				};
				xhr.send();
			});
		});

		const promises = [...images, ...jsons];
		return Promise.all(promises).then(values => {
			this.resources = values;
		});
	}

	get(id) {
		let array = this.resources.filter(item => item.id === id);
		if (!array) {
			return undefined;
		}
		return array[0];
	}

}
