<script lang="ts">
    let count = 0;

    const increment = () => {
        count++;
    };
    const decrement = () => {
        count--;
    };
</script>

<div>Count: {count}</div>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>