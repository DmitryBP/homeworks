function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш +
    let result = func(...args); // в кэше результата нет - придётся считать
    let cacheItem = {
      hash,
      value: result,
    }

    let itm = cache.find((obj) => obj.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (itm) { // если элемент найден
      console.log("Из кэша: " + cacheItem.value);   
      return "Из кэша: " + cacheItem.value;
    }

    cache.push(cacheItem); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);

// upgradedAddThree(1, 2, 3); // вычисляем: 6
// upgradedAddThree(1, 2, 3); // из кэша: 6
// upgradedAddThree(2, 2, 3); // вычисляем: 7
// upgradedAddThree(3, 2, 3); // вычисляем: 8
// upgradedAddThree(4, 2, 3); // вычисляем: 9
// upgradedAddThree(5, 2, 3); // вычисляем: 10
// upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
// upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)


// Задача 2 

const sendSignal = () => console.log("Сигнал отправлен"); // исходная функция

function debounceDecoratorNew(f, ms) {
  let timeout;
  let flag = false;
  function wrapper(...args) {
    if (!flag) {
      f(...args)
      flag = true;
    }
    else {
      clearTimeout(timeout)
      timeout = setTimeout(() => f(...args), ms)
    }
  }
  return wrapper;
}

const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
// setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

// Задача 3 

const sendSignal2 = () => console.log("Сигнал отправлен"); // исходная функция

function debounceDecorator2(f, ms) {
  let timeout;
  let flag = false;
  function wrapper(...args) {
    if (!flag) {
      wrapper.count = 0;
      wrapper.count ++;
      f(...args)
      console.log(wrapper.count)
      flag = true; 
    }
    else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {wrapper.count++; f(...args); console.log(wrapper.count)}, ms)
    }
  }
  return wrapper;
}

const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

 