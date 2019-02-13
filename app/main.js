import CarController from "./components/carController.js";
import JobsController from "./components/jobController.js";


class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobsController()
    }
  }
}



window.app = new App()