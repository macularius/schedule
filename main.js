webix.ready(function () {
    webix.ui({
        type: "wide",
        cols: [
            {
                rows: [
                    {
                        template: "account",
                        height: 80
                    },
                    {
                        view: "menu",
                        id: "control_menu",
                        layout: "y",
                        width: 200,
                        subMenuPos:"right",
                        select: true,
                        data: [{
                                id: "1",
                                value: "Расписание",
                                data: {
                                    container: "box",
                                    height: 300,
                                    width: 200,
                                    view: "tree",
                                    select: true,
                                    data: schedulesData,
                                },
                            },
                            {
                                id: "2",
                                value: "Редактировать",
                                data: {
                                    container: "box",
                                    height: 300,
                                    width: 200,
                                    view: "tree",
                                    select: true,
                                    data: myschedulesData,
                                },
                            },
                            {
                                $template: "Separator"
                            },
                            {
                                id: "3",
                                value: "Настройки"
                            },
                            {
                                id: "4",
                                value: "Помощь"
                            },
                            {
                                id: "5",
                                value: "Выход"
                            }
                        ],
                        on: {
                            onMenuItemClick: function (id) {
                                $$("t1").setHTML(this.getMenuItem(id).value);
                            }
                        },
                    },
                ]
            },
            {
                view: "resizer",
            },
            {
                id: "t1",
                rows:[
                    { template: "промежуток", height:40 },
                    { 
                        height:40,
                        cols: [
                            { template: "день" },
                            { template: "день" },
                            { template: "день" },
                            { template: "день" },
                            { template: "день" },
                        ]
                    },
                    { template: "расписание" },
                ]
            },
        ]
    });
});

var schedulesData = [{
        id: "schedulesData_1",
        value: "Мое расписание"
    },
    {
        id: "schedulesData_2",
        open: false,
        value: "Группа 1",
        data: [{
                id: "schedulesData_2.1",
                value: "Сотрудник 1"
            },
            {
                id: "schedulesData_2.2",
                value: "Сотрудник 2"
            },
            {
                id: "schedulesData_2.3",
                value: "Сотрудник 3"
            }
        ]
    },
    {
        id: "schedulesData_3",
        value: "Группа 2",
        data: [{
                id: "schedulesData_3.1",
                value: "Сотрудник 4"
            },
            {
                id: "schedulesData_3.2",
                value: "Сотрудник 5"
            },
            {
                id: "schedulesData_3.3",
                value: "Сотрудник 6"
            }
        ]
    }
]

var myschedulesData = [{
        id: "myschedulesData_1",
        value: "Мое расписание"
    },
    {
        id: "myschedulesData_2",
        open: false,
        value: "Шаблоны",
        data: [{
            id: "myschedulesData_2.1",
            value: "Шаблон 1"
        }]
    }
]