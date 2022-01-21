import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`

export const RuleContainer = styled.img`
  height: 300px;
  width: 300 px;
  //   padding-left: 10px;
  //   padding-right: 10px;
  //   margin-bottom: 50px;
  //   @media screen and (min-width: 768px) {
  //     width: 48%;
  //     margin-top: 5px;
  //     margin-bottom: 20px;
  //   }
`
export const RuleDiv = styled.div`
  background-color: #ffffff;
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
