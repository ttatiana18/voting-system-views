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
            <tr v-for="user in candidates" :key="user.id">
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
                candidates: {},
                cedula:3232323,
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/reporteListadoEleccionesVotante/'+this.cedula)
                .then(response => {
                    console.log(this.cedula)
                    this.candidates = response.data.candidatos_votados;
                    console.log(response.data.candidatos_votados)
                });
        },
    }
</script>