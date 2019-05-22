import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";

export class EditingUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        
        this.webixUI = [
            {
                id: "edit",
                view: "scrollview",
                scroll: "auto",
                maxWidth: 788,
                body: {
                    rows:[
                        { 
                            view: "form",
                            rows: [
                                { 
                                    view:"label", 
                                    label: "По дате:",
                                    inputWidth:100, 
                                },
                                {
                                    cols: [
                                        { 
                                            id: "editingCalendar",
                                            view:"calendar",
                                            weekHeader:true,
                                        },
                                        { 
                                            view: "form",
                                            width: 400,
                                            rows: [
                                                { 
                                                    id: "editingDate",
                                                    template: function (obj: any) {
                                                        if (obj.value){
                                                            //@ts-ignore
                                                            if (webix.isArray(obj.value)) {
                                                                //@ts-ignore
                                                                return obj.value.map(webix.i18n.dateFormatStr).join("<br>");
                                                            }
                                                            //@ts-ignore
                                                            return webix.i18n.dateFormatStr( obj.value );
                                                        }
                                                        return "";
                                                    },
                                                    height: 40,
                                                },
                                                { 
                                                    cols: [
                                                        {
                                                            view: "text",
                                                            width: 70,
                                                            labelAlign:"right",
                                                            label: "с",
                                                            labelWidth: 30,
                                                            inputWidth: 70,
                                                        },
                                                        {
                                                            view: "text",
                                                            width: 70,
                                                            labelAlign:"right",
                                                            label: "по",
                                                            labelWidth: 30,
                                                            inputWidth: 70,
                                                        },
                                                    ]
                                                },
                                                { 
                                                    cols: [
                                                        {
                                                            gravity: 1,
                                                        },
                                                        {
                                                            gravity: 2,
                                                            cols: [
                                                                {
                                                                    view:"button", 
                                                                    id:"editingBtnAccept", 
                                                                    value:"Принять", 
                                                                    inputWidth:100 
                                                                },
                                                                { gravity: 0.5 },
                                                                {
                                                                    view:"button", 
                                                                    id:"editingBtnCancel", 
                                                                    value:"Отменить", 
                                                                    inputWidth:100 
                                                                }
                                                            ]
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {  
                            view: "form",
                            rows: [
                                { 
                                    view:"label", 
                                    label: "Шаблоны:",
                                    inputWidth:100, 
                                },
                                {
                                    view: "datatable", 
                                    id: "template table",
                                    scrollY: "auto",
                                    width: 752,
                                    columns: [
                                        { id:"mon",    header:"понедельник",  width: 105 },
                                        { id:"tue",    header:"вторник",      width: 105 },
                                        { id:"wed",    header:"среда",        width: 105 },
                                        { id:"thu",    header:"четверг",      width: 105 },
                                        { id:"fri",    header:"пятница",      width: 105 },
                                        { id:"sat",    header:"суббота",      width: 105 },
                                        { id:"sun",    header:"воскресенье",  width: 105 },
                                    ],
                                    data: [
                                        {
                                            id: "1",
                                            "mon": "14 - 18",
                                            "tue": "14 - 18",
                                            "wed": "9 - 18",
                                            "thu": "",
                                            "fri": "9 - 18",
                                            "sat": "",
                                            "sun": "",
                                        },
                                        {
                                            id: "2",
                                            "mon": "14 - 18",
                                            "tue": "14 - 18",
                                            "wed": "9 - 18",
                                            "thu": "",
                                            "fri": "9 - 18",
                                            "sat": "",
                                            "sun": "",
                                        },
                                    ] //#TODO data load
                                },
                            ],
                        }
                    ]
                }
            }
        ];
    }
    
    init() {
    }
    renderUI() {
        //@ts-ignore
        if ($$("edit") == null) {
            //@ts-ignore
            $$("shedule table").addView(this.webixUI[0]);
            //@ts-ignore
            $$("editingCalendar").selectDate(Date.now());
            //@ts-ignore
            $$("editingDate").bind($$("editingCalendar"), "value");
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
    destroy() {
        //@ts-ignore
        $$("shedule table").removeView("edit");
    }
}