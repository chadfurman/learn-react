'use strict';

const e = React.createElement;

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );

  }
}

const domContainer = document.querySelector('#main-component');
ReactDOM.render(e(MainComponent), domContainer);
