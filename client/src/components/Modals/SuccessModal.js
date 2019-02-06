import React from "react"
import Modal from "react-modal"
import { Icon, Button } from "semantic-ui-react"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const SuccessModal = props => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <div className="modalContainer">
          <p className="closeP" onClick={props.closeModal}>x</p>
          <br />
          <p className="modalHeader">Success!</p>
          <div className="modalBlurb">
          <h4><span className="boldSubHeadings">Redeemed: </span>{props.qty} {props.colour} AirBud(s) </h4>
          <h4><span className="boldSubHeadings">Current Balance: </span>{props.balance} points</h4>
          <br />
          <p>Do you want to redeem another AirBud?</p>
          </div>
          <br />
         
          <Button
            className="modalBtn"
            onClick={props.negativeHandler}
            color="red"
            animated='vertical'>
            <Button.Content visible>Log Out</Button.Content>
            <Button.Content hidden>
              <Icon name="user times" />
            </Button.Content>
          </Button>

          <Button 
            className="modalBtn"
            onClick={props.positiveHandler}
            color="blue"
            animated='vertical'>
            <Button.Content visible>Redeem Another</Button.Content>
            <Button.Content hidden>
              <Icon name="check" />
            </Button.Content>
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default SuccessModal