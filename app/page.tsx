import Link from 'next/link'
import CountdownTimer from '../components/CountdownTimer'
import Confetti from '../components/Confetti'
import Fireworks from '../components/Fireworks'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Confetti />
      <Fireworks />
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Countdown to Ammu&apos;s Birthday!
      </h1>
      <CountdownTimer />
      <Link href="/welcome" className="mt-12 px-6 py-3 bg-pink-500 text-white rounded-full text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
        Let&apos;s Celebrate!
      </Link>
    </main>
  )
}

