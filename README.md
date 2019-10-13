# React_Build_System
This Project contains the comaplte configuration for React Build.<br/>
1. Compiling .scss file to .css with watch mode.<br/>
2. Coverage report<br/>
3. Test cases.<br/>
4. Minmap generation for debuging.<br/>
5. Hot loader.<br/>
6. Webpack configuration.<br/>

# Commands
1. REACT_WEPACK_COMPLTE_WITH_TESTCASE<br/>
Use below commands to execute tasks.<br/><br/>
  "build-css": "node-sass-chokidar src/ -o src/",<br/>
  "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive --usePolling --polling-interval 1000",<br/>
  "clean": "rimraf dist",<br/>
  "start-js": "webpack-dev-server --open --mode development",<br/>
  "build-js": "npm run clean && webpack -p",<br/>
  "build": "npm-run-all build-css build-js",<br/>
  "start": "npm-run-all -p watch-css start-js",<br/>
  "test": "jest --config jest.config.js",<br/>
  "test:coverage": "jest --coverage --config jest.config.js",<br/>
  "test:watchAll": "jest --watchAll",<br/>
  "test:update": "jest --updateSnapshot"<br/>

2. REACT_WEBPACK_COMPLETE_SETUP_BASICS<br/>
Use below commands to execute tasks.<br/><br/>
 "build": "npx webpack --env.NODE_ENV=production",<br/>
 "server": "webpack-dev-server --env.NODE_ENV=development"
