import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

    // console.log(this.props);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    console.log('search props: ', JSON.stringify(this.props));
    // $.ajax({
    //   url: '/repos',
    //   type: 'GET',
    //   success: (res) => {
    //     this.setState({term: res.data});
    //     console.log(res.data);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // })
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;