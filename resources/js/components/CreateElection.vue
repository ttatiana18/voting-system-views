<template>
    <div>
        <h3 class="text-center">Create Election</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addElection">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="election.name">
                    </div> 
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" class="form-control" v-model="election.description">
                    </div>
                    <div class="form-group">
                        <label>Start Date</label>
                        <input type="date" class="form-control" v-model="election.start_date">
                    </div>
                    <div class="form-group">
                        <label>End Date</label>
                        <input type="date" class="form-control" v-model="election.start_date" readonly>
                    </div>
                    <div class="form-group">
                        <label>User</label>
                        <multiselect v-model="election.candidates" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="id" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
import Multiselect from 'vue-multiselect'

  export default {
    // OR register locally
    components: { Multiselect },
        data() {
            return {
                election: {
                    name: '',
                    description: '',
                    start_date: '',
                    candidates: '',
                },
                users:{},
                options:[        
                ],
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/usuarios2')
                .then(response => {
                    this.users = response.data.users;
                    this.options = response.data.users;
                });
        },
        methods: {

            addTag (newTag) {
                const tag = {
                    id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
                    name: newTag,
                }
                this.options.push(tag)
                this.election.candidates.push(tag)
            },

            addElection() {
                axios
                    .post('http://voting-system.test/api/elecciones/crear', this.election)
                    .then(response => (
                        this.$router.push({ name: 'elections' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>