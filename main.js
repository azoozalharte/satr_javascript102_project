let reserved = []

class Vehicles{
    constructor(name, companyName, id){
        this.name = name;
        this.companyName = companyName;
        this.id = id;
    }
}

class Car extends Vehicles{
    constructor(name , companyName, id, isElectric) {
        super(name, companyName, id)
        this.isElectric = isElectric;
    }
}

class Plane extends Vehicles{
    constructor(name , companyName, id, planeType) {
        super(name, companyName, id)
        this.planeType = planeType;
    }
}

// ////////////////


class Employee{
    constructor(name, dateOfBirth, id){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.id = id;
    }
}


class Driver extends Employee{
    constructor(name, dateOfBirth, id, licenseID){
        super(name, dateOfBirth, id)
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee{
    constructor(name, dateOfBirth, id, licenseID){
        super(name, dateOfBirth, id)
        this.licenseID = licenseID;
    }
}


class Reservation{
    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }

}

const checkLicenseID = (empId, vehicleId) => {
    if (empId === vehicleId) {
        let newReservation = new Reservation(Date(), empId, vehicleId, parseInt(Math.random() * 10000));
        reserved.push(newReservation);
    }
}

const printAllItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);        
    }
    return array;
}

const car1 = new Car('Camrey', 'Tayota', 1, false);
const car2 = new Car('Yares', 'Tayota', 2, false);
const car3 = new Car('Tesla model X', 'Tesla', 3, true);

const driver1 = new Driver('Azooz', 1998, 1, 'driver')
const driver2 = new Driver('Ali', 2000, 2, 'driver')
const driver3 = new Driver('Mohamed', 1993, 3, 'driver')
checkLicenseID(driver1.id, car1.id)
checkLicenseID(driver2.id, car2.id)
checkLicenseID(driver3.id, car3.id)


const plane1 = new Plane('Pong1', 'pong', 4, 'F-15')
const plane2 = new Plane('Tefo', 'pong', 5, 'F-16')


const pilot1  = new Pilot('Azooz', 1990, 4, 'Pilot')
const pilot2  = new Pilot('lvo', 1980, 5, 'Pilot')

checkLicenseID(pilot1.id, plane1.id)
checkLicenseID(pilot2.id, plane2.id)


console.log(reserved.map(printAllItems));