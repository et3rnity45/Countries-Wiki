<template>
    <footer class="flex justify-center items-center p-4 text-gray text-center text-sm font-medium sm:p-8 lg:py-8 lg:px-20">
        <div>
            <span>Built with</span>
            <a 
                class="inline-block text-blue p-1 hover:underline focus:underline" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                Vue.js 3
            </a>
            &middot;
            <a
                class="inline-block text-blue p-1 hover:underline focus:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                Tailwind CSS
            </a>
            &middot;
            <a
                class="inline-block text-blue p-1 hover:underline focus:underline" href="https://restcountries.eu/" target="_blank" rel=" noopener noreferrer">
                RestCountries API
            </a>
            &horbar;
            <a
                class="inline-block text-blue p-1 hover:underline focus:underline" href="https://github.com/et3rnity45/Countries-Wiki" target="_blank" rel=" noopener noreferrer">
                Github
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>