import { keyframes, css } from 'styled-components'

export const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// 💫 Reusable animated gradient CSS
export const animatedGradient = css`
  background: linear-gradient(135deg, #40e0d0, #764ba2, #ff66cc);
  background-size: 300% 300%;
  animation: ${gradientShift} 10s ease infinite;
  color: #fff;
`
