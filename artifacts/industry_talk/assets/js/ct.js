

function onResize() {
    /** @type {HTMLDivElement} */ let introduction_section = document.querySelector(".introduction");
    if( innerWidth <= 900 )
    {

        let flex1_content = introduction_section.children.item(1);

        flex1_content.className = "dp-flex flex-column";
        flex1_content.children.item(0).style.width = "100%";

        flex1_content.children.item(1).style.width = "100%";
    } else {
        let flex1_content = introduction_section.children.item(1);

        flex1_content.className = "dp-flex flex-row";
        flex1_content.children.item(0).style.width = "50%";
        flex1_content.children.item(1).style.width = "50%";
    }
}

window.addEventListener("resize", onResize );