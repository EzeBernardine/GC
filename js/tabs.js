// indicate current tab
const handleSwitchTab = () => {
  let tabsArray = [...getElementByClassOrId("tabs-ul").children];
  //   remove the active class from the li tab and add it to the current one
  let getActiveTab = (element) => {
    tabsArray.map((tab) => tab.classList.remove("active"));
    return element.classList.add("active");
  };
  //   loop through the li tags and get the clicked  li tab
  tabsArray.map((tab) => {
    tab.addEventListener("click", () => getActiveTab(tab));
  });
};
handleSwitchTab();

const updateCreateSelectDropdownModal = (typeText) => {
  // get the  modal
  let modalWrap = getElementByClassOrId("details-modal-section");
  modalWrap.style.minWidth = "300px";
  let modal = getElementByClassOrId("details-modal-section");

  // create the select type header
  let [
    dropdownHeaderTag,
    selectTypeSpanTag,
    buttonTag,
    closeContainer,
    mark,
  ] = createElementCall(["HEADER", "SPAN", "BUTTON", "DIV", "SPAN"]);
  selectTypeSpanTag.innerHTML = typeText;
  buttonTag.appendChild(closeContainer).className = "close";
  dropdownHeaderTag.append(selectTypeSpanTag, buttonTag);
  dropdownHeaderTag.className = "flex";

  // attatch the header to the dropdown content
  modal.children[0].className = "head";
  modal.children[0].appendChild(dropdownHeaderTag);

  /**
   * update styles of the list elements
   *
   * Create the mark sign
   *
   * attatch the mark sign to the first element
   */
  mark.appendChild(document.createTextNode("✔️"));
  mark.className = "mark";
  mark.style.cssText = "position: absolute; top: 9px; left: 15px";
  modal.children[1].children[0].appendChild(mark);
  let domArray = [...modal.children[1].children];
  domArray.map((element) => {
    element.style.cssText = "border-top: 1px solid #eaecef;";
    element.className = "selectTypeList";
    element.firstChild.className += " selectTypeList-text";
    return (element.firstChild.style.cssText =
      "padding: 7px 16px 7px 35px; font-size: 12px");
  });
};

// open the dropdown for selecting type
const openModal_selectType = (animationElement) => {
  // data to be populated on the dropdown
  let array = [
    ["All", "Public", "Private", "Sources", "Forks", "Archived", "Mirrors"],
  ];
  // create the dropdown modal details
  createDropdownModal("search-github-types", array);

  // animate the dropdown modal
  getElementByClassOrId(animationElement).style.cssText =
    "animation:  slide .12s linear  forwards";

  // update the features of the select type dropdown modal
  updateCreateSelectDropdownModal("Select type");
  // create the modal overlay
  createOverlayModal("search-github-types");
};

// open the dropdown for selecting language
const openModal_selectLanguage = (animationElement) => {
  // data to be populated on the dropdown
  let array = [["All", "JavaScript", "HTML", "CSS"]];
  // create the dropdown modal details
  createDropdownModal("search-github-language", array);

  // animate the dropdown modal
  getElementByClassOrId(animationElement).style.cssText =
    "animation:  slide .12s linear  forwards";

  // update the features of the select language dropdown modal
  updateCreateSelectDropdownModal("Select language");
  // create the modal overlay
  createOverlayModal("search-github-language");
};

// call up the  dropdown modal fro selecting type
const selectType = () => {
  // type section click
  document
    .getElementsByClassName("search-github-types-click")[0]
    // pass the dropdown element class as props for animation
    .addEventListener("click", () =>
      openModal_selectType("details-modal-section")
    );
  // language section filter
  document
    .getElementsByClassName("search-github-language-click")[0]
    // pass the dropdown element class as props for animation
    .addEventListener("click", () =>
      openModal_selectLanguage("details-modal-section")
    );
};
selectType();
