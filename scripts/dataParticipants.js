export const participants = [{
  personName: "Тюлюпина Виктория",
  id: '1'
}, {
  personName: "Новиковская Татьяна",
  id: '2'
}, {
  personName: 'Лукоянова Кристина',
  id: '3'
}, {
  personName: 'Селезень Евгения',
  id: '4'
}, {
  personName: 'Лаврищева Милания',
  id: '5'
}, {
  personName: 'Соколова Валерия',
  id: '6'
}, {
  personName: 'Полонская Мария',
  id: '7'
}, {
  personName: 'Коржова Ева',
  id: '8'
}, {
  personName: 'Мамулян Милена',
  id: '9'
}, {
  personName: 'Ангелина Гасоева',
  id: '10'
}, {
  personName: 'Попова Маргарита',
  id: '11'
}, {
  personName: 'Макаренко Ксения',
  id: '12'
}];

//==== chosenWinner ====
export const chosenWinner = [{
  personName: localStorage.getItem('chosenWinner') || 'Соколова Валерия',
  id: '6'
}];

console.log(localStorage.getItem('chosenWinner'));