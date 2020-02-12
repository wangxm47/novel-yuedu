import Vue from 'vue'

Vue.directive("clickoutside", {
    bind: function(el,binding){
        function closeHandler(e){
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value();
            }
        }
        el.clickOutside = closeHandler;
        document.addEventListener("click",closeHandler);
    },
    unbind: function(el){
        document.removeEventListener("click",el.clickOutside);
        delete el.clickOutside;
    }
});