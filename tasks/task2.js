// Початковий масив об'єктів студентів, де кожен об'єкт представляє студента
const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  // Створюємо порожній масив, де будемо зберігати імена студентів, що відповідають умові
  let topStudents = [];
  
  // Використовуємо цикл 'for...of' для ітерації по кожному об'єкту 'student' у масиві 'students'
  for (let student of students) {
    // Перевіряємо, чи властивість 'score' поточного студента більша за 80
    if (student.score > 80) {
      // Якщо умова виконана, додаємо ім'я студента (властивість 'name') до нашого масиву 'topStudents'
      topStudents.push(student.name);
    }
  }

  // Повертаємо масив з іменами найкращих студентів
  return topStudents;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  // Ініціалізуємо змінну для підрахунку кількості студентів
  let studentCount = 0;
  // Ініціалізуємо змінну для зберігання суми віку всіх студентів
  let ageSum = 0;

  // Ітеруємо по кожному студенту в масиві
  for (let student of students) {
    // Збільшуємо лічильник студентів на 1
    studentCount++;
    // Додаємо вік поточного студента до загальної суми
    ageSum += student.age;
  }

  // Обчислюємо середній вік (загальна сума поділена на кількість) і повертаємо результат
  return ageSum / studentCount;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  // Використовуємо метод .push() для додавання нового об'єкта 'student' в кінець масиву 'students'
  // (Цей метод модифікує оригінальний масив 'students')
  students.push(student);
  // Повертаємо оновлений (модифікований) масив
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
   // Використовуємо метод .filter() для створення *нового* масиву
   // У новий масив потраплять лише ті елементи (студенти),
   // для яких умова (student.name !== name) повертає 'true'.
   // Тобто, ми фільтруємо і залишаємо всіх, крім студента з вказаним іменем 'name'.
   return students.filter(student => student.name !== name);
}

// Експортуємо всі чотири функції, щоб їх можна було імпортувати та використовувати в інших файлах (наприклад, для тестування)
module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
