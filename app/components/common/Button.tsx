interface ButtonProps {
    onClick?: () => void;
    text: string;
}


const Button: React.FC<ButtonProps> = ({onClick, text}) => {
  return (
    <button onClick={onClick} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800}`}>{text}</button>
  )
}

export default Button;