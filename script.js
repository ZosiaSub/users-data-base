
var personDb = [];

function Person (attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
}

var person1 = new Person({
    name: 'John',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});

personDb.push(person1);

person1 = new Person({
    name: 'John',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});

personDb.push(person1);

person1 = new Person({
    name: 'Maciej',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});

personDb.push(person1);

person1 = new Person({
    name: 'Kaj',
    surname: 'Snow',
    age: 27,
    role: 'lecturer'
});

personDb.push(person1);

function renderRow(name, surname, age, role) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div></div>';
}


function renderDb() {
    var containerDb = document.getElementById('records');
    personDb.map(function (person) {
        containerDb.innerHTML += renderRow(person.name, person.surname, person.age, person.role);
    });
};

renderDb();

