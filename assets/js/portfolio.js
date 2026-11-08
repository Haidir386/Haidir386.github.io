

// Navbar drawer
let navbar_drawer = document.querySelector(".navbar .drawer");
navbar_drawer.style.height = (innerHeight - 100) + "px";

let navbar_side_button = document.querySelector(".navbar .navbar-side-button button");
navbar_side_button.addEventListener("click", () => {
    document.querySelector(".navbar .drawer").style.visibility = "visible";
});

let navbar_side_cancel_button = document.querySelector(".navbar button.side-cancel");
navbar_side_cancel_button.addEventListener("click", () => {
    document.querySelector(".navbar .drawer").style.visibility = "hidden";
})

// Content
// set the default inner height for content element
$(".content").style.height = (innerHeight - $(".navbar-base").getBoundingClientRect().height - 20) + "px";

function onResize() {
    $(".content").style.height = (innerHeight - $(".navbar-base").getBoundingClientRect().height - 20) + "px";
}

function onInit() {



    fetch("/assets/data/industry-talk.json")
    .then(data => data.json())
    .then(data => add_industry_talk_info(data))
    .catch(e => console.log(e))
}

window.addEventListener("resize", onResize );

// Function
function add_industry_talk_info( data ) {

    let it_lists = document.querySelector(".industry-talk-list");
    let lists_event = data["lists"];
    // console.log( data );

    for( let i = 0; i < lists_event.length; i++ ) {
        let content = document.createElement("div");
        content.className = "it-list-item";
        content.innerHTML = `
            <div class="it-list-item-content">
                <h3 class="text-center">${lists_event[i].title}</h3>
                <p> ${lists_event[i].description} </p>
            </div>`;
        content.style.background = `url("${lists_event[i].thumbnails}") fixed`;
        content.style.backgroundPositionX = lists_event[i].position.x + "%";
        content.style.backgroundPositionY = lists_event[i].position.y + "%";
        content.style.backgroundSize = lists_event[i].size + "%";
        it_lists.appendChild( content );
    }

    // <div class="it-list-item-content">
    //                         <h3 class="text-center">Creative Thinking Program</h3>
    //                         <p> Description here </p>
    //                     </div>
}

onInit();