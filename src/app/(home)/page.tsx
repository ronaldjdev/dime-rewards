import Hero from '@/components/Section/Hero'
import Service from '@/components/Section/Service'
import Benefits from '@/components/Section/Benefits'
import Testimonial from '@/components/Section/Testimonial'

export default function Home() {
  return (
    <main className="w-full flex h-full flex-col p-4 gap-5">
      <Hero />
      <Service />
      <Benefits />
      <Testimonial />
    </main>
  )
}
