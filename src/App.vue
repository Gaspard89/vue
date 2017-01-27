<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/"><a>Home</a></router-link>
          <router-link tag="li" to="/contact"><a>Contact</a></router-link>
          <router-link tag="li" to="/work"><a>Work</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.jumbotron {
  animation: fadein 2s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>