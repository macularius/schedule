import { Provider } from "./provider";
import { GroupEmployee } from "../entity/groupEmployee";

export class TitleProvider extends Provider {
    init(){
        let url = "/metadata/title";
        let data: object = [];
        this.getJSON(url, function(err: any, gettingdata: any) {
            if (JSON.parse(gettingdata).Status == "Succes") {
              data = JSON.parse(gettingdata).Data;
            } else {
              return
            }
          });

          
        this.data = data;
    }
    load(id: string) {
        if (this.data == null) {
            this.init();
        }

        return this.data[id];
    }
    update() {
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