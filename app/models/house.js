let id = 1

export default class House {
  constructor(data) {
    this.id = id
    this.price = data.price
    this.title = data.title
    this.img = data.img
    this.desc = data.description
    id++
  }
  getTemplate() {
    return `
    <div class="card col-12 col-md-3">
        <img src="${this.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">$${this.price} -- ${this.desc}</p>
          <button onclick="app.controllers.houseController.deleteHouse(${this.id})">Remove</button>
        </div>
      </div>
    `
  }
}