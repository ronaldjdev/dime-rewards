import InfoItem from "@/components/InfoItem"

interface Props {
  email: string
  joinedDate: string
  city: string
  country: string
  phone: number
  reviewText: string
}
const About = ({ email, joinedDate, city, country, phone, reviewText }: Partial<Props>) => {
  return (
    <article>
      <div className="flex items-center mb-4">
        <div className="font-medium dark:text-white">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{reviewText}</p>
          <div className="flex flex-col gap-4">
            <InfoItem label="Se unió" value={joinedDate} />
            <InfoItem label="Ciudad" value={city} />
            <InfoItem label="País" value={country} />
            <InfoItem label="Teléfono" value={phone} />
            <InfoItem label="Email" value={email} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default About;
