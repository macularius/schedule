webix.ready(function() {
    render(new components());
});

function render(components) {
    webix.ui({
        type: "wide",
        cols: [
            {
                id: "control",
                rows: components.controlPanel(),
            },
            {
                id: "control_menu_1_data",
                container: "",
                hidden: false,
                // контент расписания
                rows: [
                    { 
                        template: "Расписание", 
                        height: 40,
                    },
                    { 
                        view:"toolbar", 
                        type:"MainBar", 
                        height: 40,
                        elements:[
                            { 
                                view:"datepicker", 
                                label:"Start date", 
                                name:"start", 
                                width: 200,
                                stringResult:true 
                            },
                            { 
                                view:"datepicker", 
                                label:"End date", 
                                name:"end", 
                                width: 200,
                                stringResult:true 
                            },
                        ]
                    },
                    { 
                        view:"scrollview", 
                        id:"scrollview", 
                        scroll:"x", 
                        body:{
                            cols: components.schedule("self") 
                        }
                    },
                ]
            },
            {
                id: "control_menu_2_data",
                hidden: true,
                // контент редактирования
                rows: [
                    { 
                        template: "Редактирование", 
                        height: 40,
                    },
                    { 
                        view:"toolbar", 
                        type:"MainBar", 
                        height: 40,
                        elements:[
                            { 
                                view:"datepicker", 
                                label:"Start date", 
                                name:"start", 
                                width: 200,
                                stringResult:true 
                            },
                            { 
                                view:"datepicker", 
                                label:"End date", 
                                name:"end", 
                                width: 200,
                                stringResult:true 
                            },
                        ]
                    },
                    { 
                        view:"scrollview", 
                        id:"scrollview", 
                        scroll:"x", 
                        body:{
                            cols: components.edit("self") 
                        }
                    },
                ]
            },
            {
                id: "control_menu_3_data",
                hidden: true,
                // контент настроек
                template: "Настройки",
            },
            {
                id: "control_menu_4_data",
                hidden: true,
                // контент помощи
                template: "Помощь",
            },
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
        var currentContent = "control_menu_1_data";

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
                                {
                                    id: "control_menu_1_3",
                                    value: "Группа 2",
                                    data: [{
                                            id: "control_menu_1_3_1",
                                            value: "Сотрудник 4"
                                        },
                                        {
                                            id: "control_menu_1_3_2",
                                            value: "Сотрудник 5"
                                        },
                                        {
                                            id: "control_menu_1_3_3",
                                            value: "Сотрудник 6"
                                        }
                                    ]
                                }
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
                            console.log(id);
                            $$(currentContent).hide();
                            $$(id+"_data").show();
                            currentContent = id+"_data";
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
    this.schedule = function (key) {
        switch (key) {
            case "self":
                return [
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"10.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable",
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"11.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"12.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"15.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-11", width:100 },
                            { schedule:"14-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"16.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"17.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"18.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"19.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable",
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"22.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"23.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable",
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"24.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"25.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"26.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"27.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                ];
        
            default: break;
        }
            
    }
    this.edit = function (key) {
        switch (key) {
            case "self":
                return [
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"10.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable",
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"11.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"12.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"15.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-11", width:100 },
                            { schedule:"14-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"16.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"17.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"18.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                    {
                        view:"datatable", 
                        scroll: false,
                        autowidth: true,
                        columns:[
                            { id:"schedule", header:"19.04.2019", width:100 },
                        ],
                        data: [
                            { schedule:"9-18", width:100 },
                        ]
                    },
                ];
        
            default: break;
        }
            
    }
}