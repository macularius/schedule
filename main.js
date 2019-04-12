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
                    {template: "Расписание", id:"content_title", height: 40},
                    // контент для кнопки "Расписание" на панели управления
                    {
                        id: "control_menu_1_1_data",
                        container: "",
                        hidden: false,
                        // контент расписания
                        rows: [
                            { 
                                view:"scrollview", 
                                scroll:false, 
                                height: 40,
                                body:{
                                    view:"daterangepicker",
                                    width: 300,
                                    label:"Период", 
                                }
                            },
                            { 
                                rows: [
                                    {  
                                        view:"scrollview", 
                                        scroll:"x",
                                        body:{
                                            view:"dataview", 
                                            select: true,
                                            xCount:8, // длина массива расписания
                                            template:"<div class='webix_strong'>#date#</div><div>#schedule#</div>",
                                            data: components.scheduleData("self"),
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                        // сотрудник 1
                        {
                            id: "control_menu_1_2_1_data",
                            container: "",
                            hidden: true,
                            // контент расписания
                            rows: [
                                { 
                                    view:"scrollview", 
                                    scroll:false, 
                                    height: 40,
                                    body:{
                                        view:"daterangepicker",
                                        width: 300,
                                        label:"Период", 
                                    }
                                },
                                { 
                                    rows: [
                                        {  
                                            view:"scrollview", 
                                            scroll:"x",
                                            body:{
                                                view:"dataview", 
                                                select: true,
                                                xCount:8, // длина массива расписания
                                                template:"<div class='webix_strong'>#date#</div><div>#schedule#</div>",
                                                data: components.scheduleData("сотрудник 1"),
                                            }
                                        },
                                    ]
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
                                    scroll:false, 
                                    height: 40,
                                    body:{
                                        view:"daterangepicker",
                                        width: 300,
                                        label:"Период", 
                                    }
                                },
                                { 
                                    rows: [
                                        {  
                                            view:"scrollview", 
                                            scroll:"x",
                                            body:{
                                                view:"dataview", 
                                                select: true,
                                                xCount:8, // длина массива расписания
                                                template:"<div class='webix_strong'>#date#</div><div>#schedule#</div>",
                                                data: components.scheduleData("сотрудник 2"),
                                            }
                                        },
                                    ]
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
                                    scroll:false, 
                                    height: 40,
                                    body:{
                                        view:"daterangepicker",
                                        width: 300,
                                        label:"Период", 
                                    }
                                },
                                { 
                                    rows: [
                                        {  
                                            view:"scrollview", 
                                            scroll:"x",
                                            body:{
                                                view:"dataview", 
                                                select: true,
                                                xCount:8, // длина массива расписания
                                                template:"<div class='webix_strong'>#date#</div><div>#schedule#</div>",
                                                data: components.scheduleData("сотрудник 3"),
                                            }
                                        },
                                    ]
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
                                scroll:false, 
                                height: 40,
                                body:{
                                    view:"daterangepicker",
                                    width: 300,
                                    label:"Период", 
                                }
                            },
                            { 
                                rows: [
                                    {  
                                        view:"scrollview", 
                                        scroll:"x",
                                        body:{
                                            view:"dataview_edit",
                                            xCount:8, // длина массива расписания
                                            editable:true,
                                            editor:"text",
                                            editValue:"schedule",
                                            editaction:"click",
                                            type:{
                                                template:"<div class='overall'><div class='webix_strong'>#date#</div><div class='schedule'>#schedule#</div> </div>"
                                            },
                                            data: components.scheduleData("self"),
                                            on:{
                                                onBeforeEditStop:function(state, editor){
                                                    webix.message("data was changed<br>from "+state.old+"<br>  on "+state.value);
                                                    // console.log(state);
                                                },
                                            },
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    // контент для кнопки "Настройки" на панели управления
                    {
                        id: "control_menu_3_data",
                        hidden: true,
                        // контент настроек
                    },
                    // контент для кнопки "Помощь" на панели управления
                    {
                        id: "control_menu_4_data",
                        hidden: true,
                        // контент помощи
                    },
                    // контент для кнопки "Выход" на панели управления
                    {
                        id: "control_menu_5_data",
                        hidden: true,
                    },
                ],
            },
        ],
    });
}

function components() {
    this.controlPanel = function () {
        var currentContent = "control_menu_1_1_data";

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
                                    value: "Мое расписание"
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
                    onMenuItemClick:function(id){
                        if ($$(id+"_data") != undefined) {
                            $$(currentContent).hide();
                            $$(id+"_data").show();
                            currentContent = id+"_data";

                            // console.log($$("control_menu").getMenuItem(id).value);
                            $$("content_title").setHTML($$("control_menu").getMenuItem(id).value);
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
                return [
                    {date:"10.04.2019", schedule:"9-18"},
                    {date:"11.04.2019", schedule:"9-18"},
                    {date:"12.04.2019", schedule:"9-18"},
                    {date:"15.04.2019", schedule:"9-14"},
                    {date:"16.04.2019", schedule:"9-18"},
                    {date:"17.04.2019", schedule:"9-18"},
                    {date:"18.04.2019", schedule:"9-18"},
                    {date:"19.04.2019", schedule:"9-18"},
                ];
            case "сотрудник 1":
                return [
                    {date:"10.04.2019", schedule:"14-18"},
                    {date:"11.04.2019", schedule:"14-18"},
                    {date:"12.04.2019", schedule:"14-18"},
                    {date:"15.04.2019", schedule:"9-14"},
                    {date:"16.04.2019", schedule:"14-18"},
                    {date:"17.04.2019", schedule:"14-18"},
                    {date:"18.04.2019", schedule:"14-18"},
                ];
            case "сотрудник 2":
                return [
                    {date:"10.04.2019", schedule:"9-18"},
                    {date:"11.04.2019", schedule:"9-18"},
                    {date:"12.04.2019", schedule:"9-18"},
                    {date:"15.04.2019", schedule:"9-18"},
                    {date:"16.04.2019", schedule:"9-18"},
                    {date:"17.04.2019", schedule:"9-18"},
                    {date:"18.04.2019", schedule:"9-18"},
                ];
            case "сотрудник 3":
                return [
                    {date:"10.04.2019", schedule:"14-18"},
                    {date:"11.04.2019", schedule:"9-18"},
                    {date:"12.04.2019", schedule:"9-18"},
                    {date:"15.04.2019", schedule:"14-18"},
                    {date:"16.04.2019", schedule:"9-18"},
                    {date:"17.04.2019", schedule:"9-18"},
                    {date:"18.04.2019", schedule:"14-18"},
                ];
        
            default: break;
        } 
    }
}

/*webix.ui({
    view:"dataview_edit",

    editable:true,
    editor:"text",
    editValue:"title",
    editaction:"dblclick",

    type:{
        width: 261,
        height: 90,
        template:"<div class='overall'><div class='title'>#title#</div><div class='year'>#year# year</div> </div>"
    },
    data:big_film_set
});*/