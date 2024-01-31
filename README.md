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

## App notes and setup instructions

### Frontend

- React client initialized with [Create React App](https://github.com/facebook/create-react-app)
- React Flow for light typing
- ESlint linter
- Icons from [Material UI](https://mui.com/material-ui/icons/)

Run dev server locally:

```
cd gallery-frontend
npm start
```

## TODO

[1 hour]

- [x] init React client (create-react-app)
- [x] basic React components — render photos stored in frontend
- [ ] unit tests for React components
- [x] build up/down interaction locally in state

[1 hour]

- [ ] init Flask API
- [ ] implement /get_photos, /up_photo, /down_photo
- [ ] unit test /get_photos, /up_photo, /down_photo
- [ ] SQLite photo db?

[1 hour]

- [ ] Containerize client
- [ ] Containerize server
- [ ] client-server communication in docker containers
- [ ] "Productionize" build to whatever extent time allows

[1 hour]

- [ ] Complete and polish documentation
- [ ] Choose a fun/thematic collection of photos
- [ ] Styling/CSS on frontend
- [ ] Update favicon
- [ ] Accessibility support?
- [ ] PropTypes in React code
- [ ] Check Flow
