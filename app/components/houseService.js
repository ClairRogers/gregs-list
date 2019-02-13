import House from "../models/house.js";


let _state = {
  houses: [
    new House({ title: 'Bit of a fixer Upper', price: 10000, description: 'This house needs some tlc also theres asbestos', img: 'https://na.rdcpix.com/1826791730/b57cb3fe060b4e365f4756e99b2b4287w-c239109xd-w685_h860_q80.jpg' }),
    new House({ title: 'You must be rich', price: 200000000, description: 'Only for the rich and famous', img: 'https://pmcvariety.files.wordpress.com/2017/03/kellyclarkson_tn_fi.jpg?w=670' }),
    new House({ title: 'This is not a house', price: 8000, description: 'It is a boat', img: 'https://cdn0.wideopencountry.com/wp-content/uploads/2017/11/Tiny-Houseboat-F1-793x526.jpg' })
  ]
}

let _subscribers = {
  houses: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

export default class HouseService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Houses() {
    return _state.houses
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }

  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.id == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }

}