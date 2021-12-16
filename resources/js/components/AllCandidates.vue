<template>
    <div>
        <h2 class="text-center">Candidates List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>Candidate</th>
                <th>Party</th>
                <!-- <th>Actions</th> -->
            </tr>
            </thead>
            <tbody>
            <tr v-for="candidate in candidates" :key="candidate.id">
                <td>{{ candidate.Nombre }}</td>
                <td>{{ candidate.Partido }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editCandidate', params: { id: candidate.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteCandidate(candidate.id)">Delete</button>
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
                candidates: []
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/candidatos')
                .then(response => {
                    console.log( response.data.candidates)
                    this.candidates = response.data.candidates;
                });
        },
        methods: {
            deleteCandidate(id) { 
                axios
                    .delete('http://voting-system.test/api/candidatos/'+id)
                    .then(response => {
                        console.log(response.resp);
                        let i = this.candidates.map(data => data.id).indexOf(id);
                        this.candidates.splice(i, 1)
                    });
            }
        }
    }
</script>