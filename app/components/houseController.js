import HouseService from "./houseService.js";

let _hs = new HouseService

function draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('available-houses').innerHTML = template
}

export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
    draw()
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target
    let newHouse = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }
    _hs.addHouse(newHouse)
    form.reset()
    draw()
  }
  deleteHouse(id) {
    _hs.deleteHouse(id)
    draw()
  }

}