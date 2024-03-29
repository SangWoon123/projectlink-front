<template>
    <router-link to="/board">Board컴포넌트이동</router-link>
    <router-link to="/comment">Comment컴포넌트이동</router-link>
    <router-view />
</template>

<script>
// import BoardPage from './components/board/BoardPage.vue';
// import CommentComponent from './components/comment/CommentComponent.vue';

export default {
    name: 'App',
    // components: {
    //     BoardPage, CommentComponent
    // },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
