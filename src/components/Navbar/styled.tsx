import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { colors, layout } from '../../assets/guideline'
const { dark01, light01 } = colors
const { padding15 } = layout

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${dark01};
  color: ${light01};
  padding: ${padding15}px;
`

const Link = styled(RouterLink)`
  text-decoration: none;
  color: white;
`

export { Nav, Link }
