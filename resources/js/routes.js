import Vue from 'vue';
import VueRouter from 'vue-router';
import AllUsers from './components/AllUsers.vue';
import CreateUser from './components/CreateUser.vue';
import EditUser from './components/EditUser.vue';
import AllParties from './components/AllParties.vue';
import CreateParty from './components/CreateParty.vue';
import EditParty from './components/EditParty.vue';
import AllCandidates from './components/AllCandidates.vue';
import CreateCandidate from './components/CreateCandidate.vue';
import EditCandidate from './components/EditCandidate.vue';
import AllElections from './components/AllElections.vue';
import CreateElection from './components/CreateElection.vue';
import EditElection from './components/EditElection.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Report1 from './components/Report1.vue';
import Report2 from './components/Report2.vue';
import Report3 from './components/Report3.vue';
import Report4 from './components/Report4.vue';
import Report5 from './components/Report5.vue';
import Report6 from './components/Report6.vue';
import Report7 from './components/Report7.vue';
import Report8 from './components/Report8.vue';
import VoteLogin from './components/VoteLogin.vue';
import Vote from './components/Vote.vue';

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/Login",
        name: "Login",
        component: Login
    },
    {
        path: "/users",
        name: "users",
        component: AllUsers
    },
    {
        path: "/users/create",
        name: "createUser",
        component: CreateUser
    },
    {
        path: "/users/edit:id",
        name: "editUser",
        component: EditUser
    },
    {
        path: "/parties",
        name: "parties",
        component: AllParties
    },
    {
        path: "/parties/create",
        name: "createParty",
        component: CreateParty
    },
    {
        path: "/parties/edit:id",
        name: "editParty",
        component: EditParty
    },
    {
        path: "/candidates",
        name: "candidates",
        component: AllCandidates
    },
    {
        path: "/candidates/create",
        name: "createCandidate",
        component: CreateCandidate
    },
    {
        path: "/candidates/edit:id",
        name: "editCandidate",
        component: EditCandidate
    },
    {
        path: "/elections",
        name: "elections",
        component: AllElections
    },
    {
        path: "/elections/create",
        name: "createElection",
        component: CreateElection
    },
    {
        path: "/elections/edit:id",
        name: "editElection",
        component: EditElection
    },
    {
        path: "/reports/1",
        name: "report1",
        component: Report1
    },
    {
        path: "/reports/2",
        name: "report2",
        component: Report2
    },
    {
        path: "/reports/3",
        name: "report3",
        component: Report3
    },
    {
        path: "/reports/4",
        name: "report4",
        component: Report4
    },
    {
        path: "/reports/5",
        name: "report5",
        component: Report5
    },
    {
        path: "/reports/6",
        name: "report6",
        component: Report6
    },
    {
        path: "/reports/7",
        name: "report7",
        component: Report7
    },
    {
        path: "/reports/8",
        name: "report8",
        component: Report8
    },
    {
        path: "/vote/login",
        name: "voteLogin",
        component: VoteLogin
    },
    {
        path: "/vote/votar/:user_id",
        name: "vote",
        component: Vote
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;