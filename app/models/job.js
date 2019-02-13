let id = 1

export default class Job {
  constructor(data) {
    this.id = id
    this.wage = data.wage
    this.title = data.title
    this.img = data.img
    this.desc = data.description || 'no description provided'
    id++
  }
  getTemplate() {
    return `
    <div class="card col-3">
        <img src="${this.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">$${this.wage} -- ${this.desc}</p>
          <button onclick="app.controllers.jobController.deleteJob(${this.id})">Remove</button>
        </div>
      </div>
    `
  }
}