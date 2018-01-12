<template>
  <div class="add container">
    <h1 class="page-header">Ny Användare</h1>
    <form v-on:submit="addUser">
        <div class="well">
            <div class="form-group">
                <label>Användarnamn</label>
                <input type="text" class="form-control" placeholder="Användarnamn vid inloggning" v-model="user.userId">
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
    name: 'addUser',
    data () {
        return {
        user: {}
        }
    },
    methods: {
        addUser(e){
            if(!this.user.userId || !this.user.name ){
              this.$notify({
                type:"error",
                title: 'Felaktiga värden',
                text: 'Vänligen fyll i alla obligatoriska fält',
                duration: -100
              });
            } else {
                let newUser = {
                  name: this.user.name,
                  userId: this.user.userId,
                  roles: this.user.roles || []
                }

                this.$http.post('http://localhost:8080/api/user', newUser)
                    .then(function(response){
                        this.$notify({
                          type:"success",
                          title: 'Ny användare',
                          text: response.body.name + ' har lagts till'
                        });
                        this.$router.push({path: '/user' });
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
