<script>
    import { onMount, onDestroy } from "svelte";
    import { ToDo, Toolbar } from "@dhx/trial-todolist";
    import "@dhx/trial-todolist/dist/todo.css";
    
    export let users;
    export let tasks;
    export let projects;

    let toolbar_container, todo_container;
    let todo, toolbar;

    onMount(() => {
        todo = new ToDo(todo_container, {
            users, 
            tasks, 
            projects,
            // other configuration properties
        })

        toolbar = new Toolbar(toolbar_container, {
            api: todo.api,
            // other configuration properties
        })
    });

    onDestroy(() => {
        todo.destructor();
        toolbar.destructor();
    });
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={todo_container} style="height: calc(100% - 56px);"></div>
</div>
