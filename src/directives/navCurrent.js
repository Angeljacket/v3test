export default {
    mounted(el, binding) {
        const {className, activeClass, curIdx} = binding.value,
            oNavItems = el.getElementsByClassName(className);
            oNavItems[curIdx].className += ` ${activeClass}`;
    },
    updated(el, binding) {
        console.log(el)
    }
}
