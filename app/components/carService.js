

import Car from "../models/car.js";

//PRIVATE
//STATE IS THE OBJECT THAT CONTAINS ALL DATA
let _state = {
  cars: [
    new Car({ price: 1000, title: 'Geo Metro', img: 'https://i.pinimg.com/originals/29/36/f1/2936f1405ae897de54c441016c0e480d.jpg', description: 'Your average geo metro but swole' }),
    new Car({ price: 1500, title: 'Subaru Outback', img: 'https://bobandsuewilliams.com/images/subaru-old-17.jpg', description: 'Need 4 wheel drive? we gotchu' }),
    new Car({ price: 2000, title: 'Toyota Corolla', img: 'http://blogmedia.dealerfire.com/wp-content/uploads/sites/224/2016/04/7th-gen-corolla_o.jpg', description: 'who even drives these' })
  ]
}

//SUBSCRIBERS HOLDS ALL FUNCTIONS TO TRIGGER ON CHANGES
//ALL PROPERTIES ON STATE WILL ALSO BE ON SUBSCRIBERS
//SUBSCRIBERS HOLD ARRAYS OF FUNCTIONS
let _subscribers = {
  cars: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}


//PUBLIC
export default class CarService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Cars() {
    return _state.cars
  }

  addCar(rawCar) {
    let newCar = new Car(rawCar)
    _state.cars.push(newCar)
    setState('cars', _state.cars)
  }

  deleteCar(id) {
    // let carToDelete = _cars.find(car => car.id == id)
    // let indexToRemove = _cars.indexOf(carToDelete)
    for (let i = 0; i < _state.cars.length; i++) {
      let car = _state.cars[i];
      if (car.id == id) {
        _state.cars.splice(i, 1)
        break;
      }

    }
    // _cars.splice(indexToRemove, 1)
    setState('cars', _state.cars)
  }
}



