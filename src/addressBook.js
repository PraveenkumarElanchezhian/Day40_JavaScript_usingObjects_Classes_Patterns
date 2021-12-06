class AddressBook
{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString()
    {
        return "firstName => " + this.firstName + " || lastName => " + this.lastName +
        " || address => " + this.address + " || city => " + this.city + " || state => " + this.state +
        " || zip => " + this.zip + " || phoneNumber => " + this.phoneNumber + " || email => " + this.email;
    }
}
let addressBook = new AddressBook("Praveen", "Kumar", "Anna Nagar", "Salem", "TamilNadu", "63345", "+91 9750260035", "pke37@gmail.com");
console.log(addressBook.toString());