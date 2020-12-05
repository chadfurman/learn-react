JSX is an extension to JavaScript which lets you put your HTML directly into your JavaScript files.  
This makes development and debugging simpler, but does require a couple extra steps.

First, we need to start the "transpiler" which converts your jsx into regular JavaScript which a browser understands:
1. install node: https://nodejs.org/en/
2. create a folder called "scripts"
3. run the following command in a terminal: 
- npx babel --watch scripts --out-dir . --presets react-app/prod
*note:* The command will keep running until you close a terminal -- this is good!  It will keep "transpiling" your JSX file for you.

Next, we need to move our JavaScript file into the `scripts` folder that we have created so that it gets transpiled

Finally, make sure the script tag in your html file points to the transpiled output

