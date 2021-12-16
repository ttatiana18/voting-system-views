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
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editElection', params: { id: election.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteElection(election.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                elections: []
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/elecciones')
                .then(response => {
                    this.elections = response.data.elections;
                });
        },
        methods: {
            deleteElection(id) { 
                axios
                    .delete('http://voting-system.test/api/elecciones/'+id)
                    .then(response => {
                        console.log(response.resp);
                        let i = this.elections.map(data => data.id).indexOf(id);
                        this.elections.splice(i, 1)
                    });
            }
        }
    }
</script>