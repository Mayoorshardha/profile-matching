# Front End

## Web app for UHCS Consulting Clinic

### Installation

1. `git clone https://github.com/Usman0111/profile-matching.git`
2. `cd profile-matching`
3. `npm i`
4. `npm start`

### Branching

1. `git branch {branch-name}`
2. `git checkout {branch-name}`
3. `git push --set-upstream origin {branch-name}`

### Workflow

1. `git checkout {branch-name}`
2. `git add .`
3. `git commit -m {message}`
4. `git push`

> Your changes would be merged to master once you are done with the feature.

### Merging lastest changes

1. `git checkout master`
2. `git pull`
3. `git checkout {branch-name}`
4. `git merge master`

## Important Note

> Please do not push to master branch. Make sure you are on your own branch before comitting any changes. Only checkout to master for pulling and merging changes.

## File structure

> Website is divided into pages and components. Each page/component has a folder with js and css files.

## Tech Stack

- React
- Formik/Hooks/ReactQuery
- Material-UI or Smantic
