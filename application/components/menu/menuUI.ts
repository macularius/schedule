import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Group } from "../../entity/group";

export class MenuUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);

        this.webixUI = [
            {
                template: "account",
                height: 80
            },
            {
                view: "menu",
                id: "menu",
                layout: "y",
                width: 200,
                subMenuPos: "right",
                select: false,
                data: [
                    // Кнопка меню "Расписание"
                    {
                        id: "menu_1",
                        value: "Расписание",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            data: [
                                // Кнопка сабменю "Мое расписание"
                                {
                                    id: "menu_1_0",
                                    value: "Мое расписание"
                                },
                            ],
                        },
                    },
                    {
                        // Кнопка меню "Шаблоны"
                        id: "menu_2",
                        value: "Шаблоны",
                        data: [],
                    },
                    {
                        $template: "Separator"
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
                on:{
                    onMenuItemClick: function(id: any) {
                        ed.notify(id);
                    },
                },
            },
        ];
    }
    
    /**
     * обновляет webixUI, в соответствии с заданными данными групп
     * @param groups массив групп, содержащих имена сотрудников
     * @param menuSheduleItems указатель на область данных, соотвутствующих пункту меню с группами
     *                         webixUI[1]              - панель управления меню
     *                         webixUI[1].data[0]      - submenu "Расписание"
     *                         webixUI[1].data[0].data - контейнер массива расписаний групп
     */
    renderUI(groups: Array<Group>): void {
        let menuSheduleItems: Array<object> = this.webixUI[1].data[0].data.data;
        let g: number = 1; // group counter
        let e: number = 1; // employees counter

        /**
         * добавляет каждого сотрудника, каждой группы в меню
         */
        groups.forEach(group => {
            let groupui = {
                id: "menu_1_"+g,
                open: false,
                value: "Группа " + group.id,
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
    event(e: string): void {
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