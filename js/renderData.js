// get user name
export const renderUserprofileData = (data) => {
  const renderUserName = () => {
    if (data.username) {
      // create  your elements
      let [h1, span] = createElementCall(["H1", "SPAN"]);
      // create a textnode out from the username and append it to the span tag
      span.appendChild(document.createTextNode(data.username));
      // Attatch the span tag to the h1 tag
      h1.appendChild(span).className = "fullName";
      // Attatch the h1 tag to the name element
      return getElementByClassOrId("name").appendChild(h1);
    }
  };
  renderUserName();

  // render user handle
  const renderUserHandle = () => {
    if (data.userhandle) {
      // create  your elements
      let [span] = createElementCall(["SPAN"]);
      // attatch the userhandle create text nnode to the span tag
      span.appendChild(document.createTextNode(data.userhandle));
      // get the already created h1 tag inside the name elment
      return (getElementByClassOrId("name").appendChild(
        // return (getElementByClassOrId("name").children[0].appendChild(
        span
      ).className = "profile-handle");
    }
  };
  renderUserHandle();

  // render user bio
  const renderUserBio = () => {
    if (data.bio) {
      // create  your elements
      let [h2] = createElementCall(["H2"]);
      // attatch the user bio to the h2 tag
      h2.appendChild(document.createTextNode(data.bio));
      // attatch the h2 tag to my-profile-bio elemnt
      return getElementByClassOrId("my-profile-bio").appendChild(h2);
    }
  };
  renderUserBio();

  // render user avater
  const renderUserAvater = () => {
    if (data.profileImage) {
      // create  your elements
      let [img] = createElementCall(["IMG"]);
      // assign the img a src and attatch the img to the profile-image element
      return (getElementByClassOrId("profile-image").appendChild(img).src =
        data.profileImage);
    } else
      return (getElementByClassOrId("profile-image").appendChild(img).src =
        "../assets/me.jpg");
  };
  renderUserAvater();

  // render userfollowers count
  const renderUserFoloowersCount = () => {
    if (data.followerCount && data.followerCount > 0) {
      // create  your elements
      let [b, icon, iconWrap, a, conatiner] = createElementCall([
        "B",
        "DIV",
        "DIV",
        "A",
        "DIV",
      ]);
      // create the followers icon
      icon.className = "followersicon";
      iconWrap.className = "followersicon-wrap";
      iconWrap.appendChild(icon);
      // append the count value to a b tag
      b.appendChild(document.createTextNode(data.followerCount));
      b.className = "following-count";
      //append the iconWrap, the b tag and follower text to the conatiner div tag
      conatiner.className = "flex followers followersOnly";
      conatiner.appendChild(iconWrap);
      conatiner.appendChild(b);
      conatiner.innerHTML += "followers";
      // append the conatiner div tag to the a tag
      a.appendChild(conatiner);
      a.href = "#";
      // if the foloowerscount is > 0, render the followers count
      return getElementByClassOrId("followings").appendChild(a);
    }
  };
  renderUserFoloowersCount();

  // render userFollowing count
  const renderUserFoloowingCount = () => {
    if (data.following && data.following > 0) {
      // create  your elements
      let [b, a, div] = createElementCall(["B", "A", "DIV"]);
      // append the  following count to the b tag
      b.appendChild(document.createTextNode(data.following));
      b.className = "following-count";
      //create the anchor tag linking the 'following' and append a div to it
      div.appendChild(b);
      div.className = "flex followers following";
      div.innerHTML += "following";
      a.appendChild(div);
      a.href = "#";

      // if the foloowingCount is > 0, render the followers count
      return (
        (getElementByClassOrId("followings").innerHTML += "."),
        getElementByClassOrId("followings").appendChild(a),
        (getElementByClassOrId("followings").innerHTML += ".")
      );
    }
  };
  renderUserFoloowingCount();

  // render number of starred repos
  const renderStarredRepos = () => {
    if (data.starredRepoCount && data.starredRepoCount > 0) {
      // create your elements
      let [container, b, a] = createElementCall(["DIV", "B", "A"]);

      // attatch the star count to a b tag
      b.appendChild(document.createTextNode(data.starredRepoCount));
      b.className = "following-count";

      // attatch the star from component.js and the b tag to the container tag
      container.append(star(), b);
      container.className = "flex followers starred";

      // attatch the conatiner to an a tag
      a.appendChild(container);
      a.href = "#";

      // if no of starred repos is > 0, return the starred count
      return getElementByClassOrId("followings").appendChild(a);
    }
  };
  renderStarredRepos();

  // render  company name
  const renderUserCompany = () => {
    if (data.company) {
      // create your elements
      const [li, companyIconWrap, companyIcon, span] = createElementCall([
        "LI",
        "DIV",
        "DIV",
        "SPAN",
      ]);

      // create the company logo
      companyIconWrap.appendChild(companyIcon);
      companyIcon.className = "companyicon";
      companyIconWrap.className = "companyicon-wrap";

      // attatch the logo to the company name
      span.appendChild(document.createTextNode(data.company));
      li.append(companyIconWrap, span);
      li.className = "flex";

      // return the li
      return getElementByClassOrId("location-details").children[0].appendChild(
        li
      );
    }
  };
  renderUserCompany();

  // render user
  const renderUserLocation = () => {
    if (data.location) {
      // create your elements
      const [companyIconWrap, companyIcon, span, li] = createElementCall([
        "DIV",
        "DIV",
        "SPAN",
        "LI",
      ]);

      // create the compay icon
      companyIconWrap.appendChild(companyIcon);
      companyIconWrap.className = "locationicon-wrap";
      companyIcon.className = "locationicon";

      // attatch the icon and company name to an li
      span.innerHTML = data.location;
      li.append(companyIconWrap, span);
      li.className = "flex";

      // return the li
      return getElementByClassOrId("location-details").children[0].appendChild(
        li
      );
    }
  };
  renderUserLocation();
};

