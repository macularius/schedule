export class Employ {
    id: number;
    lastname: string;
    firstname: string;
    middlename: string;
    birthday: string;
    position: string;
    email: string;
    phone: string;

    constructor(id: number,
                lastname: string,
                firstname: string,
                middlename: string,
                birthday: string,
                position: string,
                email: string,
                phone: string,) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.middlename = middlename;
        this.birthday = birthday;
        this.position = position;
        this.email = email;
        this.phone = phone;
    }
}