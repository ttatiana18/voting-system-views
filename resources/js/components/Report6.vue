<template>
    <div>
        <h2 class="text-center">Users List</h2>
 
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
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.document }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.birth_date }}</td>
                <td>{{ user.phone_number }}</td>
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
                .get('http://voting-system.test/api/reporteListadoPromedio')
                .then(response => {
                    this.users = response.data.votants;
                    console.log(response.data.votants)
                });
        },
    }
</script>