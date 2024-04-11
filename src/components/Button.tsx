import { twMerge } from "tailwind-merge"

export type ButtonProps = React.ComponentProps<"button">

const Button = ({ className, ...rest }: ButtonProps) => {
  return <button className={twMerge("border rounded-lg p-2 text-lg", className)} {...rest} />
}

export default Button
