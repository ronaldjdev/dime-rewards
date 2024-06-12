import React, { useMemo } from 'react'

interface Props {
  title: string
  variant?: 'text' | 'outline' | 'filled'
  color?: 'green' | 'blue' | 'red' | 'white' | 'black'
  onClick?: () => void
  type?: 'button' | 'submit'
}

/**
 * Renders a customizable button component with different variants and colors.
 *
 * @param {Props} props - The props for the Button component.
 * @param {string} props.title - The title of the button.
 * @param {string} [props.variant='filled'] - The variant of the button. Options are 'text', 'outline', or 'filled'.
 * @param {string} [props.color='blue'] - The color of the button. Options are 'green', 'blue', 'red', 'white', or 'black'.
 * @param {() => void} [props.onClick] - The onClick event handler for the button.
 * @param {string} [props.type='button'] - The type of the button. Options are 'button' or 'submit'.
 * @param {...rest} props.rest - Additional props for the button.
 * @return {JSX.Element} The rendered button component.
 */
export const Button: React.FC<Props> = ({
  title,
  variant = 'filled',
  color = 'blue',
  onClick,
  type = 'button',
  ...rest
}) => {
  const baseClasses =
    'font-bold py-2 px-4 rounded-full focus:outline-none transition-colors ease-in-out delay-150 first-letter:uppercase'

  const variantClasses = useMemo(
    () => ({
      text: {
        green:
          'bg-transparent hover:bg-green-500 text-green-700 hover:text-white border border-green-500 hover:border-transparent',
        blue: 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent',
        red: 'bg-transparent hover:bg-red-500 text-red-700 hover:text-white border border-red-500 hover:border-transparent',
        white:
          'bg-transparent hover:bg-white text-white hover:text-black border border-white hover:border-transparent',
        black:
          'bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-transparent',
      },
      outline: {
        green:
          'bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white border border-green-500 hover:border-transparent',
        blue: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent',
        red: 'bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent',
        white:
          'bg-transparent hover:bg-white text-white font-semibold hover:text-black border border-white hover:border-transparent',
        black:
          'bg-transparent hover:bg-black text-black font-semibold hover:text-white border border-black hover:border-transparent',
      },
      filled: {
        green: 'bg-green-500 hover:bg-green-700 text-white',
        blue: 'bg-blue-500 hover:bg-blue-700 text-white',
        red: 'bg-red-500 hover:bg-red-700 text-white',
        white: 'bg-white hover:bg-gray-200 text-black',
        black: 'bg-black hover:bg-gray-800 text-white',
      },
    }),
    [],
  )

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant][color]}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {title}
    </button>
  )
}
