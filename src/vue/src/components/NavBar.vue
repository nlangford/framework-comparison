<template>
  <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">{{title}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      title: 'To Do Lists'
    }
  }
}
</script>
