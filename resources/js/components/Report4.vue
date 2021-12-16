<template>
    <div>
        <h2 class="text-center">Elections List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="election in elections" :key="election.id">
                <td>{{ election.name }}</td>
                <td>{{ election.description }}</td>
                <td>{{ election.start_date }}</td>
                <td>{{ election.end_date }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {  
        data() {
            return {
                elections: {},
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteListadoElecciones')
                .then(response => {
                    this.elections = response.data.elecciones;
                });
        },
    }
</script>