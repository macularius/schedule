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
            if (element == "length") break; // отсечения метаданных
            
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

        //@ts-ignore
        if ($$("shedule items")) {
            //@ts-ignore
            $$("shedule items").attachEvent("onAfterRender", function() {
                /**
                 * Замена добавленных дней на пустое пространство, 
                 * для избежания редактирования добавленных дней
                 */
                //@ts-ignore
                if ($$("shedule items") && $$("shedule items").data && $$("shedule items").data.pull) {
                    for (let i = 1; i < context.counter; i++) {
                        //@ts-ignore
                        context.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(i)].id).outerHTML = "";
                    }
                    /**
                     * вставка стилизованного пространства на место добавленных
                     */
                    //@ts-ignore
                    context.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(0)].id).outerHTML
                    = "<div style='width: "+(160*context.counter-1)+"px; height:49px; border-bottom: 1px solid #EDEFF0; border-right: 1px solid #EDEFF0; float: left'><br></div>";
                }
            })
        }
        
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
         * проверка на пустоту timetable сотрудника
         */
        if (timetable[0].shedule.days.length > 0) {
            timetable[0].shedule.days.forEach(day => {
                if (day.ranges[0].start != "") {
                    sheduleItems.push({ date: day.date, shedule: day.ranges[0].start + " - " + day.ranges[0].end });
                }
                else {
                    sheduleItems.push({ date: day.date, shedule: "" });
                }
            });

            let isEdit = this.verefication(timetable[0].employ.id);
            let options = {
                weekday: 'short',
            };         
            
            this.counter = 0;

            /**
             * Добавление пустого пространства для выравнивания расписания по понидельнику
             */
            while(new Date(sheduleItems[0].date).getDay() != 1) {
                let currentFirstDay = new Date(sheduleItems[0].date);
                let newFirstDay = currentFirstDay.setDate(currentFirstDay.getDate()-1);
                
                sheduleItems.unshift({
                    date: new Date(newFirstDay).toString(),
                    id: "",
                    shedule: ""
                });
                this.counter++;
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
        
        // console.log("timetable", timetable, "shedule", sheduleItems);
            
        /**
         * Замена добавленных дней на пустое пространство, 
         * для избежания редактирования добавленных дней
         */
        //@ts-ignore
        if ($$("shedule items") && $$("shedule items").data && $$("shedule items").data.pull) {
            for (let i = 1; i < this.counter; i++) {
                //@ts-ignore
                this.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(i)].id).outerHTML = "";
            }
            /**
             * вставка стилизованного пространства на место добавленных
             */
            //@ts-ignore
            this.getDataviewItemById($$("shedule items").data.pull[$$("shedule items").getIdByIndex(0)].id).outerHTML
             = "<div style='width: "+(160*this.counter-1)+"px; height:49px; border-bottom: 1px solid #EDEFF0; border-right: 1px solid #EDEFF0; float: left'><br></div>";
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