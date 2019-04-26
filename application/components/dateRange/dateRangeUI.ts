import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class DateRangeUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
            { 
                view:"scrollview", 
                scroll:false, 
                height: 40,
                body:{
                    id: "schedule_date",
                    view:"daterangepicker",
                    format:"%d.%m.%Y",
                    width: 300,
                    label:"Период", 
                    on:{
                        onChange: function(date: any){
                            if (date) {
                                if (date.end) {
                                    ed.notify("\nс "+ date.start.toLocaleDateString() +
                                              "\nпо "+ date.end.toLocaleDateString());
                                }
                                else{
                                    // при нажатии clear data.start == null, в этом случае сообщение не выводится
                                    if (date.start) { 
                                        ed.notify("выбранная дата "+date.start.toLocaleDateString());
                                    }
                                }
                            }
                        },
                    },
                },
            },
        ];
    }

    renderUI(): void {
    }
    event(e: string): void {
        //@ts-ignore
        webix.message("daterange:\n" + e);
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}