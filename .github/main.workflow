workflow "Build and publish" {
  on = "push"
  resolves = [
    "publish to github pages",
    "yarn install",
  ]
}

action "yarn install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "yarn run build" {
  uses = "Borales/actions-yarn@master"
  needs = ["yarn install"]
  args = "run build"
}

action "only on master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["yarn run build"]
}

action "publish to github pages" {
  uses = "maxheld/ghpages@master"
  env = {
    BUILD_DIR = "dist/"
  }
  secrets = ["GH_PAT"]
  needs = ["only on master"]
}
