const $menu_content = document.getElementById("menu");

const $side_menu_btn = document.getElementById("side-menu-btn");

$side_menu_btn.addEventListener("click", () => {

    if($side_menu_btn.checked){

        $menu_content.style.left = "0";
    }
    else{

        $menu_content.style.left = "-100%";
    }
});

const $elements_list = [];

$menu_content.childNodes.forEach(li => li.childNodes.forEach(a => {

    $elements_list.push(document.getElementById(a.id.split("-")[0]));

    clickEvent(a.id, a.id.split("-")[0]);
}));

function clickEvent(btn_id, element_id){

    let element_btn = document.getElementById(btn_id);

    element_btn.addEventListener("click", () => {

        let div = document.getElementById(element_id);

        window.scrollBy(0, div.getBoundingClientRect().top - 51);

        element_btn.classList.add("active");

        $side_menu_btn.checked = false;

        $menu_content.style.left = "-100%";
    });
}

const options = {

    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: .5
};

const callback = (entries) => {

    entries.forEach(entry => {

        let entry_btn = document.getElementById(entry.target.id + "-btn");

        if(entry.isIntersecting){
            entry_btn.classList.add("active");
        }
        else{
            entry_btn.classList.remove("active");
        }
    });
}

var observer = new IntersectionObserver(callback, options);
$elements_list.forEach(element => observer.observe(element));