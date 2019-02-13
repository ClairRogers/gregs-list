import Job from "../models/job.js";

let _state = {
  jobs: [
    new Job({ title: 'Server at Outback Steakhouse', wage: '$2.50/hr', description: 'work for little to no money! hope you get tips', img: 'https://ncccc.org/wp-content/uploads/2018/09/Outback-Steakhouse-logo.png' }),
    new Job({ title: 'Front Desk at Humane Society', wage: '$9.50/hr', description: 'hope you love animals because the work is not worth it', img: 'https://idahohumanesociety.org/content/uploads/2018/01/IHS-logo-300x205.jpg' }),
    new Job({ title: 'Leatherworker at The Leather Works', wage: '$12/hr', description: 'a unique job that is a great conversation starter', img: 'https://www.theleatherworks.net/cw4/images/logo2.gif' })
  ]
}

let _subscribers = {
  jobs: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}





//PUBLIC
export default class JobsService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

}