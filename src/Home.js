import React from 'react';

const HomeContext = React.createContext();

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.value = {
      foo: 'fooVal',
      bar: 'barVal'
    }
  }

  render() {
    return (
      <div>
        <HomeContext.Provider value={this.value}>
          <h2>Core and Extension</h2>
          {this.props.children}
        </HomeContext.Provider>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <HomeContext.Consumer>
        {({foo }) => (

          <div>
            <div>{this.props.extensionProp}</div>
            <p>Header {foo}</p>
            {this.props.children}
          </div>
        )}
      </HomeContext.Consumer>
    );
  }
}

class Body extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <HomeContext.Consumer>
        {({bar }) => (

          <div>
            <p>Body { bar }</p>
            {this.props.children}
          </div>
        )}
      </HomeContext.Consumer>
    );
  }
}

Home.Header = Header;
Home.Body = Body;

export default Home;