# Pomodoro-React

This was a solo project carried out from the 23th to the 29th of April 2021 as part of the BeCode Liège's Junior Web Developer program. We were tasked to make a Pomodoro app using React.

## Mission objectives

- Display a big timer (minutes and seconds)
- Four buttons:
  - plus (+) and minus (-), they will allow the user to adjust the minutes counter - only when it's stopped.
  - start, to run the timer (it will then change to stop), to serve as a toggle button
  - reset, to… reset the timer to its original value
- At the end of the timer, show a modal to invite user to take a break. The modal will have two buttons:
  - One to close the modal
  - Another to close the modal and start a new timer


## Learning objectives

- [ ]  How to set up a React app

### Tech

- React (+ [React-modal](https://www.npmjs.com/package/react-modal))
- Webpack
- CSS
- Deployment on Netlify

## My method

I boostraped the project using webpack. I chose not to include the modal mentioned in the mission objectives but rather add one to display the settings. I tweaked the project a bit. I added a long break and a pomodoro cycle. By default, on start the timer will start. After 25 minutes of session time a 5 minutes break time will follow. After 4 sessions a 15 minutes long break will follow then the whole process will restart.

## Deployed on Netlify:

### [Here!](https://charlotte-pomodoro.netlify.app/)