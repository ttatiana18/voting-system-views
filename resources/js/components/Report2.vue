<template>
    <div>
        <h2 class="text-center">Candidates List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>Document</th>
                <th>Name</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Phone number</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in candidates" :key="user[0].id">
                <td>{{ user[0].document }}</td>
                <td>{{ user[0].name }}</td>
                <td>{{ user[0].email }}</td>
                <td>{{ user[0].birth_date }}</td>
                <td>{{ user[0].phone_number }}</td>
            </tr>
            </tbody>
        </table>
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
                date:moment(new Date(2021,11,16)).format('yyyy-MM-D'),
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteEleccion/'+this.date)
                .then(response => {
                    this.candidates = response.data.candidates;
                    console.log(response.data.candidates)
                });
        },
    }
</script>