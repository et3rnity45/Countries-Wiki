<template>
    <section v-if="errored">
        <Error/>
    </section>

    <section v-else>
        <div v-if="loading">
            Loading data...
        </div>

        <div v-else>
            <CountryInfo v-bind:country="country"/>
            <CountryMore v-bind:country="country"/>
            <Footer/>
        </div>
    </section>
</template>

<script>
    import CountryService from '@/api-services/country-service';
    import Error from '@/components/Error.vue';
    import CountryInfo from '@/components/CountryInfo.vue';
    import CountryMore from '@/components/CountryMore.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'Country',
        components: {
            Error,
            CountryInfo,
            CountryMore,
            Footer,
        },
        props: ['name'],
        data() {
            return {
                country: null,
                loading: true,
                errored: false
            }
        },
        mounted() {
            CountryService.getByName(this.name)
                .then(response => {
                    this.country = response.data[0];
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => this.loading = false)
        }
    }
</script>