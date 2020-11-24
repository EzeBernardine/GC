// create the variable overlay
let overlay;

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
  let [
    signedInLink,
    userHandleBoldName,
    userHandleAndSignedContainer,
    statusButton,
    statusText,
    statusIconWrap,
    statusIcon,
    buttonContainer,
  ] = createElementCall([
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
  statusIconWrap.appendChild(statusIcon);
  statusText.appendChild(document.createTextNode("Set status"));
  statusButton.appendChild(statusIconWrap);
  statusButton.appendChild(statusText);
  buttonContainer.appendChild(statusButton).className = "status";
  getElementByClassOrId("details-modal-section").appendChild(buttonContainer);

  // add the a  tag containing the sign in text to a div
  signedInLink.appendChild(document.createTextNode("Signed in as "));
  userHandleBoldName.appendChild(document.createTextNode("EzeBernardine"));
  signedInLink.appendChild(userHandleBoldName);
  userHandleAndSignedContainer.appendChild(signedInLink);
  // extract the modal element and attach the div
  getElementByClassOrId("details-modal-section").appendChild(
    userHandleAndSignedContainer
  );
};

// general  dropdown modal for the list itemsection
const createDropdownModal = (attachedId, array) => {
  let detalsDropdown = document.getElementById(`${attachedId}`);
  let sectionTag = document.createElement("SECTION");
  let sectionContainer = document.createElement("div");
  sectionContainer.className = "section-content";

  // add the arrow sign
  let [div] = createElementCall(["DIV"]);
  // sectionMain.appendChild(section);
  sectionTag.appendChild(div).className = "arrow";

  // loop throught the dropdown list items, and create an li tag for each
  for (let i = 0; i < array.length; i++) {
    // create a ul in each loop
    let dropdownListItemContainer = document.createElement("UL");

    // loop through each nexted array
    for (let j = 0; j < array[i].length; j++) {
      // crate an li element for each nexted array
      let dropdownListItem = document.createElement("LI");
      let dropdownListItemSpan = document.createElement("SPAN");
      dropdownListItemSpan.className = "list";

      // Set its contents
      dropdownListItemSpan.appendChild(document.createTextNode(array[i][j]));
      dropdownListItem.appendChild(dropdownListItemSpan);
      // Add it to the list:
      dropdownListItemContainer.appendChild(dropdownListItem);
    }

    // add the create lis to the ul
    sectionTag.appendChild(dropdownListItemContainer);
  }

  // assign a classname to the created section tag
  sectionTag.className = "details-modal-section";
  sectionContainer.appendChild(sectionTag);
  // add section to details-dropdown
  return detalsDropdown.appendChild(sectionContainer);
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
  let overlayTag = document.createElement("DIV");
  overlayTag.className = "overlay";
  detalsDropdown.children[1].appendChild(overlayTag);

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
  let array = [
    [
      "New repository",
      "Import repository",
      "New gist",
      "New organization",
      "New project",
    ],
  ];
  // create dropdwon modal details
  createDropdownModal("repo-details-dropdown", array);
  // create modal overlay
  createOverlayModal("repo-details-dropdown");
};

// open the view more profile related content
const openModal_profile = () => {
  // data to be populated in the dropdown odal
  let array = [
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
  createDropdownModal("profile-details-dropdown", array);
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
