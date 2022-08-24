import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';

import { Box } from '../Box';
import { Form, Input, Button } from './Searchbar.styled';

export class Searchbar extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

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
      <Box
        as="header"
        position="fixed"
        display="flex"
        justifyContent="center"
        p={2}
        width="100%"
        bg="blue"
      >
        <Form onSubmit={this.handleSubmit}>
          <Input
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit" aria-label="search button">
            <IoSearchOutline />
          </Button>
        </Form>
      </Box>
    );
  }
}
