
  function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш +
        console.log (cache)
        console.log (hash)
        // let idx = cache.findIndex((item)=> item.cache = hash ); 
        // console.log (idx)// ищем элемент, хэш которого равен нашему хэшу
        // console.log (cache)// ищем элемент, хэш которого равен нашему хэшу
        // if (idx !== -1 ) { // если элемент не найден
        //     console.log("Из кэша: " + ???); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        //     return "Из кэша: " + ???;
        // }
    
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({hash:result}) ; // добавляем элемент с правильной структурой
        
        // if (cache.length > 5) { 
        //   ??? // если слишком много элементов в кэше надо удалить самый старый (первый) 
        // }
        // console.log("Вычисляем: " + result);
        // return "Вычисляем: " + result;  
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



function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
