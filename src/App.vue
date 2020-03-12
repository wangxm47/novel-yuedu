<template>
    <div id="app">
        <transition name="view-fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    body,
    html {
        width: 100%;
        height: 100%;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    .view-fade-enter-active,
    .view-fade-leave-active {
        transition: all .5s;
    }

    .view-fade-enter,
    .view-fade-leave-to {
        transform: rotateX(90deg);
        opacity: 0;
    }
</style>
