<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>

                    <div v-for="candidate in candidates" :key="candidate[0].id" v-bind:value="candidate[0].id">
                        {{candidate[0].name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import moment from "moment";
    export default {  
        components: { 
            Datepicker,
        },
        data() {
            return {
                candidates: {},
                date:moment(new Date(2021,11,19)).format('yyyy-MM-D'),
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteEleccion/'+this.date)
                .then(response => {
                    console.log(this.date)
                    this.candidates = response.data.candidates;
                    console.log(response.data.candidates)
                });
        },
    }
</script>
