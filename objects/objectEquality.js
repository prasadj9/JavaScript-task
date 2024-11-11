function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
  }

  const address1 = new Address("a1", "b1", 1);
  const address2 = new Address("a1", "b1", 1);
  const address3 = address2;

  console.log(areSame(address1, address2));
  console.log(areEqual(address1, address2));
  console.log(areSame(address3, address2));
  

  function areSame(address1, address2) {
    return address1 === address2;
  }

  function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  }