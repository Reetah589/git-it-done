var getUserRepos = function() {
  fetch("https://api.github.com/users/octocat/repos");

  var response = fetch("https://api.github.com/users/octocat/repos");
  console.log(response);

  fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  console.log("inside", response);
  });

  console.log("outside");

  fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
 });

};
  
  getUserRepos();
  