Now that you've created a full react application, let's play around with it a little bit:

Note that you have a file now called my-app/src/App.js that looks a bit like this:

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Start by changing out the image:
1. grab a new image off the internet (let's call it img.png)
2. make a new directory called 'images' next to App.js and put the image in there
3. Change the `import logo from './logo.svg'` to be `import image from './images/img.png'`
4. change the `<img src={logo} ...>` so that it points to `image` instead of `logo`
5. If you no longer have `npm start` running, you'll want to run it again

Finally, go ahead and change the text on the page so it doesn't tell you to edit App.js anymore -- you've already done that!


