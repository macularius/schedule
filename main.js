webix.ready(function() {
    render(new components());
});

function render(components) {
    webix.ui({
        type: "wide",
        cols: [
            // панель управления
            {
                id: "control",
                rows: components.controlPanel(),
            },
            // кнопка "Расписание" на панели управления
            {
                id: "control_menu_1_1_data",
                container: "",
                hidden: false,
                // контент расписания
                rows: [
                    { 
                        template: "Расписание", 
                        height: 40,
                    },
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
                                    data: components.schedule("self"),
                                }
                            },
                        ]
                    },
                ]
            },
                {
                    id: "control_menu_1_2_1_data",
                    container: "",
                    hidden: true,
                    // контент расписания
                    rows: [
                        { 
                            template: "Сотрудник 1", 
                            height: 40,
                        },
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
                                        data: components.schedule("сотрудник 1"),
                                    }
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "control_menu_1_2_2_data",
                    container: "",
                    hidden: true,
                    // контент расписания
                    rows: [
                        { 
                            template: "Сотрудник 2", 
                            height: 40,
                        },
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
                                        data: components.schedule("сотрудник 2"),
                                    }
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "control_menu_1_2_3_data",
                    container: "",
                    hidden: true,
                    // контент расписания
                    rows: [
                        { 
                            template: "Сотрудник 3", 
                            height: 40,
                        },
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
                                        data: components.schedule("сотрудник 3"),
                                    }
                                },
                            ]
                        },
                    ]
                },
            // кнопка "Редактирование" на панели управления
            {
                id: "control_menu_2_data",
                container: "",
                autowidth: true,
                hidden: true,
                // контент расписания
                rows: [
                    { 
                        template: "Редактирование", 
                        height: 40,
                    },
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
                                    data: components.edit("self"),
                                }
                            },
                        ]
                    },
                ]
            },
            // кнопка "Настройки" на панели управления
            {
                id: "control_menu_3_data",
                hidden: true,
                // контент настроек
                template: "Настройки",
            },
            // кнопка "Помощь" на панели управления
            {
                id: "control_menu_4_data",
                hidden: true,
                // контент помощи
                template: "Помощь",
            },
            // кнопка "Выход" на панели управления
            {
                id: "control_menu_5_data",
                hidden: true,
                template: "Выход",
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
                    {
                        id: "control_menu_1",
                        value: "Расписание",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            data: [
                                {
                                    id: "control_menu_1_1",
                                    value: "Мое расписание"
                                },
                                {
                                    id: "control_menu_1_2",
                                    open: false,
                                    value: "Группа 1",
                                    data: [{
                                            id: "control_menu_1_2_1",
                                            value: "Сотрудник 1"
                                        },
                                        {
                                            id: "control_menu_1_2_2",
                                            value: "Сотрудник 2"
                                        },
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
                        id: "control_menu_2",
                        value: "Редактирование",
                        data: {
                            container: "box",
                            height: 300,
                            width: 200,
                            view: "tree",
                            select: true,
                            data: [
                                {
                                    id: "control_menu_2_1",
                                    value: "Мое расписание"
                                },
                                {
                                    id: "control_menu_2_2",
                                    open: false,
                                    value: "Шаблоны",
                                    data: [{
                                        id: "control_menu_2_2_1",
                                        value: "Шаблон 1"
                                    }]
                                }
                            ],
                        },
                    },
                    {
                        $template: "Separator"
                    },
                    {
                        id: "control_menu_3",
                        value: "Настройки",
                        
                    },
                    {
                        id: "control_menu_4",
                        value: "Помощь"
                    },
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
                            // $$("content_title").setHTML($$("control_menu").getMenuItem(id).value);
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
     * расписание - массив таблиц(для каждого дня своя таблица),
     */
    this.edit = function (key) {
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
                ];
            default: break;
        }
            
    }
    this.schedule = function (key) {
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