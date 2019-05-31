import { Provider } from "./provider";
import { Group } from "../entity/group";
import { Employ } from "../entity/employ";

export class MenuProvider extends Provider {

    /**
     * возвращает группы с инициалами сотрудников
     */
    load(): object[] {
        this.data = [
            new Group("1", [
                new Employ(1, "Федоров", "Федор", "Федорович", "birthday", "position", "email", "phone number"),
                new Employ(0, "Коваценко", "Тгорь", "Николаевич", "birthday", "position", "email", "phone number"),
            ], "Стажеры"),
        ];

        return this.data;
    }
    update(param: string): void {
        
    }
}