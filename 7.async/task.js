class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null; 
  }
  addClock(time, callback, id) {
    let indexId = this.alarmCollection.findIndex(obj => obj.id == id)
    if (!id) {
      throw new Error ('error!!!!!')
    } else if (indexId !== -1) {
      console.error('Будильник уже существует')
    } else {
      this.alarmCollection.push({time, callback, id})
    }
  }
  removeClock(id) {
    let remuvedId = this.alarmCollection.findIndex(obj => obj.id == id)
    if(remuvedId !== -1) {
      this.alarmCollection.splice(remuvedId, 1)
      return true
    } else {
      return false
    }
  }
  getCurrentFormattedTime() {
    const date = new Date
    let hours = 0;
    if (date.getHours() < 10) {
      hours = `0${date.getHours()}`
      return `${hours}:${date.getMinutes()}`
    }
    else {
      return `${date.getHours()}:${date.getMinutes()}`
    }
  }
  start() {
    // let checkClock = () => { 

    // };
    // let setInterval = () => {

    // }
    
    // this.timerId = setInterval();

    if (this.timerId == null){
      this.timerId = 1
    }else if(this.timerId == 1) {
      this.timerId++
    }
    console.log(`Внимание все будильники включены`, `Номер таймера: ${this.timerId}`)
    this.alarmCollection.forEach((clock, item) => {
      if (this.alarmCollection[item].time == alarm1.getCurrentFormattedTime()) {
        return console.log(this.alarmCollection[item].callback)
      }
    }) 
  }


  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(obj => console.log(
      `Будильник №${obj.id} заведен на ${obj.time} ` 
      ))
  }
} 

let alarm1 = new AlarmClock

//test
alarm1.addClock("23:23", () => console.log('сработал будильник 1'), '1')
alarm1.addClock("12:35", () => console.log('сработал будильник 2'), "2")
alarm1.addClock("12:35", () => console.log('сработал будильник 3'), "3")
alarm1.removeClock("02")
alarm1.start()
alarm1.start()
alarm1.printAlarms()
console.log(alarm1.getCurrentFormattedTime())
// console.log(alarm1) 


// console.log (alarm1.alarmCollection[0].time == alarm1.getCurrentFormattedTime())