const name = "It's Bang Chan's birthday today!";

function upper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

upper(name);

function add(num1, num2) {
    console.log(num1 + num2);
}

add(4,4);

function group() {
    console.log('Stray Kids Members:');
    console.log('Bang Chan');
    console.log('Lee Know');
    console.log('Seo Changbin');
    console.log('Hwang Hyunjin');
    console.log('Jisung Han');
    console.log('Lee Felix');
    console.log('Kim Seungmin');
    console.log('Yang Jeongin');
}

group();

var maknae = {
    firstName: "Jeongin",
    lastName: "Yang",
    age: 22,
    getFullName: function() {
        return this.firstName + '' + this.lastName
    }
};