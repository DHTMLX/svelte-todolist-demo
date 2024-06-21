<script>
    import { onMount } from "svelte";
    import { ToDo, Toolbar } from "@dhx/trial-todolist";
    import "@dhx/trial-todolist/dist/todo.css";
    
    export let users;
    export let tasks;
    export let projects;

    let toolbar_container;
    let todo_container;

    onMount(() => {
        const todo = new ToDo(todo_container, {
            users, 
            tasks, 
            projects,
            // other configuration properties
        })

        new Toolbar(toolbar_container, {
            api: todo.api,
            // other configuration properties
        })
    });
</script>

<div bind:this={toolbar_container}></div>
<div bind:this={todo_container} style="width: 100%; height: 100%;"></div>
