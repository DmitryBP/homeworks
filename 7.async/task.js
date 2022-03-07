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
    let checkClocks = () => {
      console.log('тик-так')
      this.alarmCollection.forEach((clock) => {
        if(clock.time == this.getCurrentFormattedTime()){
          clock.callback()
        }
      })
    }
    if (this.timerId == null){
      this.timerId = setInterval(checkClocks, 1000);
     }
  }
  stop() {
    if (this.timerId !== null) {
    // остановить вывод через 5 секунд
    setTimeout(() => { 
      clearInterval(this.timerId); 
      console.log('Будильник остановлен');
      }, 5000);
      this.timerId = null; 
    }
  }
  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(obj => console.log(
      `Будильник №${obj.id} заведен на ${obj.time} ` 
      ))
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = []
  }
} 

let alarm1 = new AlarmClock

//test
alarm1.addClock("22:48", () => console.log('сработал будильник 1'), '1')
alarm1.addClock("22:49", () => console.log('сработал будильник 2'), "2")
alarm1.addClock("22:50", () => console.log('сработал будильник 3'), "3")
// alarm1.removeClock("02")
// console.log (alarm1.getCurrentFormattedTime())
// console.log (alarm1)
// alarm1.start()
// alarm1.clearAlarms()
// console.log (alarm1)
// alarm1.printAlarms()
