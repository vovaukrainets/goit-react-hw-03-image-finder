import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  state = {};

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
