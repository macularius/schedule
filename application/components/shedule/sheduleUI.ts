import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { EmployTimetable } from "../../entity/employTimetable";

export class SheduleUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [];
    }

    renderUI(timetable: EmployTimetable[]): void {
        let sheduleItems: any[] = [];
        /**
         * проверка на пустоту расписания
         */
        if (timetable.length > 0) {
            
            timetable[0].shedule.days.forEach(day => {
                sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
            });

            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view:"scrollview", 
                scroll:"x",
                body: {
                    view:"dataview_edit",
                    xCount: timetable[0].shedule.days.length,
                    editable:true,
                    editor:"text",
                    editValue:"schedule",
                    editaction:"click",
                    template: function (item: any) {
                        var date = new Date(item.date);
                        return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.shedule+"</div>";
                    },
                    data: sheduleItems,
                }
                //@ts-ignore
            }, $$("shedule table shedule"));
        }
        else {
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view:"scrollview", 
                scroll:"x",
                body: {}
                //@ts-ignore
            }, $$("shedule table shedule"));
        }
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
    init() {
    }
}