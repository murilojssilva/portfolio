import styled, { css } from 'styled-components'
import { ITitleContainerProps } from '@/interfaces/ITitleProps'

export const TitleContainer = styled.h1<ITitleContainerProps>`
  font-size: 1.25rem;

  background: linear-gradient(
    to right,
    ${({ type }) =>
      type === 'publications'
        ? 'var(--purple-200)'
        : type === 'experiences'
        ? 'var(--blue-200)'
        : 'var(--green-200)'},
    ${({ type }) =>
      type === 'publications'
        ? 'var(--purple-500)'
        : type === 'experiences'
        ? 'var(--blue-500)'
        : 'var(--green-300)'},
    ${({ type }) =>
      type === 'publications'
        ? 'var(--purple-700)'
        : type === 'experiences'
        ? 'var(--blue-900)'
        : 'var(--green-500)'}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
