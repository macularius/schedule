import { Provider } from "./provider";
import { Group } from "../entity/group";
import { GroupEmployee } from "../entity/groupEmployee";

export class MenuProvider extends Provider {

    /**
     * возвращает группы с инициалами сотрудников
     */
    load(): object[] {
        this.data = [];
        let data: Group[] = [];
        this.getJSON("/metadata/menu", function(err: any, gettingdata: any) {
        if (JSON.parse(gettingdata).Status == "Succes") {
            data = JSON.parse(gettingdata).Data;
        } else {
            return
        }
        });

        data.forEach((group: Group) => {            
            let employees: GroupEmployee[] = [];
            group.Employees.forEach((emp: GroupEmployee) => {
                employees.push(new GroupEmployee(emp.EID, emp.Lastname, emp.Firstname, emp.Middlename))
            });

            this.data.push(new Group(group.GID, employees, group.Name))
        });
        
        return this.data;
    }
    update(param: string): void {
        
    }

    getJSON(url: string, callback: any) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
}