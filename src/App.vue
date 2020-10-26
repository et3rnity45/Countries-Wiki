<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: 'App',
    };
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

body {
    @apply bg-lightwhite;
}
</style>