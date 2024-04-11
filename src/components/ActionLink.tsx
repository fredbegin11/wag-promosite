import { twMerge } from "tailwind-merge"

export type ActionLinkProps = React.ComponentProps<"a">

const ActionLink = ({ className, ...rest }: ActionLinkProps) => {
  return (
    <a
      className={twMerge(
        "flex justify-between items-center border rounded-lg px-4 py-2 text-2xl transition-colors",
        "hover:text-black hover:bg-secondary",
        className
      )}
      target="_blank"
      {...rest}
    />
  )
}

export default ActionLink
