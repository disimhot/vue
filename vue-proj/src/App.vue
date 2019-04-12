
<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark top bg-dark">
      <router-link
        tag="li"
        to="/"
        exact>
        <a
          class="navbar-brand"
          href="#">Vue course app</a>
      </router-link>
      <div
        class="collapse navbar-collapse"
        id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            tag="li"
            to="/"
            exact>
            <a
              class="nav-link"
              href="#">Главная</a>
          </router-link>
          <router-link
            tag="li"
            to="/home"
            exact>
            <a
              class="nav-link"
              href="#">Список пользователей</a>
          </router-link>
          <router-link
            tag="li"
            to="/add"
            exact>
            <a
              class="nav-link"
              href="#">Добавить пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main
      id="app"
      role="main"
      class="container">
      <router-view/>
    </main>

  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>