// render repositories data
export const renderUserRepositories = (repos, data, callback) => {
  // check if there are any repos and create a ul for holding each repo content
  const renderReposStatus = () => {
    if (repos && repos.length > 0) {
      // create your elements
      let [ul] = createElementCall(["UL"]);
      ul.className = "repositories-list";

      // attach the ul to the repo body
      getElementByClassOrId("repositories-list").appendChild(ul).className =
        "repositories-ul";
      return getElementByClassOrId("repositories-ul");
    }
  };

  // render the content of each repo
  const renderRepos = () => {
    if (repos) {
      repos.map((repo) => {
        // create your elements
        const [
          li, //1
          repoDetails, //2
          repoNameMain, //3
          h3, //4
          repName, //5
          repoDescription, //6
          p, // 7
          repoMore, //8
          language, //9
          starred, //10
          starrCount, //11
          createdAt, //12
          starMian, //13
          button, //14
          languageColor, //15
          buttonText, //15
          fork, //15
          forkCount, //15
          forkIcon, //15
          licenseInfo, //15
          licenseIconCover, //15
          licenseInfoText, //15
          licenseInfoIcon, //15
        ] = createElementCall([
          "LI", //1
          "DIV", //2
          "DIV", //3
          "H3", //4
          "A", //5
          "DIV", //6
          "P", // 7
          "DIV", //8
          "SPAN", //9
          "A", //10
          "SPAN", //11
          "SPAN", //12
          "DIV", //13
          "BUTTON", //14
          "SPAN", //1
          "SPAN", //16
          "A", //16
          "SPAN", //16
          "DIV", //16
          "SPAN", //16
          "DIV", //16
          "SPAN", //16
          "DIV", //16
        ]);
        // create the repo name
        repName.appendChild(document.createTextNode(repo.name));
        repName.href = "#";
        h3.appendChild(repName);
        repoNameMain.appendChild(h3);
        repoNameMain.className = "repository-name";

        // create the repo description
        repo.description
          ? (p.appendChild(document.createTextNode(repo.description)),
            repoDescription.appendChild(p),
            (repoDescription.className = "repository-description"))
          : null;

        // create other info about a repo
        let currentLnaguage =
          repo.languages.nodes[repo.languages.nodes.length - 1];
        currentLnaguage
          ? (language.append(
              languageColor,
              document.createTextNode(
                repo.languages.nodes[repo.languages.nodes.length - 1].name
              )
            ),
            (languageColor.style.backgroundColor =
              repo.languages.nodes[repo.languages.nodes.length - 1].color),
            // if language is not empty, add it to starred collection
            repoMore.appendChild(language),
            (language.className = "language"))
          : null;
        // return star if the number of stars is > 0
        repo.stargazerCount
          ? ((starrCount.innerHTML = repo.stargazerCount),
            starred.appendChild(star()),
            // attatch the href  to the stars
            (starred.href = `/${data.userhandle}/${repo.name}/stargazers`),
            starred.appendChild(starrCount),
            repoMore.appendChild(starred))
          : null;
        // return fork if the number of forkCount is > 0
        repo.forkCount
          ? ((forkCount.innerHTML = repo.forkCount),
            fork.appendChild(forkIcon),
            (forkIcon.className = "forkIcon"),
            // attatch the href  to the stars
            (fork.href = `/${data.userhandle}/${repo.name}/network/members
            `),
            fork.appendChild(forkCount),
            repoMore.appendChild(fork))
          : null;
        // return license if it exist
        repo.licenseInfo
          ? ((licenseInfoText.innerHTML = repo.licenseInfo.body.split("\n")[0]),
            licenseInfo.appendChild(licenseInfoIcon),
            licenseInfoIcon.appendChild(licenseIconCover),
            (licenseInfoIcon.className = "licenseInfoIcon"),
            licenseInfo.appendChild(licenseInfoText),
            repoMore.appendChild(licenseInfo))
          : null;

        createdAt.appendChild(
          document.createTextNode(`Updated on ${callback(repo.updatedAt)}`)
        );
        repoMore.appendChild(createdAt);
        repoMore.className = "repository-more";

        // merge the repo details
        repoDetails.append(repoNameMain, repoDescription, repoMore);
        repoDetails.className = "repository-details";

        // create the button section
        buttonText.appendChild(
          document.createTextNode(repo.viewerHasStarred ? "Unstar" : "Star")
        );
        button.append(star(repo.viewerHasStarred), buttonText);

        // hnadle star and unstar a repo
        const starAndUnstarARepo = () => {
          button.children[0].children[3].classList.toggle("starred");
          button.children[0].children[4].classList.toggle("starred");
          button.children[0].children[5].classList.toggle("starred");
          // rerender the text content of the button
          return button.children[0].children[5].className.includes("starred")
            ? (button.children[1].innerHTML = "Unstar")
            : (button.children[1].innerHTML = "Star");
        };
        // attatch event handler to the button
        button.addEventListener("click", () => starAndUnstarARepo());
        starMian.appendChild(button);
        starMian.className = "star-main flex";

        // merge the entire repo li content
        li.append(repoDetails, starMian);
        li.className = "repository flex";
        return renderReposStatus().appendChild(li);
      });
    }
  };
  renderRepos();
};

