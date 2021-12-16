<template>
    <div>
        <h3 class="text-center">Edit User</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateUser">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="user.email" readonly>
                    </div>
                    <div class="form-group">
                        <label>Document</label>
                        <input type="number" class="form-control" v-model="user.document" readonly>
                    </div>
                    <div class="form-group">
                        <label>Birth Date</label>
                        <input type="date" class="form-control" v-model="user.birth_date">
                    </div>
                    <div class="form-group">
                        <label>Photo</label>
                        <input type="file" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Phone number</label>
                        <input type="number" class="form-control" v-model="user.phone_number">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="user.password">
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
                user: {
                    name : '',
                    email : '',
                    document : '',
                    birth_date : '',
                    photo: 'qqch',
                    phone_number: '',
                    password: '',
                }
            }
        },
        created() {
            axios
                .get(`http://voting-system.test/api/usuarios/${this.$route.params.id}`)
                .then((res) => {
                    this.user = res.data;
                });
        },
        methods: {
            updateUser() {
                axios
                    .patch(`http://voting-system.test/api/usuarios/${this.$route.params.id}`, this.user)
                    .then((res) => {
                        this.$router.push({ name: 'users' });
                    });
            }
        }
    }
</script>