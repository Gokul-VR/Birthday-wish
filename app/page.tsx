import { Balloons, ConfettiTrigger } from "@/components/birthday-animations"

export default function DefaultBirthdayPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-radial-gradient(at_top_right,_#1a1a1a,_#000000) flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden overflow-x-hidden">
      <Balloons />
      <ConfettiTrigger />

      <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-primary/5 -skew-y-3 z-0" />

      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6 md:gap-8 text-center">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-none">
            HAPPY
            <br />
            BIRTHDAY
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed text-white/70 italic max-w-2xl mx-auto px-4">
            "Wishing you a day filled with laughter, love, and all your favorite things. May all your dreams come true"
          </p>
        </div>
      </div>
    </main>
  )
}
