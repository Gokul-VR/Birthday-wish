import { Balloons, ConfettiTrigger } from "@/components/birthday-animations"

export default async function BirthdayPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params
  // const displayName = decodeURIComponent(name).toUpperCase()
  const decodedName = decodeURIComponent(name)
  const displayName =
    decodedName.charAt(0).toUpperCase() + decodedName.slice(1).toLowerCase()
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-radial-gradient(at_top_right,_#1a1a1a,_#000000) flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden overflow-x-hidden">
      <Balloons />
      <ConfettiTrigger />
      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6 md:gap-8 text-center">
        <div className="space-y-4 md:space-y-6">
          <h1 style={{ fontFamily: '"Marhey", sans-serif' }} className="text-[2.45rem] sm:text-8xl md:text-[8rem] font-medium tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none">
            HAPPY&nbsp;BIRTHDAY
            <br />
            <span style={{ fontFamily: '"Meow Script", cursive' }} className="text-[3.5rem] sm:text-9xl md:text-[10rem] font-medium tracking-normal text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              {displayName}
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed text-white/70 italic max-w-2xl mx-auto px-4">
            "Wishing you a day filled with laughter, love, and all your favorite things. May all your dreams come true"
          </p>
        </div>
      </div>
    </main>
  )
}
