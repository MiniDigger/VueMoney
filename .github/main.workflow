workflow "Build and publish" {
  on = "push"
  resolves = ["maxheld/ghpages@master"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@master"
  args = "build"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@master"
  needs = ["GitHub Action for npm"]
  args = "branch master"
}

action "maxheld/ghpages@master" {
  uses = "maxheld/ghpages@master"
  needs = ["Filters for GitHub Actions"]
  env = {
    BUILD_DIR = "dist/"
  }
  secrets = ["GH_PAT"]
}
