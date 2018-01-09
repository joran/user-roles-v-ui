<template>
  <div class="add container">
    <h1 class="page-header">Redigera Användare</h1>
    <form v-on:submit="updateUser">
        <div class="well">
            <div class="form-group">
                <label>Användarnamn</label>
                <input type="text" class="form-control" placeholder="Användarnamn vid inloggning" readonly="true" v-model="user.userId">
            </div>
            <div class="form-group">
                <label>Namn</label>
                <input type="text" class="form-control" placeholder="För- och efternamn" v-model="user.name">
            </div>
            <div class="form-group">
                <label>Roller</label>
                <input type="text" class="form-control" placeholder="Roller" v-model="user.roles" disabled="true">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Spara</button>
    </form>
  </div>
</template>

<script>
    export default {
    name: 'editUser',
    data () {
        return {
          user: {}
        }
    },
    methods: {
        fetchUsers(userId){
          this.$http.get("http://localhost:8080/api/user/" + userId)
            .then(function(response) {
              this.user = response.body;
            })
        },
        updateUser(e){
            if(!this.user.userId || !this.user.name ){
              this.$notify({
                type: 'error',
                title: 'Felaktiga värden',
                text: 'Vänligen fyll i alla obligatoriska fält',
                duration: -1
              });
            } else {
                let updatedUser = {
                  name: this.user.name,
                  userId: this.user.userId,
                  roles: this.user.roles || []
                }

                this.$http.put('http://localhost:8080/api/user/' + updatedUser.userId, updatedUser)
                    .then(function(response){
                      this.$notify({
                        type: 'success',
                        title: 'Redigera användare',
                        text: response.body.name + ' har blivit uppdaterad'
                      });

                      this.$router.push({path: '/user'});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    created: function(){
        this.fetchUsers(this.$route.params.userId);
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
