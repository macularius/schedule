import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { EmployTimetable } from "../../entity/employTimetable";
import { Event } from "../../kernel/event";
import { Events } from "../../kernel/events";

export class SheduleUI extends UI {
    public userID: number;
    public counter = 0;

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
    private getDataviewItemById(id: number) {
        let elements = document.getElementsByClassName("webix_dataview_item");        

        for(let element in elements) {
            if (elements[element].getAttribute('webix_l_id') != null 
             && Number(elements[element].getAttribute('webix_l_id')) == id) {
                // console.log(elements[element]);
                 
                return elements[element];
            }
        }
        return null;
    }

    init() {
        let ed = this.eventDispatcher;
        let context = this;

    }
    renderUI(timetable: EmployTimetable[]): void {
        let sheduleItems: any[] = [];
        /**
         * проверка на пустоту timetable сотрудника
         */
        if (timetable.length > 0) {
            timetable[0].shedule.days.forEach(day => {
                if (day.ranges[0].start != "") {
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

            console.log(sheduleItems);
            
            /**
             * Добавление пустого пространства для выравнивания расписания по понидельнику
             */
            while(new Date(sheduleItems[0].date).getDay() != 1) {
                let currentFirstDay = new Date(sheduleItems[0].date);
                let newFirstDay = currentFirstDay.setDate(currentFirstDay.getDay()-1);
                sheduleItems.unshift({
                    date: new Date(newFirstDay).toString(),
                    id: "",
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