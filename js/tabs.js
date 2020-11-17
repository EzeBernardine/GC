// indicate current tab
const handleTab = () => {
  let tabsArray = [...getElementByClassOrId("tabs-ul").children];

  //   remove the active class from the li tags and add it to the current one
  let getActiveTab = (element) => {
    tabsArray.map((tab) => tab.classList.remove("active"));
    return element.classList.add("active");
  };

  //   loop through the li tags and get the clicked  li tab
  tabsArray.map((tab) => {
    tab.addEventListener("click", () => getActiveTab(tab));
  });
};
handleTab();
