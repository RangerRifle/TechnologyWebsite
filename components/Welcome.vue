<template>
    <div class="welcome">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'WelcomeHome',
    props: {
        msg: String
    }
}
</script>