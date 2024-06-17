import Hero from '@/components/Section/Hero'
import Plusservice from '@/components/Section/PlusService'
import Service from '@/components/Section/Service'
import Benefits from '@/components/Section/Benefits'
import Testimonial from '@/components/Section/Testimonial'

/**
 * Renders the Home component which displays a series of sections including a Hero, Plusservice, Service, Benefits, and Testimonial.
 *
 * @return {JSX.Element} The main component containing the sections.
 */
export default function Home() {
  return (
    <main className="w-full flex h-full flex-col p-4 gap-5">
      <Hero />
      <Plusservice />
      <Service />
      <Benefits />
      <Testimonial />
    </main>
  )
}
