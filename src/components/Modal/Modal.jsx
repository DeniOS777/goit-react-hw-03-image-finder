import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const refModalRoot = document.querySelector('#root-modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressEscape);
  }

  handlePressEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tag } = this.props;

    return createPortal(
      <Backdrop onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={largeImage} alt={tag} />
        </ModalWindow>
      </Backdrop>,
      refModalRoot
    );
  }
}
