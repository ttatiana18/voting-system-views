<template>
    <div>
        <h2 class="text-center">Parties List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Nit</th>
                <th>Address</th>
                <th>Picture</th>
                <th>Phone Number</th>
                <th>Admin</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="party in parties" :key="party.id">
                <td>{{ party.partido }}</td>
                <td>{{ party.nit }}</td>
                <td>{{ party.address }}</td>
                <td>{{ party.picture }}</td>
                <td>{{ party.phone_number }}</td>
                <td>{{ party.lider }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editParty', params: { id: party.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteParty(party.id)">Delete</button>
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
                parties: []
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/partidos')
                .then(response => {
                    this.parties = response.data.Parties;
                });
        },
        methods: {
            deleteParty(id) { 
                axios
                    .delete('http://voting-system.test/api/partidos/'+id)
                    .then(response => {
                        console.log(response.resp);
                        let i = this.parties.map(data => data.id).indexOf(id);
                        this.parties.splice(i, 1)
                    });
            }
        }
    }
</script>