const { createApp } = Vue

createApp({
    data() {
        return {
            records: [],

        }
    },
    methods: {
        getRecords() {
            axios.get('http://localhost:8888/php-dischi-json/api/')
                .then((response) => {
                    // handle success
                    console.log(response.data);
                    this.records = response.data;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    created() {
        this.getRecords();
    }
}).mount('#app')
