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
    const date = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return date;
  }
  start() {
    console.log ('Будильник запущен')
    let checkClock = () => {
      this.alarmCollection.forEach((clock, item) => {
      
        if(this.alarmCollection[item].time == this.getCurrentFormattedTime()){
         console.log (this.alarmCollection[item].callback)
        }
      })
    }
    if (this.timerId == null){
      this.timerId = setInterval(checkClock, 60000);
     }
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
alarm1.addClock("02:06", () => console.log('сработал будильник 1'), '1')
alarm1.addClock("02:02", () => console.log('сработал будильник 2'), "2")
alarm1.addClock("01:43", () => console.log('сработал будильник 3'), "3")
alarm1.removeClock("02")
console.log (alarm1.getCurrentFormattedTime())
alarm1.start()

alarm1.printAlarms()



// console.log(alarm1) 


// console.log (alarm1.alarmCollection[0].time == alarm1.getCurrentFormattedTime())