import InfoItem from '@/components/InfoItem'

interface Props {
  email: string
  joinedDate: string
  city: string
  country: string
  phone: string
  reviewText: string
}

/**
 * Renders the About section with user information.
 *
 * @param {string} email - The user's email.
 * @param {string} joinedDate - The date the user joined.
 * @param {string} city - The user's city.
 * @param {string} country - The user's country.
 * @param {number} phone - The user's phone number.
 * @param {string} reviewText - The review text for the user.
 * @return {JSX.Element} The rendered About section.
 */

const About: React.FC<Partial<Props>> = ({
  email,
  joinedDate,
  city,
  country,
  phone,
  reviewText,
}) => {
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
  )
}

export default About
