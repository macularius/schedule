import { Provider } from "./provider";

export class TitleProvider extends Provider {
    load(id: string) {
        this.data = {
            "1_0": "Коваценко Игорь Николаевич",
            "1_1": "Федоров Федор Федорович",
        };

        return [this.data[id]];
    }
    update() {
    }
}