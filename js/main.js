// Лекція 33



// Завдання 1

fetch('../json/data.json')
  .then(response => response.json())
  .then(data => showAdminName(data))

function showAdminName(data) {
  const adminUser = Object.values(data).find(user => user.isAdmin);
  if (adminUser) {
    console.log(adminUser.name);
  } else {
    console.log('Admin user not found');
  }
}

// Завдання 2

let nikola = {
  firstName: 'Nikola',
  lastName: 'Tesla'
};
let bob = {
  firstName: 'Bob'
};
let mike = {
  lastName: 'Smith'
};
let michael = {};

let getFullName = function (user) {
  switch (true) {
    case !!user.firstName && !!user.lastName:
      return `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`;
    case !!user.firstName:
      return user.firstName;
    case !!user.lastName:
      return user.lastName;
    default:
      return 'No name';
  }
}

console.log(getFullName(nikola)); //NIKOLA TESLA
console.log(getFullName(bob)); //Bob
console.log(getFullName(mike)); //Smith
console.log(getFullName(michael)); //No name




// Завдання 3 

let users = [
  {name: 'Nikola', age:18, id:1},
  {name: 'Bob', age:25, id:2},
  {name: 'Mike', age:32, id:3},
]

localStorage.setItem('users', JSON.stringify(users));

function sayHelloToUser(id) {
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(user => user.id === id);
  console.log(`Hello: ${user.name}`);
}

sayHelloToUser(3);//Hello: Mike




// Завдання 4

    const input = document.querySelector('input');

    if (localStorage.getItem('savedInput')) {
      input.value = localStorage.getItem('savedInput');
    }

    input.addEventListener('input', function() {
      localStorage.setItem('savedInput', input.value);
    });
