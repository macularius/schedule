import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { EmployTimetable } from "../../entity/employTimetable";

export class SheduleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [
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
                        return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.shedule+"</div>";
                    },
                    data: [],
                }
            }];
    }

    renderUI(timetable: EmployTimetable[]): void {
        let sheduleItems = this.webixUI[0].body.data;
        this.webixUI[0].body.xCount = timetable[0].shedule.days.length;

        timetable[0].shedule.days.forEach(day => {
            sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
        });
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