<template>
    <section class="flex justify-center items-center bg-black bg-gradient-to-b from-black to-darkgray color-lightwhite h-screen">
        <form @submit="checkForm" class="bg-transparent rounded p-8 max-w-screen-sm text-center">
            <svg class="inline-block text-blue" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="64" fill="none" viewBox="0 0 24 24" role="img" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <label class="block text-4xl text-lightwhite font-medium m-8">Find a Country</label>
            <p class="text-xs text-red-500 text-left" v-if="notFound">Not a country name !</p>
            <input class="bg-lightblack outline-none border-0 rounded w-full my-0 mx-auto p-4 text-lightblue text-3xl font-normal text-center"
                type="text" v-model="countryName" placeholder="France" @focus="modal = true"/> 
            <div class="overflow-y-auto h-32">
                <ul class="bg-lightblack text-white rounded-b border-t border-gray" v-if="countryName && modal">
                    <li class="py-2 cursor-pointer hover:bg-blue hover:bg-opacity-50" v-for="country in filteredCountries" :key="country.alpha3Code" @click="setCountryName(country.name)" >{{ country.name }}</li>
                </ul>
            </div>
        </form>
        <Footer class="absolute bottom-0"/>
    </section>
</template>

<script>
    import CountryService from '@/api-services/country-service';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'Home',
        components: {
            Footer
        },
        data() {
            return {
                countryName: "",
                countries: [],
                modal: false,
                notFound: false,
            }
        },
        methods: {
            checkForm: function (e) {
                for(var i = 0; i < this.countries.length; i++) {
                    if (this.countries[i].name == this.countryName) {
                        this.$router.push({ path: `/country/${this.countryName.toLowerCase()}` })
                    }
                }
                this.notFound = true;
                e.preventDefault();
            },
            setCountryName(countryName) {
                 this.countryName = countryName;
                 this.modal = false;
            }
        },
        computed: {
            filteredCountries : function() {
                return this.countries.filter(country => {
                    return country.name.toLowerCase().startsWith(this.countryName.toLowerCase());
                })
            }
        },
        mounted() {
            CountryService.getAll()
            .then(response => {
                this.countries = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    };
</script>
