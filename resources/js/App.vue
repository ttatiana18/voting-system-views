<template>
    <div class="container"> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">

                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <router-link to="/users" class="nav-item nav-link">Users List</router-link>
                    <router-link to="/users/create" class="nav-item nav-link">Create User</router-link>
                    <router-link to="/parties" class="nav-item nav-link">Parties List</router-link>
                    <router-link to="/parties/create" class="nav-item nav-link">Create Party</router-link>
                    <router-link to="/candidates" class="nav-item nav-link">Candidates List</router-link>
                    <router-link to="/candidates/create" class="nav-item nav-link">Create Candidate</router-link>
                    <router-link to="/elections" class="nav-item nav-link">Elections List</router-link>
                    <router-link to="/elections/create" class="nav-item nav-link">Create Election</router-link>
                    <router-link to="/reports/1" class="nav-item nav-link">Report 1</router-link>
                    <router-link to="/reports/2" class="nav-item nav-link">Report 2</router-link>
                    <router-link to="/reports/3" class="nav-item nav-link">Report 3</router-link>
                    <router-link to="/reports/4" class="nav-item nav-link">Report 4</router-link>
                    <router-link to="/reports/5" class="nav-item nav-link">Report 5</router-link>
                    <router-link to="/reports/6" class="nav-item nav-link">Report 6</router-link>
                    <router-link to="/reports/7" class="nav-item nav-link">Report 7</router-link>
                    <router-link to="/reports/8" class="nav-item nav-link">Report 8</router-link>
                    <router-link to="/vote/login" class="nav-item nav-link">Vote</router-link>
                </div>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>
 
<script>
    export default {}
</script>