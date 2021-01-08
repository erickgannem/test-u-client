import styled from 'styled-components'

import { colors, layout } from '../../assets/guideline'
const { dark01, light01 } = colors
const { padding15 } = layout

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${dark01};
  color: ${light01};
  padding: 0 ${padding15}px 0 ${padding15}px;
`

export { Nav }
