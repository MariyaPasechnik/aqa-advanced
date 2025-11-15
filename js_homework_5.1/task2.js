let averageGrade = 85;
let category;

if (averageGrade < 60) {
    category = 1;
} else if (averageGrade >= 60 && averageGrade <= 70) {
    category = 2;
} else if (averageGrade >= 71 && averageGrade <= 80) {
    category = 3;
} else if (averageGrade >= 81 && averageGrade <= 90) {
    category = 4;
} else if (averageGrade >= 91 && averageGrade <= 100) {
    category = 5;
}

switch (category) {
    case 1:
        console.log('Незадовільно');
        break;
    case 2:
        console.log('Задовільно');
        break;
    case 3:
        console.log('Добре');
        break;
    case 4:
        console.log('Дуже добре');
        break;
    case 5:
        console.log('Відмінно');
        break;
    default:
        console.log('Некоректне значення оцінки');
}

console.log(averageGrade);
