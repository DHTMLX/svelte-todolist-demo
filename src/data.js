export function getData() {
    const tasks = [
        {
            id: "temp://1652991560212",
            project: "introduction",
            text: "Greetings, everyone! \u{1F44B} \nI'm DHTMLX To Do List.",
            priority: 1
        },
        {
            id: "1652374122964",
            project: "introduction",
            text: "You can assign task performers and due dates using the menu.",
            assigned: ["user_4", "user_1", "user_2", "user_3"],
            due_date: "2033-03-08T21:00:00.000Z",
            priority: 2
        },
        {
            id: "temp://1652991560250",
            project: "introduction",
            text: "You can also use tags, it's very convenient: #tag",
            priority: 3
        },
        {
            id: "1652376017408",
            project: "introduction",
            text: "Select this task and then press Enter to create the task below \u{1F447}"
        },
        {
            id: "1652376017412",
            project: "introduction",
            parent: null,
            text: "If you press Tab, this task will become a subtask. To edit it, press Ctrl (Cmd) + Enter.",
            assigned: ["user_4"]
        },
        {
            id: "1652097809881",
            project: "introduction",
            text: "You can create tasks with an infinite number of subtasks.",
            assigned: ["user_4"],
            collapsed: false
        },
        {
            id: "1652097809882",
            project: "introduction",
            parent: "1652097809881",
            text: "Use the Tab and Shift + Tab keys for this.",
            checked: false
        },
        {
            id: "1652097809887",
            project: "introduction",
            parent: "1652097809881",
            text: "Select and press Ctrl (Cmd) + Arrow up / Arrow down to change the task order.",
            checked: false
        },
        {
            id: "1652097809883",
            project: "introduction",
            parent: "1652097809881",
            text: "Another example of a task with a subtask.",
            collapsed: false
        },
        {
            id: "1652097809884",
            project: "introduction",
            parent: "1652097809883",
            text: "I am a subtask with an assignee.",
            assigned: ["user_4", "user_3", "user_2", "user_1"]
        },
        {
            id: "1652382019560",
            project: "introduction",
            parent: "1652097809883",
            text: "I am a completed subtask.",
            checked: true
        },
        {
            id: "1652376017388",
            project: "introduction",
            parent: null,
            text: "Example of a collapsed task with subtasks. Press the right arrow key to expand the task, and then the left arrow key to collapse it.",
            checked: false,
            collapsed: true
        },
        {
            id: "1652376017393",
            project: "introduction",
            parent: "1652376017388",
            text: "Flying into space",
            checked: true
        },
        {
            id: "1652376017394",
            project: "introduction",
            parent: "1652376017388",
            text: "Flying to the Moon",
            checked: true
        },
        {
            id: "1652378575570",
            project: "introduction",
            parent: "1652376017388",
            text: "Flying to the Mars"
        },
        {
            id: "1652374122969",
            project: "introduction",
            parent: null,
            text: "To mark a task as completed, press the spacebar or click on the checkbox.",
            checked: true,
            assigned: ["user_2"],
            due_date: "2022-03-08T21:00:00.000Z"
        },
        {
            id: "1652097809895",
            project: "introduction",
            parent: null,
            text: "You can also select a task and use keyboard shortcuts Ctrl (Cmd) + D or Ctrl (Cmd) + C and Ctrl (Cmd) + V to copy and paste it. \n\nShift+Enter in edit mode allows you to create a new paragraph. This is also an example of a task with long text. The text can be as long as you need. ",
            checked: false
        },
        {
            id: "1652376017415",
            project: "introduction",
            parent: null,
            text: "I'm an overdue task. Select this task and then press Enter to create a task below.",
            due_date: "2021-06-14T21:00:00.000Z",
            assigned: ["user_1", "user_2"]
        },
        {
            id: "widgets",
            project: "widgets",
            text: "\u{1F389} DHTMLX widgets"
        },
        {
            id: "gantt",
            project: "widgets",
            parent: "widgets",
            text: "Gantt"
        },
        {
            id: "scheduler",
            project: "widgets",
            parent: "widgets",
            text: "Scheduler"
        },
        {
            id: "diagram",
            project: "widgets",
            parent: "widgets",
            text: "Diagram"
        },
        {
            id: "suite",
            project: "widgets",
            parent: "widgets",
            text: "Suite",
            collapsed: true
        },
        {
            id: "kanban",
            project: "widgets",
            parent: "widgets",
            text: "Kanban"
        },
        {
            id: "spreadsheet",
            project: "widgets",
            parent: "widgets",
            text: "Spreadsheet"
        },
        {
            id: "pivot",
            project: "widgets",
            parent: "widgets",
            text: "Pivot"
        },
        {
            id: "vault",
            project: "widgets",
            parent: "widgets",
            text: "Vault"
        },
        {
            id: "richtext",
            project: "widgets",
            parent: "widgets",
            text: "Richtext"
        },
        {
            id: "todolist",
            project: "widgets",
            parent: "widgets",
            text: "To Do List"
        },
        {
            id: "calendar",
            project: "widgets",
            parent: "suite",
            text: "Calendar"
        },
        {
            id: "chat",
            project: "widgets",
            parent: "suite",
            text: "Chart"
        },
        {
            id: "corpicker",
            project: "widgets",
            parent: "suite",
            text: "ColorPicker"
        },
        {
            id: "combobox",
            project: "widgets",
            parent: "suite",
            text: "ComboBox"
        },
        {
            id: "dataview",
            project: "widgets",
            parent: "suite",
            text: "DataView"
        },
        {
            id: "datepicker",
            project: "widgets",
            parent: "suite",
            text: "DatePicker"
        },
        {
            id: "form",
            project: "widgets",
            parent: "suite",
            text: "Form"
        },
        {
            id: "grid",
            project: "widgets",
            parent: "suite",
            text: "Grid"
        },
        {
            id: "layout",
            project: "widgets",
            parent: "suite",
            text: "Layout"
        },
        {
            id: "list",
            project: "widgets",
            parent: "suite",
            text: "List"
        },
        {
            id: "menu",
            project: "widgets",
            parent: "suite",
            text: "Menu"
        },
        {
            id: "message",
            project: "widgets",
            parent: "suite",
            text: "Message"
        },
        {
            id: "pagination",
            project: "widgets",
            parent: "suite",
            text: "Pagination"
        },
        {
            id: "popup",
            project: "widgets",
            parent: "suite",
            text: "Popup"
        },
        {
            id: "ribbon",
            project: "widgets",
            parent: "suite",
            text: "Ribbon"
        },
        {
            id: "sidebar",
            project: "widgets",
            parent: "suite",
            text: "Sidebar"
        },
        {
            id: "slider",
            project: "widgets",
            parent: "suite",
            text: "Slider"
        },
        {
            id: "tabbar",
            project: "widgets",
            parent: "suite",
            text: "Tabbar"
        },
        {
            id: "timepicker",
            project: "widgets",
            parent: "suite",
            text: "TimePicker"
        },
        {
            id: "toolbar",
            project: "widgets",
            parent: "suite",
            text: "Toolbar"
        },
        {
            id: "tree",
            project: "widgets",
            parent: "suite",
            text: "Tree"
        },
        {
            id: "treegrid",
            project: "widgets",
            parent: "suite",
            text: "TreeGrid"
        },
        {
            id: "window",
            project: "widgets",
            parent: "suite",
            text: "Window"
        }
    ];
    const users = [
        {
            id: "user_1",
            label: "Don Smith",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_61.jpg"
        },
        {
            id: "user_2",
            label: "Nadia Chasey",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_63.jpg"
        },
        {
            id: "user_3",
            label: "Mike Young",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_03.jpg"
        },
        {
            id: "user_4",
            label: "Elvira Webb",
            avatar:
                "https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_33.jpg"
        }
    ];
    const projects = [
        {
            id: "introduction",
            label: "Introduction to DHTMLX To Do List"
        },
        {
            id: "widgets",
            label: "Our widgets"
        }
    ];
    return { tasks, users, projects };
}
