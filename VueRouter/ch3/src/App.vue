<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <RouterView />
</template>
<style>
nav {
  width: 100%;
  font-size: 25px;
  border-bottom: 1px solid red;
}

nav a {
  display: inline-block;
  text-decoration: none;
  margin: 10px;
}

nav a.router-link-exact-active {
  background-color: coral;
  padding: 5px;
  border-radius: 5px;
}
</style>