<script setup>
import { RouterLink } from 'vue-router'
const posts = [
    { id: '1', title: 'first one' },
    { id: '2', title: 'second one' },
    { id: '3', title: 'third one' },
    { id: '4', title: 'forth one' },
    { id: '5', title: 'fifth one' },
]
</script>

<template>
    <H1>Posts Page</H1>
    <li v-for="item in posts" :key="item.id">
        <RouterLink :to="`/posts/${item.id}`">{{ item.title }}</RouterLink>
    </li>
</template>