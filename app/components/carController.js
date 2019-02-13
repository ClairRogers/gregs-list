import CarService from "./carService.js";

//PRIVATE
let _cs = new CarService

function draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  });
  document.getElementById('available-cars').innerHTML = template

}

//PUBLIC
export default class CarController {
  constructor() {
    _cs.addSubscriber('cars', draw)
    draw()
  }

  // IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT DEFAULT ACTION OF RELOAD PAGE
  addCar(event) {
    event.preventDefault();
    let form = event.target
    let newCar = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }

    _cs.addCar(newCar)
    form.reset()
    draw()
  }

  deleteCar(id) {
    _cs.deleteCar(id)
    draw()
  }
}