import React, { useState, useEffect, createRef, useMemo } from 'react'
import sanitizejsx from 'sanitize-html'
import JsxParser from 'react-jsx-parser'
import styled, { css } from 'styled-components'

type StyledMarkProps = {
  bgColor?: string
  color?: string
  transition?: 'ease' | 'ease-out' | 'ease-in-out' | 'linear' | string
  duration?: number
}

const StyledMark = styled.mark<StyledMarkProps>`
  ${(props) => css`
    background-image: ${`linear-gradient(90deg, ${props.bgColor} 50%, ${props.color} 0 )`};
  `}
  background-size: 200%;
  background-position: 0;
  ${(props) => css`
    transition: all ${props.duration}s ${props.transition};
  `}
  transition: all 1s ease-out;
  color: inherit;

  &.highlighted {
    background-position: -100%;
  }
`

function useOnScreen(ref: React.RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    ref.current && observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [observer, ref])

  return isIntersecting
}

function replaceMarkers(content: string): string {
  const regexOut = /<\/mark>/gs
  const regexIn = /<mark>/gs

  let newContent = sanitizejsx(content, {
    allowedTags: false,
    allowedAttributes: false
  })
  newContent = newContent.replace(regexIn, `<Mark>`)
  newContent = newContent.replace(regexOut, '</Mark>')

  return newContent
}

type MarkProps = {
  children?: React.ReactNode
  color?: string
  bgColor?: string
  transition?: 'ease' | 'ease-out' | 'ease-in-out' | 'linear' | string
  duration?: number
}

export const Mark = ({
  children,
  bgColor = 'white',
  color = 'yellow',
  duration = 1,
  transition = 'ease'
}: MarkProps): JSX.Element => {
  const ref = createRef<HTMLElement>()
  const isVisible = useOnScreen(ref)

  return (
    <StyledMark
      ref={ref}
      className={`${isVisible && 'highlighted'}`}
      bgColor={bgColor}
      color={color}
      duration={duration}
      transition={transition}
    >
      {children}
    </StyledMark>
  )
}

type MarkStringProps = {
  jsx: string
  autoCloseVoidElements?: boolean
}

export const MarkString = ({ jsx, autoCloseVoidElements }: MarkStringProps) => {
  const [string, setString] = useState('')
  useEffect(() => {
    setString(replaceMarkers(jsx))
  }, [jsx])

  return (
    <JsxParser
      components={{ Mark }}
      jsx={string}
      autoCloseVoidElements={autoCloseVoidElements}
    />
  )
}
