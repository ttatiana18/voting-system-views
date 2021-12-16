<template>
    <div>
        <h3 class="text-center">Create Party</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addParty">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="party.name">
                    </div>
                    <div class="form-group">
                        <label>Nit</label>
                        <input type="number" class="form-control" v-model="party.nit">
                    </div>
                    <div class="form-group">
                        <label>Address</label>
                        <input type="text" class="form-control" v-model="party.address">
                    </div>
                    <div class="form-group">
                        <label>Picture</label>
                        <input type="file" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Phone number</label>
                        <input type="number" class="form-control" v-model="party.phone_number">
                    </div>
                    <div class="form-group">
                        <label>Leader</label>
                        <select v-model="party.admin_id">
                            <option disabled value="">Seleccione un usuario</option>
                            <option v-for="user in users" :key="user.id" v-bind:value="user.id">
                                {{ user.name }}
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
                party: {
                    name:'',
                    nit:'',
                    address:'',
                    picture:'none',
                    phone_number:'',
                    admin_id:'',
                },
                users:{},
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/usuarios')
                .then(response => {
                    this.users = response.data.users;
                });
        },
        methods: {
            addParty() {
                axios
                    .post('http://voting-system.test/api/partidos/crear', this.party)
                    .then(response => (
                        this.$router.push({ name: 'parties' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    
</script>