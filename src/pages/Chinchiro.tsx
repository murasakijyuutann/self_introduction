import { useState } from 'react'
import { FaDice, FaGlassWhiskey, FaInfoCircle } from 'react-icons/fa'
import { Howl } from 'howler'
import { Button } from '@/components/ui/button'

const rollSound = new Howl({
  src: ['https://cdn.pixabay.com/audio/2022/03/15/audio_48a4c74b10.mp3'],
  volume: 0.3,
})

const getRandomDice = () => Math.floor(Math.random() * 6) + 1

const roleLabel = (role: '親' | '子') => (role === '親' ? 'Oya' : 'Ko')

// =================== Game Logic (unchanged) ===================
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

  if (a === b && b === c) return a === 1 ? 'ピンゾロ！最強' : `${a}ゾロ！`
  if (sorted.toString() === '4,5,6') return 'シゴロ！'
  if (sorted.toString() === '1,2,3') return 'ヒフミ…'
  if (a === b) return `${c}の目`
  if (b === c) return `${a}の目`
  if (a === c) return `${b}の目`
  return '目なし'
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
  const [isRolling, setIsRolling] = useState(false)

  const handleChoice = (role: '親' | '子') => {
    setPlayerRole(role)
    setGameStarted(true)
  }

  const playGame = async () => {
    setWinner('')
    setMessage('')
    setShowCpuDice(false)
    setIsRolling(true)
    rollSound.play()

    const playerNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setPlayerDice(playerNew)
    setPlayerResult(getResultText(playerNew))

    setTimeout(() => setIsRolling(false), 500)

    setMessage('Opponent is rolling...')
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsRolling(true)
    rollSound.play()
    const cpuNew = [getRandomDice(), getRandomDice(), getRandomDice()]
    setCpuDice(cpuNew)
    setShowCpuDice(true)
    setCpuResult(getResultText(cpuNew))
    setMessage('')

    setTimeout(() => setIsRolling(false), 500)

    await new Promise((resolve) => setTimeout(resolve, 800))
    const playerScore = getScoreRank(playerNew)
    const cpuScore = getScoreRank(cpuNew)

    if (playerScore > cpuScore) {
      setWinner(`You win! (${roleLabel(playerRole!)})`)
    } else if (cpuScore > playerScore) {
      const cpuRole = playerRole === '親' ? '子' : '親'
      setWinner(`CPU wins! (${roleLabel(cpuRole)})`)
    } else {
      setWinner("It's a draw!")
    }
  }

  const resetGame = () => {
    setPlayerRole(null)
    setGameStarted(false)
    setPlayerDice([1, 1, 1])
    setCpuDice([1, 1, 1])
    setPlayerResult('')
    setCpuResult('')
    setWinner('')
    setMessage('')
    setShowCpuDice(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 py-10 text-center">
      <div className="w-full max-w-2xl rounded-md border border-rule bg-bg p-6 md:p-10">
        <h1 className="flex items-center justify-center gap-3 text-[28px] font-semibold tracking-[-0.01em] text-fg md:text-[36px]">
          <FaGlassWhiskey className="text-accent" aria-hidden="true" />
          Chinchirorin
          <FaDice className="text-accent" aria-hidden="true" />
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-[1.6] text-muted md:text-base">
          A traditional Japanese dice game where luck meets strategy. Choose your role and roll
          the dice to see who wins.
        </p>

        <details className="mt-4 rounded-[4px] border border-rule px-4 py-3 text-left">
          <summary className="flex cursor-pointer items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
            <FaInfoCircle aria-hidden="true" />
            Game Rules
          </summary>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-[1.6] text-muted">
            <li>
              <strong className="text-fg">ピンゾロ (Pin-zoro):</strong> Three 1s — highest rank.
            </li>
            <li>
              <strong className="text-fg">ゾロ (Zoro):</strong> Three of the same — very strong.
            </li>
            <li>
              <strong className="text-fg">シゴロ (Shigoro):</strong> 4-5-6 sequence — high rank.
            </li>
            <li>
              <strong className="text-fg">目 (Me):</strong> Two same + one different — the
              different number counts.
            </li>
            <li>
              <strong className="text-fg">ヒフミ (Hifumi):</strong> 1-2-3 sequence — lowest rank.
            </li>
            <li>
              <strong className="text-fg">目なし (Menashi):</strong> No matching — no score.
            </li>
          </ul>
        </details>

        {!gameStarted ? (
          <>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
              Choose Your Role
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button
                className="rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
                onClick={() => handleChoice('親')}
              >
                Oya (Parent)
              </Button>
              <Button
                variant="outline"
                className="rounded-[4px] border-rule font-mono text-xs uppercase tracking-[0.04em]"
                onClick={() => handleChoice('子')}
              >
                Ko (Child)
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="mt-8 inline-block rounded-[4px] border border-rule px-3 py-1 font-mono text-[11px] uppercase tracking-[0.04em] text-fg">
              You are: {playerRole === '親' ? 'Oya (Parent)' : 'Ko (Child)'}
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
              Your Dice
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {playerDice.map((num, i) => (
                <div
                  key={i}
                  className={`flex size-16 items-center justify-center rounded-[4px] border border-rule text-2xl font-semibold text-fg md:size-20 md:text-3xl ${
                    isRolling ? 'animate-pulse' : ''
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
            {playerResult && (
              <p className="mt-3 text-lg font-semibold text-fg">{playerResult}</p>
            )}

            {(showCpuDice || message) && (
              <>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                  Opponent&apos;s Dice
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-3">
                  {showCpuDice ? (
                    cpuDice.map((num, i) => (
                      <div
                        key={i}
                        className={`flex size-16 items-center justify-center rounded-[4px] border border-rule text-2xl font-semibold text-fg md:size-20 md:text-3xl ${
                          isRolling ? 'animate-pulse' : ''
                        }`}
                      >
                        {num}
                      </div>
                    ))
                  ) : (
                    <p className="animate-pulse font-mono text-sm text-muted">{message}</p>
                  )}
                </div>
                {showCpuDice && cpuResult && (
                  <p className="mt-3 text-lg font-semibold text-fg">{cpuResult}</p>
                )}
              </>
            )}

            <div className="mt-8">
              <Button
                className="rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
                onClick={playGame}
                disabled={isRolling}
              >
                {isRolling ? 'Rolling...' : 'Roll Dice'}
              </Button>
            </div>

            {winner && (
              <p
                className={`mt-6 text-2xl font-semibold ${
                  winner.includes('win') ? 'text-accent' : 'text-fg'
                }`}
              >
                {winner}
              </p>
            )}

            {winner && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="rounded-[4px] border-rule font-mono text-xs uppercase tracking-[0.04em]"
                  onClick={resetGame}
                >
                  Play Again
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
