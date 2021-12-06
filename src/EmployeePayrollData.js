class EmployeePayrollData
{
    // Constructor
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.emailId = params[5];
        this.address = params[6];
        this.pinCode = params[7];
    }

    // getter and setter method
    get id() {return this._id;}
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]{7}$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'ID is Incorrect!';
    }
    get name() {return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get salary() {return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{4,}$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'salary is Incorrect!';
    }
    get gender() {return this._gender;}
    set gender(gender) {
        let genderRegex = RegExp('^(?:F|M)$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw 'Gender is Incorrect!';
    }
    get startDate() {return this._startDate;}
    set startDate(startDate) {
        let startDateRegex = RegExp('^\\d{2}/\\d{2}/\\d{4}$');
        if(startDateRegex.test(startDate))
            this._startDate = startDate;
        else throw 'Start Date is Incorrect!';
    }
    get emailId() {return this._emailId;}
    set emailId(emailId) {
        let emailIdRegex = RegExp('(([a-z A-Z]{3,})?([.][a-z A-Z]{3,})@(bridgelabz)[.](co)?([.][a-z]{2}))');
        if(emailIdRegex.test(emailId))
            this._emailId = emailId;
        else throw 'Email ID is Invalid!';
    }
    get address() {return this._address;}
    set address(address) {
        let addressRegex = RegExp('^([A-z]{1}[a-z]{3,})( [A-z]{1}[a-z]{3,})?$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect!';
    }
    get pinCode() {return this._pinCode;}
    set pinCode(pinCode) {
        let pinCodeRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(pinCodeRegex.test(pinCode))
            this._pinCode = pinCode;
        else throw 'PinCode is Incorrect!';
    }

    // method
    toString()
    {
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary +
                ", gender=" + this.gender + ", startDate=" + this.startDate +
                ", emailId=" + this.emailId + ", address=" + this.address + ", pinCode:" + this.pinCode;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(10009126, "Praveen", 27500, "M", "25/05/1997",
                                "xyz.ABC@bridgelabz.co.in", "Anna Nagar", "636354");
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}