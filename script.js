function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
    }
    let activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add("active-tab");
    }
}
