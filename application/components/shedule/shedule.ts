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

        this.currentID = '';

        this.UI = new SheduleUI(new EventDispatcher([this]));
    }

    handleEvent(e: Event): void {
        switch (e.type) {
            case Events.calendarDone:
                if (e.body.start != null) {
                    if (this.currentID != "") {
                        /**
                         * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                         */
                        if (this.currentID != '') {

                            let date = {
                                start: e.body.start,
                                end: e.body.end
                            };
                            
                            this.UI.renderUI(this.provider.load(this.currentID, date));
                        }
                    }
                }
                break;
            case Events.dateClear:
                if (this.currentID != "") {
                    this.UI.renderUI(this.provider.load(this.currentID));
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
                 */
                if (e.body.groupId != "") {
                    id = e.body.groupId + "_" + e.body.employeeId;
                    menuPos = e.body.groupId;
                }
                else {
                    id = e.body.employeeId;
                    menuPos = e.body.groupId;
                }
                /**
                 * проверка является-ли e, id кнопки меню, соответствующей расписанию сотрудника или submenu
                 */
                if (e.body.groupId != "" && (Number(menuPos) == 0 || id.indexOf("_") != -1)) {
                    this.currentID = id;
                    
                    this.UI.renderUI(this.provider.load(this.currentID));
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
        this.UI.renderUI(this.provider.load("0_0", null));
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