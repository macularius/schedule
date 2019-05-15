import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Group } from "../../entity/group";
import { Event } from "../../kernel/event";
import { Events } from "../../kernel/events";

export class MenuUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [
            {
                template: "account",
                height: 80,
            },
            {
                view: "tree",
                id: "menu",
                width: 200,
                select:true,
                css: {
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none", 
                },
                data: [
                    // Кнопка меню "Расписание"
                    {
                        id: "menu_1",
                        value: "Расписание",
                        data: [
                            // Кнопка сабменю "Мое расписание"
                            {
                                id: "menu_1_0",
                                value: "Мое расписание"
                            },
                        ],
                    },
                    {
                        // Кнопка меню "Шаблоны"
                        id: "menu_2",
                        value: "Шаблоны",
                        data: [],
                    },
                    // Кнопка меню "Настройки"
                    {
                        id: "menu_3",
                        value: "Настройки",
                    },
                    // Кнопка меню "Помощь"
                    {
                        id: "menu_4",
                        value: "Помощь"
                    },
                    // Кнопка меню "Выход"
                    {
                        id: "menu_5",
                        value: "Выход"
                    },
                ],
                type:{
                    subsign:true
                },
            },
        ];
    }
    
    init(){
        let ed = this.eventDispatcher;
        let context = this;

        //@ts-ignore
        $$("menu").attachEvent("onItemClick", function(id: any) {
            id = id.slice(7);
            let eventBody;
            
            if (id.indexOf("_") != -1) {
                eventBody = {
                    groupId: id.slice(0, id.indexOf("_")),
                    employeeId: id.slice(id.indexOf("_")+1),
                };
            }
            else{
                if (id == "0") {
                    eventBody = {
                        groupId: "0",
                        employeeId: id.slice(id.indexOf("_")+1),
                    };
                }
            }
            
            if (eventBody) {
                ed.notify(new Event(Events.menuItemClick, eventBody, context));
            }
        });
    }
    /**
     * обновляет webixUI, в соответствии с заданными данными групп
     * @param groups массив групп, содержащих имена сотрудников
     * @param menuSheduleItems указатель на область данных, соотвутствующих пункту меню с группами
     *                         webixUI[1]              - панель управления меню
     *                         webixUI[1].data[0]      - submenu "Расписание"
     */
    renderUI(groups: Group[]): void {
        let menuSheduleItems: Array<object> = this.webixUI[1].data[0].data;
        let g: number = 1; // group counter
        let e: number = 1; // employees counter

        /**
         * добавляет каждого сотрудника, каждой группы в меню
         */
        groups.forEach(group => {
            let groupui = {
                id: "menu_1_"+g,
                open: false,
                value: group.name,
                data: new Array(),
            };
            group.employees.forEach(employee => {
                let empui = {
                    id: "menu_1_" + g + "_" + e++,
                    value: employee.lastname + " " + 
                           employee.firstname.slice(0, 1) + " " +
                           employee.middlename.slice(0, 1),
                };
                groupui.data.push(empui);
            });
            menuSheduleItems.push(groupui);
            e = 1;
            g++;
        });
    }
    event(e: Event): void {
        //@ts-ignore
        webix.message("menu:\n" + e);
    }
    getWebixUI(): object[] {
        return this.webixUI;
    }
    getEventDispatcher(): EventDispatcher {
        return this.eventDispatcher;
    }
}