<template>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Fruits</title>

  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="container_main" align=center style="background-color:#ebeef3;">
    <br><p style="font-size:50px;">Pedido</p><br>
      <div align='left' style="position: static; margin-left:16%"><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>
      <div class="page-background">
      <div class="responsive" style="display:inline-block; width:90%">
        <div class="polaroid" style="display:inline-block; width:90%;" v-bind:key="p.id" v-for="(p, index) in shoppingCarInfor">
            <img :src="srcShoppingCar[index]" align="left" style="width:20%; margin-left:10%">
            <div>
            <p style="color:black; font-size:30px; margin-top:30px;">{{ p[0].name }}</p>
            <p style="color:black; font-size:20px; margin-top:30px;">{{ p[0].pricePerOne }} €</p>
            </div>
        </div>
        <div style="display:block">
        <button class="button" style="margin-bottom:10px;" v-on:click=buy(user.email)>Comprar</button>
        </div>
      </div>
      </div>
    </div>
  </body>
</html>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  data () {
    return {
      shoppingCar: null,
      srcShoppingCar: [],
      shoppingCarInfor: []
    }
  },

  methods: {
    back () {
      this.$router.back(-1)
    },
    async buy (user) {
      // alert(user)
      this.shoppingCarInfor = null
      this.shoppingCar = null
      this.srcShoppingCar = null
      alert('Tu compra ha sido procesada')
      await axios.patch(`http://localhost:8081/shop?email=${user}`)
    },
    async getShoppingCar (name) {
      try {
        await axios({
          url: `http://localhost:8081/files/?name=${name}`,
          responseType: 'blob',
          methods: 'get'
        }).then(res => {
          // Obtener imagen como objeto blob
          var blob = new Blob([res.data], {type: 'image/jpg'})
          var url = window.URL.createObjectURL(blob)
          this.srcShoppingCar.push(url)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async getProductInfo (name) {
      try {
        await axios({
          url: `http://localhost:8081/product?name=${name}`,
          methods: 'get'
        }).then(res => {
          this.shoppingCarInfor.push(res.data)
          console.log(this.shoppingCarInfor.length)
        })
      } catch (err) {
        console.log(err)
      }
    },
    loadShoppingCart (email) {
      console.log(email)
      axios
        .get(`http://localhost:8081/pedido?email=${email}`)
        .then((response) => {
          this.shoppingCar = response.data[0].pedido
          this.shoppingCar.forEach(element => {
            console.log(element)
            this.getShoppingCar(element)
            this.getProductInfo(element)
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.loadShoppingCart(this.$store.state.user.email)
  },

  computed: {
    ...mapGetters(['user'])
  }
}

</script>
