<template>
    <div>
        <h3 class="text-center">Ingresar a la votación</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="auth">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="user.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        props:
        {
            user_id:''
        },
        data() {
            return {
                user: {
                }
            }
        },
        methods: { 
            auth() {
                axios
                    .post('http://voting-system.test/api/voto/ingresar', this.user)
                    .then(response => (
                        this.$router.push({ name: 'vote', params:{user_id:response.data.id}})
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
    
</script>