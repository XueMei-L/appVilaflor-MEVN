<template>
<div>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Home</title>

    <!-- css for vilaflor -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

  </head>

  <body>
    <!-- El modelo del fondo -->
    <div class="container_main" align=center style="background-color:#ebeef3;">
    <br><p style="font-size:50px;">Contactos</p><br>
    <div class="page-background">
      <table>
          <th>Correo</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Horario de atencion</th>
        <tr>
          <td>svilaflorSC@gmail.com</td>
          <td>699356895 (Llamadas gratuitas dentro del territorio español)</td>
          <td>C/Molinos de cal, 38. Santa Cruz. Tenerife. Islas Canarias. España</td>
          <td>Lunes a viernes de 8:30 a 17:30</td>
        </tr>
        <tr>
          <td>svilaflorLL@gmail.com</td>
          <td>688024226 (Llamadas gratuitas dentro del territorio español)</td>
          <td>C/Principal, 38. La Laguna. Tenerife. Islas Canarias. España</td>
          <td>Lunes a viernes de 8:30 a 17:30</td>
        </tr>
        <tr>
          <td>svilaflorSS@gmail.com</td>
          <td>615478195 (Llamadas gratuitas dentro del territorio español)</td>
          <td>C/Principe, 20. San isidro. Tenerife. Islas Canarias. España</td>
          <td>Lunes a viernes de 8:30 a 17:30</td>
        </tr>
        <tr>
          <td>svilaflorAME@gmail.com</td>
          <td>299415786 (Llamadas gratuitas dentro del territorio español)</td>
          <td>C/Isla de la graciosa, 12. Las Americas. Tenerife. Islas Canarias. España</td>
          <td>Lunes a viernes de 8:30 a 17:30</td>
        </tr>
        <tr>
          <td>svilaflorSJ@gmail.com</td>
          <td>699356895 (Llamadas gratuitas dentro del territorio español)</td>
          <td>C/Juan carlos, 78. La Laguna. Tenerife. Islas Canarias. España</td>
          <td>Lunes a viernes de 8:30 a 17:30</td>
        </tr>
      </table>
    </div>
  </div>
  </body>
</div>
</template>

<style scoped>

  table {
    background-color:white;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    margin-left:auto;
    margin-right:auto;
    width:90%;
    height: 100px;
    margin-top:10px;
  }

  td, th {
    border: 2px solid #7d7c7c;
    text-align: center;
    padding: 8px;
    height: 90px;
  }

  tr:nth-child(even) {
    background-color: white;
  }

</style>
