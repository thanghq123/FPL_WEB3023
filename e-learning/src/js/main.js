window.addEventListener("load", function() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    toggle && toggle.addEventListener("click", handleToggleMenu);

    function handleToggleMenu(e) {
        menu && menu.classList.add("is-show");
    }
    document.addEventListener("click", handleClickOutside);

    function handleClickOutside(e) {
        if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
            return;
        menu && menu.classList.remove("is-show");
    }

    const routeItems = document.querySelectorAll('.route-item');
    if (routeItems) {
        routeItems.forEach((routeItem) => {
            const routeTitle = routeItem.querySelector('.route-title');
            const angleIcon = routeTitle.querySelector('i');
            const routeContent = routeItem.querySelector('.route-content');
            let routeContentHeight;
            angleIcon.style='transform: rotate(0);';
            routeTitle.onclick = () => {
                if (routeContent.style.display === 'block') {
                  routeContent.style.display = 'none';
                    // routeContentHeight = routeContent.clientHeight;
                    // changeHeight(routeContent, 'decre', routeContentHeight);
                    // angleIcon.classList.remove('fa-angle-up');
                    // angleIcon.classList.add('fa-angle-down');
                    angleIcon.style='transform: rotate(0deg);';
                } else {
                    routeContent.style.display = 'block';
                    // routeContentHeight = routeContent.clientHeight;
                    // changeHeight(routeContent, 'incre', routeContentHeight);
                    // angleIcon.classList.remove('fa-angle-down');
                    // angleIcon.classList.add('fa-angle-up');
                    angleIcon.style='transform: rotate(180deg);';
                }
            }
        })
    }

    function changeHeight(el, type, height) {
        let speed = 50;
        let from;
        let step = height / speed;
        switch (type) {
            case 'incre':
                from = 0;
                break;
            case 'decre':
                from = height;
                break;
        }
        el.style.overflow = 'hidden';
        const counter = setInterval(function() {
            switch (type) {
                case 'incre':
                    from += step;
                    if (from > height) {
                        clearInterval(counter);
                        el.style.height = height + 'px';
                        setTimeout(function() {
                            el.style = 'display: block;'
                        }, 200);
                    } else {
                        el.style.height = Math.ceil(from) + 'px';
                    }
                    break;
                case 'decre':
                    from -= step;
                    el.style.overflow = 'hidden';
                    if (from <= 0) {
                        clearInterval(counter);
                        el.style.height = 0 + 'px';
                        setTimeout(function() {
                            el.style = 'display: none;'
                        }, 200);
                    } else {
                        el.style.height = Math.ceil(from) + 'px';
                    }
            }
        }, 1);
    }
});