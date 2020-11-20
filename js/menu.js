// create the variable overlay
let overlay;

const handleSearchBar = () => {
  let searchbar = document.getElementById("searchbar");
  searchbar.addEventListener("click", () => {
    searchbar.classList.toggle("searching");
    console.log(searchbar);
  });
};

// handle the display of menu on mobile view
const handleMobileMenuDropDown = () => {
  let menuicon = document.getElementsByClassName("menuicon-main")[0];
  let searchAndItems = document.getElementsByClassName("search-and-items")[0];
  menuicon.addEventListener("click", () => {
    searchAndItems.classList.toggle("search-and-items-show");
  });
};
handleMobileMenuDropDown();

// get a class or an id
const getElementByClassOrId = (classOrId, type = "class") => {
  return type === "ID"
    ? document.getElementById(classOrId)
    : document.getElementsByClassName(classOrId)[0];
};

// create an element
const createElementCall = (arr) => {
  let array = [];
  arr.map((element) => array.push(document.createElement(element)));
  return array;
};

// update the feature of the dropdown modal for profile section
const updateCreateDropdownModal = () => {
  let [a, b, div, button2, span2, div2, div3, div4] = createElementCall([
    "A",
    "B",
    "DIV",
    "BUTTON",
    "SPAN",
    "DIV",
    "DIV",
    "DIV",
  ]);
  // create the set status button
  div2.appendChild(div3);
  span2.appendChild(document.createTextNode("Set status"));
  button2.appendChild(div2);
  button2.appendChild(span2);
  div4.appendChild(button2).className = "status";
  getElementByClassOrId("details-modal-section").appendChild(div4);

  // add the a  tag containing the sign in text to a div
  a.appendChild(document.createTextNode("Signed in as "));
  b.appendChild(document.createTextNode("EzeBernardine"));
  a.appendChild(b);
  div.appendChild(a);
  // extract the modal element and attach the div
  getElementByClassOrId("details-modal-section").appendChild(div);
};

// create the dropdown modal section
const createDropdownModal = (attachedId, array) => {
  let detalsDropdown = document.getElementById(`${attachedId}`);
  let section = document.createElement("SECTION");
  let sectionContent = document.createElement("div");
  sectionContent.className = "section-content";

  // add the arrow sign
  let [div] = createElementCall(["DIV"]);
  // sectionMain.appendChild(section);
  section.appendChild(div).className = "arrow";

  // this loops through the array
  for (let i = 0; i < array.length; i++) {
    // create a ul in each loop
    let ul = document.createElement("UL");

    // loop through each nexted array
    for (let j = 0; j < array[i].length; j++) {
      // crate an li element for each nexted array
      let li = document.createElement("LI");
      let liSpan = document.createElement("SPAN");
      liSpan.className = "list";

      // Set its contents
      liSpan.appendChild(document.createTextNode(array[i][j]));
      li.appendChild(liSpan);
      // Add it to the list:
      ul.appendChild(li);
    }

    // add the create lis to the ul
    section.appendChild(ul);
  }

  // assign a classname to the created section tag
  section.className = "details-modal-section";
  sectionContent.appendChild(section);
  // add section to details-dropdown
  return detalsDropdown.appendChild(sectionContent);
};

// remove dropdown modal section
const removeDropdownModal = (element, detailsElement) => {
  // set the open attribute of deatls tag to false
  detailsElement.open = false;
  element.remove();
};

// Remove modal overlay
const removeOverlayModal = (element) => element.remove();

// create modal overlay
const createOverlayModal = (element) => {
  // create the overlay if called
  let detalsDropdown = document.getElementById(`${element}`);
  let div = document.createElement("DIV");
  div.className = "overlay";
  detalsDropdown.children[1].appendChild(div);
  
  // assign the value of the overlay once created
  overlay = document.getElementsByClassName("overlay")[0];
  return closeModal(detalsDropdown);
};

// remove both dropdown and overlay modal
const closeModal = (detailsElement) => {
  overlay = document.getElementsByClassName("overlay")[0];
  overlay.addEventListener("click", () => {
    let detailsModalSection = document.getElementsByClassName(
      "section-content"
      // "details-modal-section"
    )[0];
    removeOverlayModal(overlay);
    removeDropdownModal(detailsModalSection, detailsElement);
  });
};

// open the view more repo related content
const openModal_repo = () => {
  // data to be populated in the dropdown odal
  let text = [
    [
      "New repository",
      "Import repository",
      "New gist",
      "New organization",
      "New project",
    ],
  ];
  // create dropdwon modal details
  createDropdownModal("repo-details-dropdown", text);
  // create modal overlay
  createOverlayModal("repo-details-dropdown");
};

// open the view more profile related content
const openModal_profile = () => {
  // data to be populated in the dropdown odal
  let text2 = [
    ["Upgrade", "Feature preview", "Help", "Settings"],
    [
      "Your profile",
      "Your repositories",
      "Your organizations",
      "Your projects",
      "Your stars",
      "Your gists",
    ],
  ];
  // create dropdwon modal details
  createDropdownModal("profile-details-dropdown", text2);
  // update the remaining content of the profile drpodown modal
  updateCreateDropdownModal();
  // create modal overlay
  createOverlayModal("profile-details-dropdown");
};

// handle show dropwdown modal
const openModal = () => {
  // repo section click
  document
    .getElementsByClassName("repo-details-click")[0]
    .addEventListener("click", () => openModal_repo());
  // profile section click
  document
    .getElementsByClassName("profile-details-click")[0]
    .addEventListener("click", () => openModal_profile());
};
openModal();
