import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import exampleData from '.../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      top25: [],
      username: ''
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.repos);
  }

  addUser (event) {
    event.preventDefault();
    Axios.post('/repos', {
      name: this.state.name
    })
      .then(res => {
        console.log('res in addUser: ', res);
        // this.getAllMethod() <---- need to create get all
      })
      .catch(err => {
        console.error(err);
      })
  }

  search (term) {
    console.log(`${term} was searched`);
    // get input from field after submit and add to state
    event.preventDefault(); // do I need this?
    this.setState({username: term});
    console.log('username from search: ', this.state.username);
    this.getUser();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));