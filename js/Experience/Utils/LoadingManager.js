import * as THREE from 'three'

export default class LoadingManager {
	constructor() {
		this.onLoad = []
		this.onProgress = []
		this.onError = []
	}

	addOnProgressListener(func) {
		this.onProgress.push(func)
	}

	addOnLoadListener(func) {
		this.onLoad.push(func)
	}

	addOnErrorListener(func) {
		this.onError.push(func)
	}

	startListening() {
		THREE.DefaultLoadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
			for (let func of this.onProgress) {
				func(url, itemsLoaded, itemsTotal)
			}
		}
		THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
			for (let func of this.onProgress) {
				func(url, itemsLoaded, itemsTotal)
			}
		}
		THREE.DefaultLoadingManager.onLoad = () => {
			for (let func of this.onLoad) {
				func()
			}
		}
		THREE.DefaultLoadingManager.onError = (url) => {
			for (let func of this.onError) {
				func(url)
			}
		}
	}
}