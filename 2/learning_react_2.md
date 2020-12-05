JSX is an extension to JavaScript which lets you put your HTML directly into your JavaScript files.  

1. edit main-component.js
2. Change from:
```
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```

to 
```
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```
3. save the file

The above JSX is a bit cleaner which makes development and debugging simpler, but does require a couple extra steps so the browser can understand it.

First, we need to start the "transpiler" which converts your jsx into regular JavaScript which a browser understands:

1. install node: https://nodejs.org/en/
2. create a folder called "scripts"
3. run the following commands in a terminal from the root of your project (not the scripts folder, but the folder that contains the scripts folder): 
```
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
npx babel --watch scripts --out-dir . --presets react-app/prod
```

*note:* The last command will keep running until you close a terminal -- this is good!  It will keep "transpiling" your JSX file for you.

Now, we just need to move our JavaScript file into the `scripts` folder that we have created so that it gets transpiled.  You should see "scripts/main-component.js -> main-component.js" output from the transpiler

Refresh the page in your browser and it should still show the like button and the button should still work!
