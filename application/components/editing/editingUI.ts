import { UI } from "../../ui/UI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { Event } from "../../kernel/event";

export class EditingUI extends UI {
    constructor(ed: EventDispatcher){
        super(ed);
        
        this.webixUI = [
            {
                id: "edit",
                rows:[
                    { 
                        rows: [
                            { 
                                template: "По дате:",
                                height: 40,
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
                                        rows: [
                                            { 
                                                id: "editingDate",
                                                template: this.format,
                                                height: 40,
                                            },
                                            { 
                                                cols: [
                                                    {
                                                        view: "text",
                                                        label: "с",
                                                    },
                                                    {
                                                        view: "text",
                                                        label: "по",
                                                    },
                                                ]
                                            },
                                            { 
                                                cols: [
                                                    {
                                                        view:"button", 
                                                        id:"editingBtnAccept", 
                                                        value:"Принять", 
                                                        inputWidth:100 
                                                    },
                                                    {
                                                        view:"button", 
                                                        id:"editingBtnCancel", 
                                                        value:"Отменить", 
                                                        inputWidth:100 
                                                    },
                                                ],
                                            },
                                            { 
                                                template: "",
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
                                template: "Шаблон",
                                height: 40,
                            },
                            {
                                rows: [
                                    {
                                        cols: [
                                            { template: "пн", height: 40 },
                                            { template: "вт", height: 40 },
                                            { template: "ср", height: 40 },
                                            { template: "чт", height: 40 },
                                            { template: "пт", height: 40 },
                                            { template: "сб", height: 40 },
                                            { template: "вс", height: 40 },
                                        ],
                                    },
                                    {
                                        cols: [
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                            { view: "text", height: 40 },
                                        ],
                                    }
                                ],
                            },
                        ],
                    }
                ],
            }
        ];
    }
    private format(obj: any){
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
      };
    
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