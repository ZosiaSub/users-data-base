
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

function renderDb() {
    var containerDb = document.getElementById('records');
    containerDb.innerHTML = '<div><div>' + person1.name + '</div><div>' + person1.surname + '</div><div>' + person1.age + '</div><div>' + person1.role + '</div></div>';
}

renderDb();

