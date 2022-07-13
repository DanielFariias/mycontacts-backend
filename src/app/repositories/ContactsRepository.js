const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Daniel',
    email: 'daniel@daniel.com',
    phone: '99 99999-9999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
