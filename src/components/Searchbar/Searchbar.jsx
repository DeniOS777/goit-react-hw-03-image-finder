import React, { Component } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Box } from '../Box';
import { Form, Input, Button } from './Searchbar.styled';

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
      <Box
        as="header"
        bg="blue"
        p={2}
        mb={2}
        display="flex"
        justifyContent="center"
      >
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <IoSearchOutline />
          </Button>

          <Input
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Box>
    );
  }
}
