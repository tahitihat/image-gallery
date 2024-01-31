# image-gallery

## Project reqs

### Functional project requirements

- View full image gallery on single-page
  - raw image
  - thumbs up and thumbs down counts
- Apply thumbs-up to single image (any number of times)
- Apply thumbs-down to single image (any number of times)

### Nonfunctional project requirements

- React frontend
- Images served via REST API
- Thorough unit testing across stack
- Containerized via Docker
- Runs on any operating system

## TODO

[1 hour]

- [ ] init React client (create-react-app)
- [ ] basic React components — render photos stored in frontend
- [ ] unit tests for React components
- [ ] build up/down interaction locally in state

[1 hour]

- [ ] init Flask API
- [ ] implement /get_photos, /up_photo, /down_photo
- [ ] unit test /get_photos, /up_photo, /down_photo
- [ ] SQLite photo db?

[1 hour]

- [ ] Containerize client
- [ ] Containerize server
- [ ] client-server communication in docker containers

[1 hour]

- [ ] Complete and polish documentation
- [ ] Choose a fun/thematic collection of photos
- [ ] Styling/CSS on frontend
