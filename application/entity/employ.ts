export class Employ {
    id: number;
    firstname: string;
    lastname: string;
    patronymic: string;
    birthday: string;
    position: string;
    email: string;
    phone: string;

    constructor(id: number,
                firstname: string,
                lastname: string,
                patronymic: string,
                birthday: string,
                position: string,
                email: string,
                phone: string,) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.position = position;
        this.email = email;
        this.phone = phone;
    }
}