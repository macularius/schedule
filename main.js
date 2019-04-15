webix.ready(function() {
    render(new components());
});

function render(components) {
    webix.protoUI({
        name:"dataview_edit"
    }, webix.EditAbility, webix.ui.dataview);

    webix.ui({
        type: "wide",
        cols: [
            // панель управления
            {
                id: "control",
                rows: components.controlPanel(),
            },
            {
                rows:[
                    {template: "Мое расписание", id:"content_title", height: 40},
                    {
                        id: "content_body",
                        rows:[
                            // выбор даты
                            { 
                                view:"scrollview", 
                                scroll:false, 
                                height: 40,
                                body:{
                                    id: "schedule_date",
                                    view:"datepicker", // #TODO перевести в datarange
                                    format:"%d.%m.%Y",
                                    width: 300,
                                    label:"Период", 
                                    on:{
                                        onChange: function(date){
                                            if (date) {
                                                let scheduleData = components.scheduleDataWithDate("self", date); // #TODO контекст данных от currentContent("self")
                                                webix.message("выбранная дата "+date.toLocaleDateString()); // #Значение даты редактирование

                                                if (scheduleData != null) {
                                                    $$(components.getCurrentContent()+"_view").data.clearAll();
                                                    $$(components.getCurrentContent()+"_view").add(scheduleData, 0);
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                            // контент расписаний
                            {
                                rows: [
                                    // контент для кнопки "Расписание" на панели управления
                                    {
                                        id: "control_menu_1_1_data",
                                        hidden: false,
                                        rows: [
                                            {
                                                view:"scrollview", 
                                                scroll:"x",
                                                body:{
                                                    view:"dataview_edit",
                                                    id: "control_menu_1_1_data_view",
                                                    xCount: components.scheduleData("self").length,
                                                    editable:true,
                                                    editor:"text",
                                                    editValue:"schedule",
                                                    editaction:"click",
                                                    template: function (item) {
                                                        var date = new Date(item.date);
                                                        return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                                                    },
                                                    data: components.scheduleData("self"),
                                                    on:{
                                                        onBeforeEditStop:function(state, editor){
                                                            if (state.old != state.value) {
                                                                webix.message("data was changed<br>from "+state.old+"<br>  on "+state.value); // #Значение
                                                                components.editSchedule(state.value, editor);
                                                            }
                                                        },
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                        // сотрудник 1
                                        {
                                            id: "control_menu_1_2_1_data",
                                            container: "",
                                            hidden: true,
                                            rows: [
                                                {  
                                                    view:"scrollview", 
                                                    scroll:"x",
                                                    body:{
                                                        view:"dataview",
                                                        id: "control_menu_1_2_1_data_view",
                                                        select: true,
                                                        xCount: components.scheduleData("1_2_1").length, // длина массива расписания
                                                        template: function (item) {
                                                            var date = new Date(item.date);
                                                            return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                                                        },
                                                        data: components.scheduleData("1_2_1"),
                                                    }
                                                },
                                            ]
                                        },
                                        // сотрудник 2
                                        {
                                            id: "control_menu_1_2_2_data",
                                            container: "",
                                            hidden: true,
                                            // контент расписания
                                            rows: [
                                                {  
                                                    view:"scrollview",
                                                    id: "control_menu_1_2_2_data_view",
                                                    scroll:"x",
                                                    body:{
                                                        view:"dataview", 
                                                        select: true,
                                                        xCount: components.scheduleData("1_2_2").length, // длина массива расписания
                                                        template: function (item) {
                                                            var date = new Date(item.date);
                                                            return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                                                        },
                                                        data: components.scheduleData("1_2_2"),
                                                    }
                                                },
                                            ]
                                        },
                                        // сотрудник 3
                                        {
                                            id: "control_menu_1_2_3_data",
                                            container: "",
                                            hidden: true,
                                            // контент расписания
                                            rows: [
                                                {  
                                                    view:"scrollview",
                                                    id: "control_menu_1_2_3_data_view",
                                                    scroll:"x",
                                                    body:{
                                                        view:"dataview", 
                                                        select: true,
                                                        xCount: components.scheduleData("1_2_3").length, // длина массива расписания
                                                        template: function (item) {
                                                            var date = new Date(item.date);
                                                            return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                                                        },
                                                        data: components.scheduleData("1_2_3"),
                                                    }
                                                },
                                            ]
                                        },
                                    // контент для кнопки "Редактирование" на панели управления
                                    {
                                        id: "control_menu_2_1_data",
                                        container: "",
                                        autowidth: true,
                                        hidden: true,
                                        // контент расписания
                                        rows: [
                                            {
                                                view:"scrollview", 
                                                scroll:"x",
                                                body:{
                                                    view:"dataview_edit",
                                                    id: "control_menu_2_1_data_view",
                                                    xCount: components.scheduleData("self").length, // длина массива расписания
                                                    editable:true,
                                                    editor:"text",
                                                    editValue:"schedule",
                                                    editaction:"click",
                                                    template: function (item) {
                                                        var date = new Date(item.date);
                                                        return "<div class='webix_strong'>"+date.toLocaleDateString()+"</div><div>"+item.schedule+"</div>";
                                                    },
                                                    data: components.scheduleData("self"),
                                                    on:{
                                                        onBeforeEditStop:function(state, editor){
                                                            if (state.old != state.value) {
                                                                webix.message("data was changed<br>from "+state.old+"<br>  on "+state.value); // #Значение
                                                            }
                                                        },
                                                    },
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ],
                    },
                ],
            },
        ],
    });

    /**
     * при нажатии clear на календаре в content place обновляются данные расписания на default(вызов метода components.scheduleData())
     */
    $$("$suggest1_calendar").attachEvent("onDateClear", function() {
        let index = 0;
        let scheduleData = components.scheduleData("self");
        webix.message("clear");
        $$(components.getCurrentContent()+"_view").data.clearAll();
        scheduleData.forEach(item => {
            $$(components.getCurrentContent()+"_view").add(item, index++);
        });
    });
}

function components() {
    var data = [
        [ 
            {date:"Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-14"},
            {date:"Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Fri Apr 19 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
        ],
        [
            {date:"Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-14"},
            {date:"Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
        ],
        [
            {date:"Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
        ],
        [
            {date:"Wed Apr 10 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Thu Apr 11 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Fri Apr 12 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Mon Apr 15 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
            {date:"Tue Apr 16 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Wed Apr 17 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"9-18"},
            {date:"Thu Apr 18 2019 00:00:00 GMT+0400 (GMT+04:00)", schedule:"14-18"},
        ],
    ];
    var currentContent = "control_menu_1_1_data";

    // текущий активный контент-блок
    this.getCurrentContent = function() {
        return currentContent;
    }

    // панель управления
    this.controlPanel = function () {

        return controlPanel = [
            {
                template: "account",
                height: 80
            },
            {
                view: "menu",
                id: "control_menu",
                layout: "y",
                width: 200,
                subMenuPos: "right",
                select: false,
                data: [
                    // Кнопка меню "Расписание"
                    {
                        id: "control_menu_1",
                        value: "Расписание",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            data: [
                                // Кнопка сабменю "Мое расписание"
                                {
                                    id: "control_menu_1_1",
                                    value: "Мое расписание"
                                },
                                {
                                    id: "control_menu_1_2",
                                    open: false,
                                    value: "Группа 1",
                                    data: [
                                        // Кнопка сабменю "Сотрудник 1"
                                        {
                                            id: "control_menu_1_2_1",
                                            value: "Сотрудник 1"
                                        },
                                        // Кнопка сабменю "Сотрудник 2"
                                        {
                                            id: "control_menu_1_2_2",
                                            value: "Сотрудник 2"
                                        },
                                        // Кнопка сабменю "Сотрудник 3"
                                        {
                                            id: "control_menu_1_2_3",
                                            value: "Сотрудник 3"
                                        }
                                    ],
                                },

                            ],
                        },
                    },
                    {
                        // Кнопка меню "Редактирование"
                        id: "control_menu_2",
                        value: "Редактирование",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            select: true,
                            data: [
                                // Кнопка сабменю "Мое расписание"
                                {
                                    id: "control_menu_2_1",
                                    value: "Мое расписание ред."
                                },
                                {
                                    // Кнопка сабменю "Шаблоны"
                                    id: "control_menu_2_2",
                                    open: false,
                                    value: "Шаблоны",
                                    data: [
                                        // Кнопка сабменю "Шаблон 1"
                                        {
                                            id: "control_menu_2_2_1",
                                            value: "Шаблон 1"
                                        }
                                    ]
                                }
                            ],
                        },
                    },
                    {
                        $template: "Separator"
                    },
                    // Кнопка меню "Настройки"
                    {
                        id: "control_menu_3",
                        value: "Настройки",
                    },
                    // Кнопка меню "Помощь"
                    {
                        id: "control_menu_4",
                        value: "Помощь"
                    },
                    // Кнопка меню "Выход"
                    {
                        id: "control_menu_5",
                        value: "Выход"
                    },
                ],
                on:{
                    /**
                     * переключение контента по нажатию кнопки меню
                     * скрывает текущий контент и показывает выбранный
                     */
                    onMenuItemClick:function(id){
                        switch (id) {
                            case "control_menu_3":
                            case "control_menu_4":
                            case "control_menu_5":
                                console.log($$("schedule_date").getValue());
                                $$("content_body").hide();
                                $$("content_title").setHTML($$("control_menu").getMenuItem(id).value);
                                break;
                            default:
                                if ($$(id+"_data") != undefined) {
                                    $$("content_body").show();
                                    $$(currentContent).hide();
                                    $$(id+"_data").show();
                                    currentContent = id+"_data";
        
                                    // console.log($$("control_menu").getMenuItem(id).value);
                                    $$("content_title").setHTML($$("control_menu").getMenuItem(id).value);
                                    
                                    $$("schedule_date").setValue("");
                                }
                                break;
                        }
                    }
                },
                type:{
                    subsign:true
                }
            },
        ];
    };

    /**
     * расписание - массив объектов {date:.., schedule:..},
     */
    this.scheduleData = function (key) {
        switch (key) {
            case "self":
                return data[0];
            case "1_2_1":
                return data[1];
            case "1_2_2":
                return data[2];
            case "1_2_3":
                return data[3];
            default: break;
        } 
    }
    this.scheduleDataWithDate = function (key, date) {
        var schedule = this.scheduleData(key);
        var returnItem;

        schedule.forEach(item => {
            if (item.date == date) {
                returnItem = item;
            }
        });
        return returnItem;
    }

    this.editSchedule = function(value, editor) {
        var newItem;

        editor.config.data.forEach(item => {
            if (item.id == editor.id) {
                newItem = item;
            }
        });

        data.forEach(item => {
            if (item.date == newItem.date) {
                item.schedule = value;
                return;
            }
        });
    }
}