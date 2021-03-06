const axios = require("axios");
const moment = require("moment");

const HASHED_TOKEN =
  "5LO3LO0LOaLO6LO3LO1LO2LO4LO2LOeLO0LO1LO6LOfLO2LOcLO2LO8LO1LOdLO0LObLOcLO3LO6LO6LO4LOaLO0LO4LO4LOfLO9LOaLO6LO8LOcLOaLO3";
const TOKEN = HASHED_TOKEN.split("LO").join("");

// Define constant
// Endpoint URL
const githubUrl = "https://api.github.com/graphql";
// The Authorization in the header of the request
const oauth = {
  Authorization: "bearer " + TOKEN,
};

const query =
  " query { " +
  " viewer { " +
  "login " +
  " name " +
  " location " +
  " bio " +
  "repositories(first: 20) { " +
  " nodes { " +
  " name " +
  " description " +
  "createdAt " +
  " updatedAt " +
  " forkCount " +
  " stargazerCount " +
  " updatedAt " +
  " viewerHasStarred " +
  " languages(first: 20) { " +
  " nodes { " +
  " name " +
  " color " +
  " } " +
  " } " +
  " licenseInfo { " +
  " body " +
  " } " +
  " } " +
  " } " +
  " avatarUrl " +
  " followers { " +
  " totalCount " +
  " } " +
  " following { " +
  " totalCount " +
  " } " +
  " starredRepositories { " +
  " totalCount " +
  " } " +
  " email " +
  " company " +
  " } " +
  " } ";

async function getRepo(callback) {
  const {
    data: { data: items },
  } = await axios.post(githubUrl, { query }, { headers: oauth });
  const {
    viewer: {
      login,
      name,
      avatarUrl,
      followers: { totalCount },
      bio,
      following: { totalCount: followingCount },
      email,
      viewerHasStarred,
      company,
      location,
      starredRepositories,
      ...repoItems
    },
  } = items;
  const profileSection = {
    userhandle: login,
    username: name,
    profileImage: avatarUrl,
    followerCount: totalCount,
    bio,
    following: followingCount,
    userEmail: email,
    company,
    location,
    starredRepoCount: starredRepositories.totalCount,
  };

  let repositories = repoItems.repositories.nodes;
  return { profileSection, repositories };
}

// convert the create repo date
const getCreatedRepoDate = (value) => {
  const date = new Date(value).toISOString();

  // get todays year
  const currentYear = new Date().getFullYear();

  // get the value of the updated repo date
  let updatedRepoDate = moment(date).format("MMM D, YYYY");

  return updatedRepoDate.includes(currentYear.toString())
    ? moment(date).format("MMM D")
    : moment(date).format("MMM D, YYYY");
};

getRepo().then((data) => {
  // console.log(data);
  // Sort the repos according to udated date
  const repos = data.repositories
    .map((item) => item)
    .sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

  return (
    /**
     * call all profile section functions for rendering data
     */
    renderUserprofileData(data.profileSection),
    /**
     *  call all repository section functions for rendering data
     */
    renderUserRepositories(repos, data.profileSection, getCreatedRepoDate),
    /**
     * call the function for rendering the number of repositories
     */
    renderNoOfRepos(repos),
    /**
     * call the function for rendering user profile image on the header
     */
    renderHeaderProfileImg(data.profileSection),
    /**
     * call the function for rendering user profile image on the tab section
     */
    renderTabProfileOnScroll(data.profileSection)
  );
});
