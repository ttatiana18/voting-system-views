<template>
    <div>
        <h3 class="text-center">Edit Election</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="editElection">
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
                        <input type="date" class="form-control" v-model="election.end_date">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                election: {}
            }
        },
        created() {
            axios
                .get(`http://voting-system.test/api/elecciones/${this.$route.params.id}`)
                .then((res) => {
                    this.election = res.data;
                });
        },
        methods: {
            updateElection() {
                axios
                    .patch(`http://voting-system.test/api/elecciones/${this.$route.params.id}`, this.election)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>