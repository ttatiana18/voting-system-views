<template>
    <div>
        <h3 class="text-center">Create Candidate</h3>
        <div class="row">
            <div class="col-md-6"> 
                <form @submit.prevent="addCandidate">
                    <div class="form-group">
                        <label>User</label>
                        <select v-model="candidate.candidate_id">
                            <option disabled value="">Seleccione un usuario</option>
                            <option v-for="user in users" :key="user.id" v-bind:value="user.id">
                                {{ user.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Party</label>
                        <select v-model="candidate.party_id">
                            <option disabled value="">Seleccione un partido</option>
                            <option v-for="party in parties" :key="party.id" v-bind:value="party.id">
                                {{ party.partido }}
                            </option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                candidate: {},
                users:{},
                parties:{},
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/usuarios')
                .then(response => {
                    this.users = response.data.users;
                });
            axios
                .get('http://voting-system.test/api/partidos')
                .then(response => {
                    this.parties = response.data.Parties;
                });
            axios
                .get('http://voting-system.test/api/elecciones')
                .then(response => {
                    this.elections = response.data.elections;
                });
        },
        methods: {
            addCandidate() {
                console.log(this.candidate),
                axios
                    .post('http://voting-system.test/api/candidatos/crear', this.candidate)
                    .then(response => (
                        this.$router.push({ name: 'candidates' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    
</script>