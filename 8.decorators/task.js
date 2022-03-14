
  function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
  
      
        const hash = args.join(','); // получаем правильный хэш +
        let idx = cache.findIndex((obj)=> obj.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
  
        if (idx !== -1 ) { // если элемент не найден
            console.log("Из кэша: " + cache[idx]['value']); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[idx];
        }
        let result = func(...args); // в кэше результата нет - придётся считать
        let cacheItem = {
          hash: hash,
          value: result,
        }
        cache.push(cacheItem) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift(cacheItem) // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }
  
  const addThree = (a, b, c) => a + b + c;
  const upgradedAddThree = cachingDecoratorNew(addThree);
  
  upgradedAddThree(1, 2, 3); // вычисляем: 6
  upgradedAddThree(1, 2, 3); // из кэша: 6
  upgradedAddThree(2, 2, 3); // вычисляем: 7
  upgradedAddThree(3, 2, 3); // вычисляем: 8
  upgradedAddThree(4, 2, 3); // вычисляем: 9
  upgradedAddThree(5, 2, 3); // вычисляем: 10
  upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
  upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)
  
  
  