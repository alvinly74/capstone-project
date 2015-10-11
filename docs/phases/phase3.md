# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
*Follows
*Likes

### Controllers
* Api::Follow (create, destroy, index)
* Api::Likes (create, destroy, index)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* FollowUserIndex
  - FollowUserIndexItem
* LikedSongsIndex
  - LikedSongsIndexItem

### Stores


### Actions
* ApiActions.receiveLikedSongs
* ApiActions.receiveFollowerSongs
* ApiActions.deleteLikedSong
* ApiActions.deleteFollwer

### ApiUtil
* ApiUtil.fetchLikedSongs
* ApiUtil.fetchFollowerSongs
* ApiUtil.createFollowUser
* ApiUtil.createLikeSong

## Gems/Libraries
