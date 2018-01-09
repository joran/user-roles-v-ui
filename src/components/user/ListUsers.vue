<template>
  <div class="users container">
    <Alert v-if='alert' v-bind:message="alert"/>
    <h1 class="page-header">Användare</h1>
    <input class="form-control" placeholder="Sök användare" v-model="filterInput">
    <br/>
     <table class="table table-striped">
      <thead>
        <tr>
          <th>Användarid</th>
          <th>Namn</th>
          <th>Roller</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filterBy(users, filterInput)">
          <td>{{user.userId}}</td>
          <td>{{user.name}}</td>
          <td>{{rolesFormatter(user.roles)}}</td>
          <td>
            <div class="pull-right">
              <router-link class="btn btn-primary btn-sm" v-bind:to="'/user/edit/'+user.userId">Redigera</router-link>
              <button class="btn btn-danger btn-sm" v-on:click="deleteUser(user.userId)">Ta bort</button>
            </div>
          </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ListUsers',
    data () {
      return {
        users: [],
        alert: '',
        filterInput:''
      }
    },
    methods:{
      fetchUsers(){
        this.$http.get("http://localhost:8080/api/user")
          .then(results => {
            console.log("Users.fetchUsers", results);
            if(results.ok){
              this.users = results.body;
            } else {
              this.$notify({
                type:"error",
                title: 'Något gick fel!',
                text: 'Gick inte att hämta alla användare: ' + results.statusText
              });
            }
          })
      },
      deleteUser(userId){
        const fetchUsers = this.fetchUsers;
        this.$http.delete("http://localhost:8080/api/user/" + userId)
        .then(results => {
          console.log("Users.deleteUser", results);
          if(results.ok){
            this.$notify({
              type:"success",
              title: 'Ta bort anvädare',
              text: userId + ' har blivit borttagen'
            });
            fetchUsers();
          } else {
            this.$notify({
              type:"error",
              title: 'Något gick fel!',
              text: 'Gick inte att ta bort ' + userId + ': ' + results.statusText
            });
          }
        })},
      filterBy(list, value){
        const rolesFormatter = this.rolesFormatter;
        return list.filter(function(user){
          return (user.userId+user.name+rolesFormatter(user.roles)).toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
      },
      rolesFormatter(roles){
        return (roles||[]).map(r => r.rolename).join(', ')
      }
    },
    created: function(){
      this.fetchUsers();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
