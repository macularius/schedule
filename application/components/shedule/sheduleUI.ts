import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";

export class SheduleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        this.webixUI = [
        {
            view:"scrollview", 
            scroll:"x",
            body:{
                view:"dataview_edit",
                id: "control_menu_1_1_data_view",
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

    renderUI(): void {
    }
    event(e: string): void {
    }
    getWebixUI(): Array<object> {
        return this.webixUI;
    }
}