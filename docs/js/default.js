
// Add class "active" to the button representing current page.
function activateTab() {
    thisPage = location.pathname;
    if (thisPage == "/" || thisPage.includes("index.html")) {
        (document.getElementById("tab0").className) = "active";
        return;
    }
    if (thisPage.includes("projects.html")) {
        (document.getElementById("tab1").className) = "active";
        return;
    }
    if (thisPage.includes("publications.html")) {
        (document.getElementById("tab2").className) = "active";
        return;
    }
    if (thisPage.includes("about.html")) {
        (document.getElementById("tab3").className) = "active";
        return;
    }

    (document.getElementById("tab0").className) = "inactive";
    (document.getElementById("tab1").className) = "inactive";
    (document.getElementById("tab2").className) = "inactive";
    (document.getElementById("tab3").className) = "inactive";
}
