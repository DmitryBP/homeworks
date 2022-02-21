// получение средней оценки по предмету;
// Оценки лежат в массиве marks получим доступ к этому массиву 
dima.classBook[0].marks
// Найдем индекс объекта в classBook содержащего предмет переданный как параметр в метод вычесления среднего. 
let test = dima.classBook.findIndex(obj => obj.subjekt == 'Hi1story')
