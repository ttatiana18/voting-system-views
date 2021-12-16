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
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {  
        data() {
            return {
                parties: {},
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteListadoPartidos')
                .then(response => {
                    this.parties = response.data.parties;
                    console.log(response.data.parties)
                });
        },
    }
</script>