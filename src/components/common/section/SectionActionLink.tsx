import { classMerge } from "utils"

export type SectionActionLinkProps = React.ComponentProps<"a">

const SectionActionLink = ({ className, ...rest }: SectionActionLinkProps) => {
  return (
    <a
      className={classMerge(
        "flex justify-between items-center border rounded-lg px-4 py-2 text-2xl transition-colors",
        "hover:text-black hover:bg-secondary",
        className
      )}
      target="_blank"
      {...rest}
    />
  )
}

export default SectionActionLink
