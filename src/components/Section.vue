<template>
    <section class="p-4 lg:py-12 lg:px-20" :class="{ 'bg-black text-lightblue pt-8 pb-40 lg:pt-12 lg:pb-40' : dark }">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: 'Section',
        props: {
            dark: Boolean
        }
    };
</script>