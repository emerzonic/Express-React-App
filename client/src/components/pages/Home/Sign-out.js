
    import React from 'react';
    import {
        Component
    } from 'react';
    import Modal from 'react-modal';
     
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '5% 10%'
      }
    };
 
    Modal.setAppElement('body')
     
    class Signout extends Component  {
      constructor(props) {
        super(props);
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
          
      closeModal(e) {
        let action = e.target.getAttribute('data-id')
        this.props.handleUserSignout(action)
        this.setState({modalIsOpen: false});
      }

      componentDidMount() {
        this.openModal()
      }
     
      render() {
        return (
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Attention!</h2>
           
            <div>
            <div className="image content">
            <div className="description">
              <div className="ui header">Are you sure you want to sign out?</div>
            </div>
          </div>
          <div className="actions">
            <div data-id="deny" className="ui black deny button"  onClick={this.closeModal}>
            No, Return
            </div>
            <div data-id="positive" className="ui positive right labeled icon button" onClick={this.closeModal}>
             Click to Signout
              <i className="checkmark icon"></i>
            </div>
          </div>
          </div>
          </Modal>
        );
      }
    }

 
export default Signout;


