<script>
    import ToDo from "./ToDo.svelte";
    import { getData } from "./data.js";
    
    const { users, tasks, projects } = getData();
</script>

<ToDo {users} {tasks} {projects} />
