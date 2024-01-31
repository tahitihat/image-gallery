# image-gallery

ID: Adobe Take-home assignment for full stack role on Evaluation Science Team

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
- Written in javascript; Flow used for light typing
- ESlint linter
- Icons from [Material UI](https://mui.com/material-ui/icons/)

Run dev server locally:

```
cd gallery-client
npm start
```

Run [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) unit tests locally:

```
cd gallery-client
npm test
```

### Backend

- Python Flask REST API
- Images simply stored on disk/in backend filesystem
- Tree assets downloaded from [Unsplash](https://unsplash.com/s/photos/trees)

Run dev server locally:

```
cd gallery-server
python -m venv venv
source venv/bin/activate
pip install flask
python image-server.py
```

## TODO

- [x] init React client (create-react-app)
- [x] basic React components — render photos stored in frontend
- [x] unit tests for React components
- [x] build up/down interaction locally in state
- [x] Choose a fun/thematic collection of photos
- [x] init Flask API
- [x] implement /get_photos endpoint
- [x] Complete and polish documentation

Remaining task list — would have implemented with additional time (ranked in priority order):

- [ ] Render fallback if image fails to load
- [ ] implement /up_photo, /down_photo endpoints and persist up/down likes in SQLite
- [ ] Better styling/CSS on frontend
- [ ] Add accessibility support to frontend (a11y)
- [ ] Productionize Flask server with WSGI