// display the number of repositories
export const renderNoOfRepos = (repos) => {
  if (repos && repos.length > 0) {
    // create your element
    let [span] = createElementCall(["SPAN"]);

    // attatch the repo count to the created span tag
    span.appendChild(document.createTextNode(repos.length));
    span.className = "repo-count";

    // set the span tag
    return getElementByClassOrId("allRepository").appendChild(span);
  }
};

// render user profile image and userhandle on the header
export const renderHeaderProfileImg = (data) => {
  // create your image element
  const [img, imgMBOLE] = createElementCall(["IMG", "IMG"]);
  img.src = data.profileImage || "../assets/me.jpg";
  imgMBOLE.src = data.profileImage || "../assets/me.jpg";

  return (
    // return user profile image on the header on desktop view
    getElementByClassOrId("menuProfileImgDTOP").appendChild(img),
    // return user profile image on the header on mobile view
    getElementByClassOrId("menuProfileImgMOBLE").appendChild(imgMBOLE),
    // return userhandle on the header on mobile view
    getElementByClassOrId("menuProfileMOBLE").appendChild(
      document.createTextNode(data.userhandle)
    )
  );
};

export const renderTabProfileOnScroll = (data) => {
  let profileStick = getElementByClassOrId("pinneedContent");

  // Observe the presence of the pinned profile card
  const observer = new IntersectionObserver(([element]) => {
    if (element.intersectionRatio > 0) {
      profileStick.style.cssText =
        "animation: appear .2s linear 0s  alternate-reverse forwards";
    } else {
      getElementByClassOrId("pinnedImg").src = data.profileImage;
      getElementByClassOrId("pinneedContent").children[1].innerHTML =
        data.userhandle;

      // animate the apearance of the container
      profileStick.style.cssText = "animation: appear .2s linear 0s  forwards";
    }
  });

  observer.observe(getElementByClassOrId("profileStick"));
};
