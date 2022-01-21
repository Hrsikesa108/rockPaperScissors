import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'
import {
  CustomButton,
  ModalContainer,
  CloseButton,
  RuleContainer,
  RuleDiv,
} from './styledComponents'

const imageUrl =
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png'

const PopupComponent = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <CustomButton type="button" color="#223a5f" bgColor="#ffffff">
          Rules
        </CustomButton>
      }
      className="popup-content"
    >
      {close => (
        <ModalContainer>
          <RuleDiv>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <RiCloseLine size={20} color="#231f20" />
            </CloseButton>
            <RuleContainer alt="rules" src={imageUrl} />
          </RuleDiv>
        </ModalContainer>
      )}
    </Popup>
  </div>
)

export default PopupComponent
