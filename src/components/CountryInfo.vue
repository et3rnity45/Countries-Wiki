<template>
    <Section dark>
        <div class="flex flex-col justify-center items-center mb-8 text-center pt-16 sm:pt-0">
            <div class="flag flex justify-center items-center mb-6">
                <img class="w-50" :src="country.flag" :alt="`${country.name}'s flag`"/>
            </div>
            <h1 class="text-3xl text-lightwhite mb-3 sm:text-4xl">{{ country.name }}</h1>
            <h2 class="text-2xl text-blue mb-6">{{ country.alpha3Code }}</h2>
            <div class="block justify-center items-center sm:flex">
                <span class="flex justify-center items-center whitespace-no-wrap mx-4 mb-2">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    {{ country.capital }}
                </span>
                <span class="flex justify-center items-center whitespace-no-wrap mx-4 mb-2">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ country.region }}
                </span>
                <span class="flex justify-center items-center whitespace-no-wrap mx-4 mb-2">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    {{ country.subregion }}
                </span>
                <span class="flex justify-center items-center whitespace-no-wrap mx-4 mb-2">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="24" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ country.currencies[0].name }} ({{ country.currencies[0].symbol}})
                </span>
            </div>
            <div class="stats grid gap-2 justify-center mt-8">
                <div class="flex flex-col justify-center items-center bg-darkgray py-4 px-2 rounded text-center sm:p-4">
                    <span class="text-lightwhite text-base sm:text-2xl" v-if="country.population">{{ country.population.toLocaleString() }}</span>
                    <span class="text-lightwhite text-base sm:text-2xl" v-else>No Data</span>
                    <span class="uppercase text-xxs tracking-widest mt-3 text-lightblue opacity-75 sm:text-xs">Population</span>
                </div>
                <div class="flex flex-col justify-center items-center bg-darkgray py-4 px-2 rounded text-center sm:p-4">
                    <span class="text-lightwhite text-base sm:text-2xl" v-if="country.area">{{ country.area.toLocaleString() }}</span>
                    <span class="text-lightwhite text-base sm:text-2xl" v-else>No Data</span>
                    <span class="uppercase text-xxs tracking-widest mt-3 text-lightblue opacity-75 sm:text-xs">Area (km²)</span>
                </div>
                <div class="flex flex-col justify-center items-center bg-darkgray py-4 px-2 rounded text-center sm:p-4">
                    <span class="text-lightwhite text-base sm:text-2xl" v-if="country.gini">{{ country.gini }}</span>
                    <span class="text-lightwhite text-base sm:text-2xl" v-else>No Data</span>
                    <span class="uppercase text-xxs tracking-widest mt-3 text-lightblue opacity-75 sm:text-xs">Gini index (%)</span>
                </div>
            </div>
        </div>
    </Section>
</template>

<script>
    import Section from '@/components/Section.vue';

    export default {
        name: 'CountryInfo',
        components: {
            Section,
        },
        props: {
            country: Object
        }
    };
</script>

<style scoped>
    .flag {
        max-width: 300px;
    }

    .stats {
        grid-template-columns: repeat(3, minmax(100px, 200px));
    }
</style>



