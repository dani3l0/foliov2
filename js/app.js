import Experience from "./Experience/Experience";
import UI from "./UI/UI";

export default class App {
    constructor() {
        const canvas = document.getElementById("experience")
        this.experience = new Experience(canvas)

        const ui = new UI()
    }
}
