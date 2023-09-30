import GUI from "lil-gui";
import Experience from "./Experience";

export default class Debug {
	constructor(enabled = true) {
		if (!enabled) return
		this.experience = new Experience()
		this.gui = new GUI()
		this.folders = {}
	}

	add(folderName, name, obj, propertyName, range) {
		if (!this.gui) return

		if (folderName) {
			if (!this.folders[folderName]) {
				this.folders[folderName] = this.gui.addFolder(folderName)
			}
			this.folders[folderName].add(obj, propertyName)
				.min(-range)
				.max(range)
				.step(0.01)
				.name(name)
		}
		else {
			this.gui.add(obj, propertyName)
				.min(-range)
				.max(range)
				.step(0.01)
				.name(name)
		}
	}
}