import * as THREE from 'three'
import Loop from './Loop'
import Camera from './Camera'
import World from './World'
import Renderer from './Renderer'
import Controls from './Controls'
import LoadingManager from './Utils/LoadingManager'


export default class Experience {
	static instance
	constructor(canvas) {
		if (Experience.instance) {
			return Experience.instance
		}
		Experience.instance = this
		this.canvas = canvas
		this.initLoadingManager()
		
		this.scene = new THREE.Scene()
		this.loop = new Loop()
		this.sizes = this.loop.sizes

		this.camera = new Camera()
		this.world = new World()

		this.renderer = new Renderer()
		this.controls = new Controls()

		this.start()
	}

	start() {
		this.loop.addResizeListener(() => {
			this.renderer.resize()
			this.camera.resize()
		})

		this.loop.addUpdateListener(() => {
			this.renderer.update()
			this.controls.update()
		})

		// this.loop.addUpdateListener((delta) => {})

		this.loop.startRendering()
	}

	initLoadingManager() {
		this.loadingManager = new LoadingManager()

		this.loadingManager.addOnLoadListener((() => {
			document.getElementById("init").classList.add("hidden")
		}).bind(this))

		this.loadingManager.addOnProgressListener((url, loaded, total) => {
			let pp = Math.round(100 * loaded / total)
			//console.log(pp)
		})

		this.loadingManager.startListening()
	}
}
