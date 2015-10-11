# AwwDiIo
[AwwDiIo](http://soundcloud.com)
[Heroku link][heroku] **NB:** This should be a link to your production site
[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PlaceHolderSoundCloud is a web application inspired by SoundCloud built using 
Ruby on Rails and React.js. It allows users to

- [ ] Create / update an account
- [ ] Log in / Log out
- [ ] Follow users
- [ ] Upload songs
- [ ] Play songs
- [ ] Like songs
- [ ] View feed from followed users
## Design Docs




* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User model (1 day)

In Phase 1, I will begin by implementing user signup, log in, and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component.

[Details][phase-one]

### Phase 2: Flux Architecture and Song CRUD (4 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a song store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Songs `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Songs can be created and played in the browser. Lastly, while constructing 
the views I will start using basic bootstrap for styling.

[Details][phase-two]

### Phase 3: Follow Users and Like Songs(3 days)

When Phase 3 is complete, Users will be able to view  other users and follow them.
Users will also be able to like songs. if things are going ahead of schedule,
Users will be able to view recent activity from their followed users.

[Details][phase-three]


### Phase 4: Styling Cleanup and Seeding (2 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 4 I will add styling flourishes. and content for a guest user to have a quick
enjoyable experience of AwwdiIo

[Details][phase-four]

### Phase 5: Implementation of additional content(4 days)

At this point in time, my clone has the bare minimum to be called a SoundCloud clone.
For the next 4 days I will add more functionality to become more like the SoundCloud platform.
in the bonus section below, I plan to add content in the order provided. Waveform visualizer, updating users
album art and avatars seem definitely within the realm of possibility if there are no major
hiccups before phase 5(done within 2 days). Tagging and comments on songs should be possible 
before the end date of the project, if that is not the case, they will be implemented outside
of the project deadline.


[Details][phase-five]

## Bonus
- [ ] Waveform visualizer
- [ ] update User
- [ ] Album art
- [ ] Avatars
- [ ] Tag songs
- [ ] Comment on songs
- [ ] Searching by song title
- [ ] search by tags
- [ ] Search for users

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase4.md
# capstone-project
