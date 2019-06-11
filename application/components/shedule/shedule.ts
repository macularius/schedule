import { Component } from "../../kernel/component";
import { SheduleUI } from "./sheduleUI";
import { iUI } from "../../ui/iUI";
import { EventDispatcher } from "../../kernel/eventDispatcher";
import { iListner } from "../../kernel/iListner";
import { SheduleProvider } from "../../providers/sheduleProvider";
import { Event } from "../../kernel/event";
import { iProvider } from "../../providers/iProvider";
import { Events } from "../../kernel/events";

export class Shedule extends Component {
    private UI: iUI;
    public currentID: string;
    
    constructor(){
        super(new SheduleProvider());

        this.provider = new SheduleProvider();

        this.currentID = "0";

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }
    private switch(status: boolean){
        if(status) {
            //@ts-ignore
            $$("shedule table shedule").show();
        }
        else {
            //@ts-ignore
            $$("shedule table shedule").hide();
        }
    }

    handleEvent(e: Event): void {
        switch (e.type) {
            case Events.calendarDone:
                if (e.body.start != null) {
                    /**
                     * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                     */
                    if (this.currentID != null) {
                        let date = {
                            start: e.body.start,
                            end: e.body.end
                        };
                        
                        this.UI.renderUI(this.provider.load(this.currentID, date), 0);
                        this.UI.init();
                    }
                }
                break;
            case Events.dateClear:
                if (this.currentID != "") {
                    this.UI.renderUI(this.provider.load(this.currentID), 0);
                    this.UI.init();
                }
                break;
            /**
             * обновление расписания по нажатию кнопки меню
             */
            case Events.menuItemClick:
                let id, menuPos;
                /**
                 * если расписание сотрудника, то указывать группу
                 * иначе мое расписание
                 * 
                 * только "мое расписание" не имеет группы
                 */
                if(e.body.context == "edit"){
                    this.switch(false);
                }

                if (e.body.context == "shedule") {
                    this.switch(true);
                    if (e.body.groupId != "") {
                        id = e.body.employeeId;
                        menuPos = e.body.groupId;
                    }
                    else {
                        id = e.body.employeeId;
                        menuPos = e.body.groupId;
                    }
                    /**
                     * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                     */
                    if ((Number(menuPos) == 0 || id != -1)) {
                        this.currentID = id;
                      
                        this.UI.renderUI(this.provider.load(this.currentID), 0);
                        this.UI.init();
                    }
                }
                break;
            case Events.itemCnahge:
                this.provider.update(e.body.value, e.body.editor, this.currentID);
                break;
            default:
                break;
        }

        // if (e.indexOf("обновление расписания") != -1) {
        // }
        
    }
    
    init(): void {
        this.UI.renderUI(this.provider.load("0", null));
        this.UI.init();
    }
    getUI(): any {
        return this.UI.getWebixUI();
    }
    subscribeOnUI(e: iListner) {
        this.UI.getEventDispatcher().subscribe(e);
    }
    getProvider(): iProvider {
        return this.provider;
    }
}