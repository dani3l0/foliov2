import * as THREE from 'three'
import Loop from './Loop'
import Camera from './Camera'
import World from './World'
import Renderer from './Renderer'
import Controls from './Controls'
import LoadingManager from './Utils/LoadingManager'
import Debug from './Debug'


export default class Experience {
	static instance
	constructor(canvas) {
		if (Experience.instance) {
			return Experience.instance
		}
		Experience.instance = this

		this.debug = new Debug(false)
		this.canvas = canvas
		this.initLoadingManager()

		this.scene = new THREE.Scene()
		this.scene.add(new THREE.AmbientLight(0xffffff, 1))
		this.loop = new Loop()
		this.sizes = this.loop.sizes

		this.camera = new Camera()
		this.world = new World()

		this.renderer = new Renderer()
		this.controls = new Controls()
		this.controls.enabled = false

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

		this.loop.startRendering()
	}

	initLoadingManager() {
		this.loadingManager = new LoadingManager()

		this.loadingManager.addOnLoadListener(() => {
			document.getElementById("init").classList.add("hidden")
		})
		
		// this.loadingManager.addOnProgressListener((url, loaded, total) => {
		// 	let pp = Math.round(100 * loaded / total)
		// })

		this.loadingManager.startListening()
	}
}
