import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { colors, layout } from '../../assets/guideline'
const { dark01, light01, greenAccent } = colors
const { padding20 } = layout

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${dark01};
  color: ${light01};
`

type CustomProps = {
  isselected: string
}
export const Link = styled(RouterLink)<CustomProps>`
  text-decoration: none;
  color: white;
  border-bottom: ${props => (props.isselected === 'true') ? `5px solid ${greenAccent}` : '0'};
  padding: ${padding20}px;
`
