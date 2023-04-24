import styled from 'styled-components'

export const TooltipText = styled.div`
  color: ${(props) => props.theme.colors.background};
  cursor: help;
`

export const TooltipContent = styled.div`
  position: absolute;
  visibility: hidden;
  border-radius: 6px;
  white-space: nowrap;
  &:before {
    content: '';
    position: absolute;
    transform: rotate(135deg);
    z-index: 1;
  }
  p {
    margin: 0 auto;
    padding: 5px 15px;
  }
`

export const TooltipContainer = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipContent} {
    visibility: visible;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.secundary};
  }
`
