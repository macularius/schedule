import { Provider } from "./provider";
import { Group } from "../entity/group";
import { Employ } from "../entity/employ";

export class MenuProvider extends Provider {
    constructor(){
        super([
            new Group("1", [
                new Employ(1, "Иван", "Иванов", "Иванович", "birthday", "position", "email", "phone number"),
                new Employ(2, "Петр", "Петров", "Петрович", "birthday", "position", "email", "phone number"),
            ]),
            new Group("2", [
                new Employ(3, "Сидор", "Сидоров", "Сидорович", "birthday", "position", "email", "phone number"),
                new Employ(2, "Федор", "Федоров", "Федорович", "birthday", "position", "email", "phone number"),
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