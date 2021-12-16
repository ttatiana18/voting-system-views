<template>
    <div>
        <h2 class="text-center">Users List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>Document</th>
                <th>Name</th>
                <th>Birth Date</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.document }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.birth_date }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {  

        data() {
            return {
                users: {},
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteListadoEdad')
                .then(response => {
                    this.users = response.data.votants;
                    console.log(response.data.votants)
                });
        },
    }
</script>