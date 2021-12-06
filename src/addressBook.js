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

        get firstName(){ 
            return this._firstName;
        }
        get lastName(){ 
            return this._lastName;
        }
        get address(){ 
            return this._address;
        }
        get city(){ 
            return this._city;
        }get state(){ 
            return this._state;
        }
        get zip(){ 
            return this._zip;
        }
        get phoneNumber(){ 
            return this._phoneNumber;
        }
        get email(){ 
            return this._email;
        }

        set firstName(firstName){
            let regexFirstName = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(regexFirstName.test(firstName))
            this._firstName = firstName;
            else throw 'Given firstName is Incorrect';
        }
        set lastName(lastName){
            let regexLastName = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if(regexLastName.test(lastName))
            this._lastName = lastName;
            else throw 'Given lastName is Incorrect';
        }
        set address(address) {
            let regexAddress = RegExp('^([A-z]{1}[a-z]{2,})( [A-z]{1}[a-z]{2,})?$');
            if(regexAddress .test(address))
            this._address = address;
            else throw 'Given Address is Incorrect';
        }
        set city(city) {
            let regexCity = RegExp('^([A-z]{1}[a-z]{3,})( [A-z]{1}[a-z]{3,})?$');
            if(regexCity.test(city))
            this._city = city;
            else throw 'Given City is Incorrect';
        }
        set state(state) {
            let regexState = RegExp('^([A-z]{1}[a-z]{2,})([A-z]{1}[a-z]{2,})?$');
            if(regexState.test(state))
            this._state = state;
            else throw 'Given State is Incorrect';
        }
        set zip(zip) {
            let regexZip = RegExp('^[1-9]{1}[0-9]{2}[-]?[0-9]{3}$');
            if(regexZip.test(zip))
            this._zip = zip;
            else throw 'Given ZipCode is Incorrect';
        }
        set phoneNumber(phoneNumber) {
            let regexPhoneNumber = RegExp('([+][0-9]{2}[ ])?[1-9]{1}[0-9]{9}');
            if(regexPhoneNumber.test(phoneNumber))
            this._phoneNumber = phoneNumber;
            else throw 'Given PhoneNumber is Incorrect';
        }
        set email(email) {
            let regexemail_ID = RegExp('(([a-z A-Z]{3,})([.|+|_|-]?[0-9 a-z A-Z]{3,})?@([0-9 a-z A-Z]{1,})([.][a-z]{2,3})([.][a-z]{2,3})?)');
            if(regexemail_ID.test(email))
            this._email = email;
            else throw 'Given email_ID is Incorrect';
        }
    toString()
    {
        return "firstName => " + this.firstName + " || lastName => " + this.lastName +
        " || address => " + this.address + " || city => " + this.city + " || state => " + this.state +
        " || zip => " + this.zip + " || phoneNumber => " + this.phoneNumber + " || email => " + this.email;
    }
}
let addressBook = new Array();
try {
let addressBookOne = new AddressBook("Praveen", "Kumar", "Anna Nagar", "Salem", "TamilNadu", "633-645", "+91 9750260035", "pkeCD37@gmail.com");
console.log(addressBookOne.toString());
addressBook.push(addressBookOne);
let addressBookTwo = new AddressBook("Aravind", "Raj", "Thirumalai Nagar", "Covai", "Kerala", "434-655", "+91 9778456782", "CDaravind56@gmail.com");
console.log(addressBookTwo.toString());
addressBook.push(addressBookTwo);
} catch (e){console.error(e)}
for(let a=0;a<addressBook.length;a++){
    console.log(addressBook[a]);
}