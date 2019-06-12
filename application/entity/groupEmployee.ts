export class GroupEmployee {
    EID: number;
    Lastname: string;
    Firstname: string;
    Middlename: string;
    constructor(EID: number,
                Lastname: string,
                Firstname: string,
                Middlename: string,) {
        this.EID = EID;
        this.Lastname = Lastname;
        this.Firstname = Firstname;
        this.Middlename = Middlename;
    }
}