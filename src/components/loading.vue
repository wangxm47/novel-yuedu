<template>
    <div>
        <div class="loading" :class="mySize">
            <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" class="path"></circle>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        props: {
            size: {
                type: String,
                default: "small",
            }
        },
        computed: {
            mySize() {
                if (["small", "medium", "large"].indexOf(this.size) == -1) {
                    return "small"
                } else {
                    return this.size;
                }
            }
        }
    }
</script>

<style scoped="scoped">
    .small {
        display: block;
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
    }

    .medium {
        display: block;
        margin: 0;
        padding: 0;
        width: 50px;
        height: 50px;
    }

    .large {
        display: block;
        margin: 0;
        padding: 0;
        width: 70px;
        height: 70px;
    }

    .loading {
        position: relative;
    }

    .circular {
        -webkit-animation: rotate 0.5s linear infinite;
        animation: rotate 1s linear infinite;
        height: 100%;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        animation: dash 1.5s ease-in-out infinite, color 2s ease-in-out infinite;
        stroke-linecap: round;
    }

    /*@keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }*/

    @keyframes color {

        0%,
        100% {
            stroke: #d62d20;
        }

        40% {
            stroke: #0057e7;
        }

        66% {
            stroke: #008744;
        }

        80%,
        90% {
            stroke: #ffa700;
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }
</style>
