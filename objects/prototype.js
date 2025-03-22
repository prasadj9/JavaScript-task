const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
  }

const child = Object.create(parent);
child.age = 18;
child.address = "Mumbai";

console.log((child.prototype));
