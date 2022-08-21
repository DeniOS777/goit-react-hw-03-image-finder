import React, { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Backdrop>
        <ModalWindow>
          <img src="" alt="" />
        </ModalWindow>
      </Backdrop>
    );
  }
}
