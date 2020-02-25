import Vue from 'vue'

Vue.directive("clickoutside", {
    bind: function(el, binding) {
        function closeHandler(e) {
            if (el.contains(e.target)) {
                return false;
            }
            var node = e.target;
            while (!node || node.parentNode != document) {
                if (node == null || node.hasAttribute("clickoutside")) {
                    return false;
                }
                if (node) node = node.parentNode;
            }
            if (binding.expression) {
                binding.value();
            }
        }
        el.clickOutside = closeHandler;
        document.addEventListener("click", closeHandler);
    },
    unbind: function(el) {
        document.removeEventListener("click", el.clickOutside);
        delete el.clickOutside;
    }
});
