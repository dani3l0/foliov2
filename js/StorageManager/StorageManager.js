class StorageManager {
	static instance
	constructor() {
		if (StorageManager.instance) return
		StorageManager.instance = this
        try {
            localStorage.getItem("localstorage_check")
            this.available = true
        } catch (e) {
            this.available = false
        }
	}

    load(keys) {}

    get(key) {}

    set(key, value) {}
}
