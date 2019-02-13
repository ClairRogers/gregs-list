import CarController from "./components/carController.js";
import JobController from "./components/jobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController()
    }
  }
}



window.app = new App()