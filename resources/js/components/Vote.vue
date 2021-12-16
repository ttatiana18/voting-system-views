<template>
    <div>
        <h3 class="text-center">Votacion</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="votar">
                    <div class="form-group">
                        <input type="hidden" class="form-control" v-model="vote.user_id">
                    </div>
                    <div class="form-group">
                        <label>Candidato</label>
                        <multiselect v-model="vote.candidate_id" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="id" :options="options" ></multiselect>
                    </div>
                    <button type="submit" class="btn btn-primary">Votar</button>
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
                users:{},
                vote:{
                    user_id:this.$route.params.user_id,
                    candidate_id:''
                },
                options:[        
                ],
            }
        },
        created() {
            axios
                .get('http://voting-system.test/api/usuarios3')
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
            votar() {
                axios
                    .post('http://voting-system.test/api/voto', this.vote)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>