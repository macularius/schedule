import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class SheduleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [{}];
    }

    renderUI(): void {this.webixUI = [
        {
            view:"scrollview", 
            scroll:"x",
            body:{
                view:"dataview_edit",
                id: "shedule table shedule",
                xCount: 0,
                editable:true,
                editor:"text",
                editValue:"schedule",
                editaction:"click",
                template: function (item: any) {
                    var date = new Date(item.date);
                    return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                },
                data: {},
            }
        }];
    }
    event(e: string): void {
        //@ts-ignore
        webix.message("shedule:\n" + e);
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}