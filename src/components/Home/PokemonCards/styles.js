import styled from 'styled-components'

const CardImageContainer = styled.div`
  height: 110px;
  margin: 6px;
  background: #ffffff;
  display: block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
`

export const StyledImg = styled.img`
  object-fit: cover;
  margin: 0 6px;
  border: 6px solid #ffffff;
`

export const ModalContainer = styled.div`
  width: 184px;
  height: 257px;
  border: 6px solid #3d7dca;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.9);
`

export const ChipContainer = styled.div`
  margin: 0 6px 6px 0;
`

export default CardImageContainer
