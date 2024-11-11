const address = {
  street: "a",
  city: "b",
  zipcode: 423555,
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

//Exercise 2
//Using constructor method
function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const address1 = new Address("a1", "b1", 1);
showAddress(address1);

//Using factory method
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

const address2 = createAddress("a2", "b2", 2);
showAddress(address2)
