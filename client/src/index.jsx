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
      // top25: [],
      // username: ''
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.repos);
  }

  // addUser (event) {
  //   event.preventDefault();
  //   Axios.post('/repos', {
  //     name: this.state.name
  //   })
  //     .then(res => {
  //       console.log('res in addUser: ', res);
  //       // this.getAllMethod() <---- need to create get all
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }

  // getUserRepo () {
  //   let username = this.state.username;
  //   Axios.get(`http://localhost:1128/repos/${username}`)
  //     .then(res => {
  //       this.setState({username: res.data.username}, () => {
  //         console.log(this.state.username);
  //       })
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: '{term}',
      dataType: "json",
      success: (res) => {
        // this.setState({repos: res.data});
        console.log('res.data: ', res.data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));