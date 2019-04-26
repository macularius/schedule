import { Provider } from "./provider";
import { Group } from "../entity/group";
import { Employ } from "../entity/employ";

export class MenuProvider extends Provider {
    constructor(){
        super([
            new Group("1", [
                new Employ(1, "Иванов", "Иван", "Иванович", "birthday", "position", "email", "phone number"),
                new Employ(2, "Петров", "Петр", "Петрович", "birthday", "position", "email", "phone number"),
            ]),
            new Group("2", [
                new Employ(3, "Сидоров", "Сидор", "Сидорович", "birthday", "position", "email", "phone number"),
                new Employ(2, "Федоров", "Федор", "Федорович", "birthday", "position", "email", "phone number"),
            ]),
        ]);
    }

    /**
     * возвращает группы с инициалами сотрудников
     */
    load(): object[] {
        return this.data;
    }
    update(param: string): void {
        
    }
}