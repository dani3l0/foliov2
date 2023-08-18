import Experience from "./Experience/Experience";

export default class App {
    constructor() {
        const canvas = document.getElementById("experience")
        this.experience = new Experience(canvas)
    }
}
