<template>
    <div class="loader">
        <div class="loading" :class="mySize">
            <svg viewBox="25 25 50 50" class="circular">
                <circle cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" class="path"></circle>
            </svg>
        </div>
        <div class="loading-text" :class="myFontSize">
            {{text}}
            <div class="dot" :class="dotSize"></div>
            <div class="dot" :class="dotSize"></div>
            <div class="dot" :class="dotSize"></div>
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
            },
            text: {
                type: String,
                default: "Loading"
            }
        },
        computed: {
            mySize() {
                if (["small", "medium", "large"].indexOf(this.size) == -1) {
                    return "small";
                } else {
                    return this.size;
                }
            },
            myFontSize(){
                if (["small", "medium", "large"].indexOf(this.size) == -1) {
                    return "font-small";
                } else {
                    return "my-font-"+this.size;
                }
            },
            dotSize(){
                if (["small", "medium", "large"].indexOf(this.size) == -1) {
                    return "font-small";
                } else {
                    return "dot-"+this.size;
                }
            }
        }
    }
</script>

<style scoped="scoped">
    .loader{
        text-align: center;
    }
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
    
    .my-font-small{
        font-size: 15px;
    }
    
    .my-font-medium{
        font-size: 20px;
    }
    
    .my-font-large{
        font-size: 25px;
    }
    
    .dot-small{
        width: 4px;
        height: 4px;
    }
    
    .dot-medium{
        width: 5px;
        height: 5px;
    }
    
    .dot-large{
        width: 6px;
        height: 6px;
    }
    
    .loading-text{
        font-weight: 700;
        color: #2d8cf0;
        margin-top: 15px;
        user-select: none;
    }
    
    .dot{
        border-radius: 100%;
        background-color: #2d8cf0;
        display: inline-block;
        margin-right: 5px;
        animation: dotjump 1s infinite ease-in-out;
    }
    
    
    .dot:nth-child(1){
        animation-delay: -0.5s;
    }
    
    .dot:nth-child(2){
        animation-delay: -0.4s;
    }
    
    .dot:nth-child(3){
        animation-delay: -0.3s;
    }
    
    @keyframes dotjump{
        0%,50%,100%{
            transform: translateY(0);
        }
        25%{
            transform: translateY(-6px);
        }
    }

    .loading {
        position: relative;
        margin: 0 auto;
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

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

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
