<template>
    <div class="error flex flex-col justify-center items-center bg-black bg-gradient-to-b from-black to-darkgray color-lightwhite h-screen">
        <svg class="inline-block text-blue mb-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="64" fill="none" viewBox="0 0 24 24" role="img" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
        <h1 class="text-lightwhite text-6xl font-medium mb-4">404</h1>
        <p class="text-white">Something went wrong. Country not found !</p>
        <router-link class="p-4 text-blue hover:underline focus:underline" :to="{ name: 'Home'}">Go back to Home</router-link>
        <Footer class="absolute bottom-0"/>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'Error',
        components: {
            Footer,
        }
    }
</script>

<style scoped>
    .error {
        padding-bottom: 20vh;
    }
</style>