A better way of building react apps is with create-react-app -- this setups babel and a bunch of other really useful things for you.
To use create-react-app, we again rely on npx and this time we're going to point it to a whole new folder

0. if you have not yet, you can hit ctrl-c in the transpiler window from before and it should exit.
1. run the following code to execute CRA (create-react-app) and get a new folder called "my-app":
npx create-react-app my-app
2. change to the my-app directory:
cd my-app
3. "start" the new react application:
npm start

The last command should start the app, open a browser, and you should see a little spinny react icon and some instructions to "Edit src/App.js" -- success!
