import React, { Component } from 'react';
import { Box } from '../Box';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => this.setState({ searchQuery: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Box as="header" bg="blue" p={2} display="flex" justifyContent="center">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </Box>
    );
  }
}
