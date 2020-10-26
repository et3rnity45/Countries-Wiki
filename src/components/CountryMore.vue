<template>
    <Section>
        <div class="moreDiv max-w-screen-xl grid gap-8 justify-center justify-items-stretch">
            <div class="moreItem py-8 px-4 bg-white rounded shadow-md sm:p-8">
                <header class="flex justify-between">
                    <h2 class="text-2xl pb-1 mb-8">Alternative Spellings</h2>
                </header>
                <ul v-if="filteredSpellings.length > 0">
                    <li class="text-gray" v-for="(spelling, index) in filteredSpellings" :key="index">{{ spelling }}</li>
                </ul>
                <span v-else class="text-gray">No Alternative Spellings</span>
            </div>
            <div class="moreItem py-8 px-4 bg-white rounded shadow-md sm:p-8">
                <header class="flex justify-between">
                    <h2 class="text-2xl pb-1 mb-8">Languages</h2>
                </header>
                <ul>
                    <li class="text-gray" v-for="(language, index) in country.languages" :key="index">{{ language.name }}</li>
                </ul>
            </div>
            <div class="moreItem py-8 px-4 bg-white rounded shadow-md sm:p-8">
                <header class="flex justify-between">
                    <h2 class="text-2xl pb-1 mb-8">Land Borders</h2>
                </header>
                <ul v-if="borders.length > 0">
                    <li class="text-gray" v-for="(border, index) in borders" :key="index">
                        <a class="hover:text-blue hover:underline focus:text-blue focus:underline" :href="`/country/${border.name.toLowerCase()}`">{{ border.name }}</a>
                    </li>
                </ul>
                <span v-else class="text-gray">No Land Borders</span>
            </div>
        </div>
    </Section>
</template>

<script>
    import CountryService from '@/api-services/country-service';
    import Section from '@/components/Section.vue';

    export default {
        name: 'CountryMore',
        components: {
            Section,
        },
        props: {
            country: Object
        },
        data() {
            return {
                borders: [],
            }
        },
        computed: {
            filteredSpellings() {
                return this.country.altSpellings.slice(1);
            }
        },
        created() {
            this.country.borders.forEach(border => {
                CountryService.getSmallByCode(border)
                .then(response => {
                    this.borders.push(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            });
        }
    };
</script>

<style scoped>
    .moreDiv {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        margin: 0px auto;
        margin-top: -8rem;
    }

    .moreItem {
        max-width: 500px;
    }

    h2 {
        background-image: linear-gradient(90deg, rgb(209, 213, 218) 50%, rgba(255, 255, 255, 0) 0px);
        background-repeat: repeat-x;
        background-size: 10px 2px;
        background-position: center bottom;
    }

    li {
        position: relative;
        padding-left: 30px;
    }

    li::before {
        position: absolute;
        content: '>';
        left: 0px;
        @apply text-blue
    }
</style>