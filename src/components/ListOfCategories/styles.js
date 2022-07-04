import styled, { css } from 'styled-components'
import { moveIn } from '../../styles/animations'

export const List = styled.ul`
 display: flex;
 overflow: scroll;
 width: 100%;
 ${props => props.fixed && css`
    ${moveIn}
    background: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    rigth: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
    left: 0;
 `}
`

export const Item = styled.li`
  padding: 0 8px;
`
