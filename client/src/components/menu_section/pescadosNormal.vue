<template>
<html lang="en">
<div id='frutas'>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Frutas</title>

  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="container_main" align=center style="background-color:#ebeef3;">
    <br><p style="font-size:50px;">PESCADOS</p><br>
    <div align='left' style="position: static; margin-left:16%"><Button class="button" style="background-color:white; color:black;" v-on:click = back>Volver</Button></div><br/>

    <!-- <button v-on:click="infoProduct" class="button" style="margin-bottom:10px;">show</button> -->

    <div class="page-background">
      <div class="responsive" style="display:inline-block">
          <div class="polaroid" style="display:inline-block" v-bind:key="p.id" v-for="(p, index) in products">
            <img :src="src[index]">
            <p>{{ p.formOfSale }}</p>
            <h1>{{ p.name }}</h1>
            <b>{{ p.pricePerOne }} €/Kg </b><br/><br/>
            <button class="button" v-on:click=addProduct(p.name)>Añadir</button>
        </div>
      </div>
    </div>

    </div>
  </body>
</div>
</html>
</template>

<script>
import axios from 'axios'

export default {

  data () {
    return {
      products: [],
      src: []
    }
  },

  methods: {
    // para devolver al la pagina anterior
    back () {
      this.$router.back(-1)
    },
    addProduct (name) {
      alert('Logea para realizar la compra, por favor')
    },
    async add (name) {
      try {
        await axios({
          url: `http://localhost:8081/files/?name=${name}`,
          responseType: 'blob',
          methods: 'get'
        }).then(res => {
          console.log('here')
          // Obtener imagen como objeto blob
          var blob = new Blob([res.data], {type: 'image/jpg'})
          var url = window.URL.createObjectURL(blob)
          this.src.push(url)
        })
      } catch (err) {
        console.log(err)
      }
    }
  },

  // Antes de montar la pagina. autocarga
  mounted () {
    axios
      .get('http://localhost:8081/products?type=Pescados')
      .then((response) => {
        this.products = response.data
        console.log(this.products)
        this.products.forEach(element => {
          this.add(element['name'])
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>

.page-background .polaroid {
  width: 250px;
  background-color:#ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius:10px;
  margin-bottom: 20px;
  margin-left: 25px;
}

.page-background div {
   display:inline-block
}

.page-background h1 {
  color: black;
  font-size: 25px;
  text-align: center;
}

.page-background p {
  text-align: left;
  font-family: Open Sans;
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 10px;
  color:#B2B2B2;
}

.page-background b {
  text-align: right;
  margin-right:5px;
  color: #3885ff;
  font-size: 15px;
}

.page-background button {
  margin-bottom:10px;

  position: relative;
  background-color: black;
  border-radius: 1em;
  font-size: 12px;
  color: white;
  padding: 0.8em 1.8em;
  cursor:pointer;
  user-select:none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition-duration: 0.4s;
}

.page-background .button:hover {
  transition-duration: 0.1s;
  background-color: #3A3A3A;
}

.page-background .button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

.page-background .button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}

.page-background .button:active {
  top: 1px;
}

.page-background img {
  width: 90%;
  margin:10px;
  border-radius:10px;
}

</style>
