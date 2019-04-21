workflow "Build and publish" {
  on = "push"
  resolves = ["publish to github pages"]
}

action "npm build" {
  uses = "actions/npm@master"
  args = "build"
}

action "only on master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["npm build"]
}

action "publish to github pages" {
  uses = "maxheld/ghpages@master"
  env = {
    BUILD_DIR = "dist/"
  }
  secrets = ["GH_PAT"]
  needs = ["only on master"]
}
