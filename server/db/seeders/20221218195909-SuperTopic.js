'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SuperTopics', [
      {
      tema: 'Harry Potter'
      },
      {
        tema: 'Солянка'
      },
      {
        tema: 'Мульти Солянка'
      },
      ], {});
    await queryInterface.bulkInsert('Topics', [
      {
        name: 'Квиддич',
        tema_id: 1,
      },
      {
        name:'Заклинания',
        tema_id: 1,
      },
      {
        name:'Подсказки',
        tema_id: 1,
      },
      {
        name:'Жертвы',
        tema_id: 1,
      },
      {
        name:'Разные вопросы',
        tema_id: 1,
      },
      {
        name:'Дары смерти',
        tema_id: 1,
      },
      {
        name:'Две буквы',
        tema_id: 2,
      },
      {
        name:'Сериалы',
        tema_id: 2,
      },
      {
        name:'Валюты',
        tema_id: 2,
      },
      {
        name:'Аббревиатуры',
        tema_id: 2,
      },
      {
        name:'Изи арифметика',
        tema_id: 2,
      },
      {
        name:'Логика',
        tema_id: 2,
      },
      {
        name:'Помоги вспомнить мультфильм',
        tema_id: 3,
      },
      {
        name:'Помоги вспомнить фильм',
        tema_id: 3,
      },
      {
        name:'Игры',
        tema_id: 3,
      },
      {
        name:'Минное поле',
        tema_id: 3,
      },
      {
        name:'Готовь листик с чит-кодами',
        tema_id: 3,
      },
      {
        name:'Чья цитата',
        tema_id: 3,
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SuperTopics', null, {});
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
