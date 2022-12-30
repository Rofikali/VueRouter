<script setup>
import { useRouter, useRoute } from 'vue-router'
// current route accessing
const route = useRoute()
// console.log('this is params', route)
// descructring route's options 
// const route = {
//     params,
//     name,
//     queury
// }
const router = useRouter()
console.log('this is router', router)


function goBack() {
    router.back()
}

const goForward = () => {
    router.forward()
    console.log('Clicked here')
}

</script>

<template>
    <h2>Posts Detail Page</h2>
    <h2>{{ route.params.id }}</h2>
    <h2>{{ route.name }}</h2>
    <button @click="goBack">Back</button>
    <button @click="goForward">Forward</button>
</template>