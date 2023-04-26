<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <b-navbar-brand class="m-2 text-uppercase">Movies Handler</b-navbar-brand>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/add">Add Movie</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>
