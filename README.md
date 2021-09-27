# Monster Stash
### [Deployed on Surge.sh](https://monster-stash.surge.sh/) || [Github Repository](https://github.com/Davidschlundtbodien/monster-stash)

## Abstract

 Monster Stash is a React app that interacts with the [D&D 5e api](http://www.dnd5eapi.co/docs/#intro) to display monsters for quick reference of statistics. The user can choose a challenge rating  and have a list of monsters displayed based on the selected rating. Then the user can select a monster from the list to display detailed stats of the respective monster. From here a user can choose to favorite/unfavorite this monster, which will add to/remove from a favorited list that can be accessed in the navigation bar. At the moment the favorited list utilizes Local Storage for data persistence.

### Relfection
  Working on this project was an absolute joy, however with the time allowed I felt myself cutting back my vision for the sake of meeting the cut off. That seemed more difficult with this project solely because of passion of the subject matter. Overall it was a good challenge to showcase what I've learned at Turing. 
 
### Future Additions
  - Expand statistics of the monster on info page to utilize all api data.
  - Users can build encounters with quanity of each monster for said encounter.
  - Refactor component tree of monster info
  - Build challenge rating grouping and monster filtering
 
### Wins
  - Building a 100% functional component application
  - Implementing a favoriting functionality with local storage
  - Utilizing a react router switch

### Challenges
  - Building out a product in under a week
  - Working around rigid endpoints of the api used

### Setup Instuctions
- `git clone` this repository
- `cd` into the repository in your terminal
- `npm i` to install required dependencies
- Then `npm start` in your terminal to view it on your browser

## Technologies
  - React.js
  - React Router
  - Fetch API
  - [D&D 5th Edition API](http://www.dnd5eapi.co/docs/#intro)
  - Cypress (testing)
  - Surge (deployment)


## Developer
  - [David Schlundt-Bodien](https://github.com/Davidschlundtbodien)

## Project Managers
  - [Kayla Gordon](https://github.com/kaylagordon)
  - [Scott Ertmer](https://github.com/sertmer)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
