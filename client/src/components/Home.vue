<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>
  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="home-container">
      <div class="container-left">
        <!-- Titulo - Tu mercado ideal -->
        <span style="position:relative; top:45%">
          <h1 style="font-size: 50px; color:black"><i>Tu Mercado ideal<br> @vilaflor</i></h1>
        </span>
      </div>
    </div>
  </body>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  // devolver datos
  data () {
    return {
      emailLogin: null,
      passwordLogin: null,
      loginmsg: null
    }
  },

  methods: {
    async CheckUser () {
      if (!this.passwordLogin || !this.emailLogin) {
        this.loginmsg = 'Rellenas datos necesarios para hacer login'
      } else {
        await axios
          .post(`http://localhost:8081/login`, {
            email: this.emailLogin,
            password: this.passwordLogin
          })
          .then((response) => {
            // salto de pagina
            alert(`Inicio de seccion correcto`)
            // check token
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.username)
            console.log('eeeeee')
            // this.$router.push('/Menu')
            // var parsedobj = JSON.parse(JSON.stringify(response))
            // console.log(parsedobj)
            // console.log(parsedobj.data[0]['username'])
          }, (err) => {
            this.loginmsg = 'Confima que el email o la contraseña esta bien correcta.'
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

body {
  background-color: rgb(255, 255, 255);
}

/* parte izquierda del home */
.home-container .container-left{
  float: left;
  width: 50%;
  height: 100%;
  /* background-color: red; */
}

/* parte derecha del home */
.home-container .container-right{
  float: right;
  width: 50%;
  height: 100%;
  /* background-color: orange; */
}

/* login part */
.container-login {
  position: relative;
  top:20%;
  display: inline-block;
  width: 350px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 25px gray;
}

.login input {
  display: block;
  top: 30%;
  margin: 10px auto;
  width: 250px;
  height: 30px;
  text-align: center;

}

.sign_in input{
  display: block;
  margin: 30px auto;
  width: 260px;
  height: 30px;
}

/* home contenido principal */
.home-container {
  object-position: 100px 50px;
  position: left;
  display: inline-block;
  width: 100%;
  height: 600px;
  background:url("./imagenes/b1.jpg");
  background-size: 100%;
}

</style>
