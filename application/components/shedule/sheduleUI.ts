import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { EmployTimetable } from "../../entity/employTimetable";
import { Event } from "../../kernel/event";
import { Events } from "../../kernel/events";

export class SheduleUI extends UI {
    public userID: number;
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [];

        this.userID = 0;
    }

    /**
     * Проверяет является-ли id идентификатором пользователя
     * @param id id пользователя
     */
    private verefication(id: number): boolean {
        if (id == this.userID) return true;
        else                   return false;
    }
    private meaningful() {

    }

    init() {
        let ed = this.eventDispatcher;
        let context = this;

        //@ts-ignore
        $$("shedule items").attachEvent("onBeforeEditStop", function(value: any, editor: any) {
            let eventBody = {
                value: value.value,
                editor: editor,
            };
            ed.notify(new Event(Events.itemCnahge, eventBody, context));
        });
    }
    renderUI(timetable: EmployTimetable[]): void {
        let sheduleItems: any[] = [];
        /**
         * проверка на пустоту расписания
         */
        if (timetable.length > 0) {
            
            timetable[0].shedule.days.forEach(day => {
                if (day.ranges[0]) {
                    sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
                }
                else {
                    sheduleItems.push({ date: day.date, shedule: "" });
                }
            });

            let isEdit = this.verefication(timetable[0].employ.id);
            let i = 1;
            let options = {
                weekday: 'short',
            };
            while (new Date(Date.parse(sheduleItems[0].date)).getDay() != 1) {
                let newDate = new Date(sheduleItems[0].date).setDate(new Date(sheduleItems[0].date).getDate() - i);

                sheduleItems.unshift({ 
                    date: new Date(newDate).toString(), 
                    shedule: "" 
                });
            }

            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view:"scrollview", 
                scroll:"x",
                body: {
                    view:"dataview_edit",
                    id: "shedule items",
                    xCount: 7,
                    editable: isEdit,
                    editor:"text",
                    editValue:"shedule",
                    editaction:"click",
                    template: function (item: any) {
                        var date = new Date(item.date);
                        return "<div class='webix_strong shedule'>"+date.toLocaleDateString()
                              +" "+date.toLocaleString('ru-RU', options)
                              +"</div><div>"+item.shedule+"</div>";
                    },
                    data: sheduleItems,
                }
                //@ts-ignore
            }, $$("shedule table"), $$("shedule table shedule"));

            //@ts-ignore
            console.log($$("shedule items").data);
            //@ts-ignore
            console.log($$("shedule items").data.getItem(1557908327285));
        }
        else {
            //@ts-ignore
            webix.ui({
                id: "shedule table shedule",
                view:"scrollview", 
                scroll:"x",
                body: {}
                //@ts-ignore
            }, $$("shedule table"), $$("shedule table shedule"));
        }
    }
    event(e: Event): void {
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}