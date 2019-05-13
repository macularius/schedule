import { Provider } from "./provider";

export class TitleProvider extends Provider {
    constructor(){
        super({
            "1_1": "Иванов Иван Иванович",
            "1_2": "Петров Петр Петрович",
            "2_1": "Сидоров Сидр Сидорович",
            "2_2": "Федоров Федр Федорович",
        });
    }


    load(id: string) {
        return [this.data[id]];
    }
    update() {
    }
}