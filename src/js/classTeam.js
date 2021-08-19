/* eslint-disable no-plusplus */
import Person from './classPerson';

export default class Team {
  constructor(persons) {
    for (let i = 0; i <= persons.length - 1; i++) {
      this[persons[i].name] = new Person(persons[i]);
    }
  }

  * [Symbol.iterator]() {
    this.arrPerson = Object.values(this);
    for (const pers of this.arrPerson) {
      yield pers;
    }
  }

  addPerson(person) {
    this[person.name] = new Person(person);
  }
}

const persons = [{ name: 'Ivan', type: 'Bowman' },
  { name: 'Dima', type: 'Swordsman' },
  { name: 'Inga', type: 'Magician' },
  { name: 'Jon', type: 'Daemon' },
];

const team1 = new Team(persons);
for (const pers of team1) {
  console.log('Итерируем объект класса person', { pers });
}
