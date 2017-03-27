import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
    //binding
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ term: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          placeholder="Get a 5 days forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.handleChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}
