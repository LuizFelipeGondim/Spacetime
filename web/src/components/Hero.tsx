import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="my-4 flex flex-col items-center gap-5 space-y-5 laptop:items-start">
      <Image src={nlwLogo} alt="NLW Spacetime logo" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-center text-5xl font-bold leading-tight text-gray-50 laptop:text-left">
          Sua cápsula do tempo
        </h1>
        <p className="text-center text-lg leading-relaxed laptop:text-left">
          Colecione momentos marcantes de sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
