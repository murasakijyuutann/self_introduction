import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { animatedGradient } from '../styles/AnimatedBackground';
import { motion } from 'framer-motion'
import { FaDice, FaGlassWhiskey } from 'react-icons/fa'
import { Howl } from 'howler'

// 🎵 Dice roll sound
const rollSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/03/15/audio_48a4c74b10.mp3'],
  volume: 0.3,
})

// 💫 Fade-in animation for CPU dice
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.7) rotate(180deg); }
  to { opacity: 1; transform: scale(1) rotate(0deg); }
`

// 💅 Styled Components
// background: linear-gradient(135deg, #40e0d0 0%, #ff66cc 100%); // Miku teal to pink
const Wrapper = styled.div`
  min-height: 100vh;
  ${animatedGradient};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
`

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 2rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
`

const DiceArea = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 1rem 0;
`

const Dice = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`

const CpuDice = styled(Dice)`
  animation: ${fadeIn} 0.6s ease forwards;
`

const Button = styled.button`
  background: #fff;
  color: #ff66cc;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.05);
    background: #ffe6f2;
  }
`

const ResultText = styled.div`
  font-size: 1.6rem;
  margin-top: 1.5rem;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`

const ChoiceArea = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`

const getRandomDice = () => Math.floor(Math.random() * 6) + 1

// =================== Game Logic ===================
const getScoreRank = (d: number[]): number => {
  const sorted = [...d].sort()
  const [a, b, c] = sorted

  if (a === b && b === c) return a === 1 ? 100 : 90 + a
  if (sorted.toString() === '4,5,6') return 80
  if (sorted.toString() === '1,2,3') return 10
  if (a === b) return 20 + c
  if (b === c) return 20 + a
  if (a === c) return 20 + b
  return 0
}

const getResultText = (d: number[]): string => {
  const sorted = [...d].sort()
  const [a, b, c] = sorted

  if (a === b && b === c) return a === 1 ? 'ピンゾロ！最強💥' : `${a}ゾロ！🔥`
  if (sorted.toString() === '4,5,6') return 'シゴロ！✨'
  if (sorted.toString() === '1,2,3') return 'ヒフミ…💀'
  if (a === b) return `${c}の目`
  if (b === c) return `${a}の目`
  if (a === c) return `${b}の目`
  return '目なし🎲'
}

// =================== Component ===================
export const ChinchiroGame: React.FC = () => {
  const [playerRole, setPlayerRole] = useState<'親' | '子' | null>(null)
  const [playerDice, setPlayerDice] = useState<number[]>([1, 1, 1])
  const [cpuDice, setCpuDice] = useState<number[]>([1, 1, 1])
  const [playerResult, setPlayerResult] = useState<string>('')
  const [cpuResult, setCpuResult] = useState<string>('')
  const [winner, setWinner] = useState<string>('')
  const [gameStarted, setGameStarted] = useState(false)
  const [message, setMessage] = useState<string>('')
  const [showCpuDice, setShowCpuDice] = useState<boolean>(false)

  const handleChoice = (role: '親' | '子') => {
    setPlayerRole(role)
    setGameStarted(true)
  }

  const playGame = async () => {
    setWinner('')
    setMessage('')
    setShowCpuDice(false)
    rollSound.play()

    // 🎲 Player rolls first
    const playerNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setPlayerDice(playerNew)
    setPlayerResult(getResultText(playerNew))

    // ⏳ Wait for CPU turn
    setMessage('相手のターンを待っています…')
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // 🎲 CPU rolls
    rollSound.play()
    const cpuNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setCpuDice(cpuNew)
    setShowCpuDice(true)
    setCpuResult(getResultText(cpuNew))
    setMessage('')

    // 🧠 Judge
    const playerScore = getScoreRank(playerNew)
    const cpuScore = getScoreRank(cpuNew)

    if (playerScore > cpuScore) {
      setWinner(`🎉 ${playerRole}（あなた）の勝ち！`)
    } else if (cpuScore > playerScore) {
      const cpuRole = playerRole === '親' ? '子' : '親'
      setWinner(`💀 ${cpuRole}（CPU）の勝ち！`)
    } else {
      setWinner('🤝 引き分け！')
    }
  }

  return (
    <Wrapper>
      <Title><FaGlassWhiskey /> チンチロリン 親 vs 子 <FaDice /></Title>

      {!gameStarted ? (
        <>
          <h2>どちらの立場で勝負する？</h2>
          <ChoiceArea>
            <Button onClick={() => handleChoice('親')}>👑 親になる</Button>
            <Button onClick={() => handleChoice('子')}>🧒 子になる</Button>
          </ChoiceArea>
        </>
      ) : (
        <>
          <SectionTitle>あなたは {playerRole} です！</SectionTitle>

          <SectionTitle>🎲 あなたの出目</SectionTitle>
          <DiceArea>
            {playerDice.map((num, i) => (
              <Dice key={i} animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                {num}
              </Dice>
            ))}
          </DiceArea>
          <ResultText>{playerResult}</ResultText>

       {(showCpuDice || message) && (
  <>
    <SectionTitle>💻 相手の出目</SectionTitle>
    <DiceArea>
      {showCpuDice ? (
        cpuDice.map((num, i) => (
          <CpuDice
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {num}
          </CpuDice>
        ))
      ) : (
        <ResultText style={{ opacity: 0.8 }}>
          {message || '相手のターンを待っています…'}
        </ResultText>
      )}
    </DiceArea>
    {showCpuDice && <ResultText>{cpuResult}</ResultText>}
  </>
)}


          <Button onClick={playGame}>🎲 勝負する！</Button>

          <ResultText style={{ fontSize: '2rem', marginTop: '2rem' }}>
            {winner}
          </ResultText>

          <Button onClick={() => window.location.reload()}>🔁 もう一度プレイ</Button>
        </>
      )}
    </Wrapper>
  )
}
