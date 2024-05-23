import { classMerge } from "utils"
import SectionActionLink from "./SectionActionLink"
import SectionTitle from "./SectionTitle"

const Section = ({ className, ...rest }: React.ComponentProps<"section">) => {
  return <section className={classMerge("flex flex-col space-y-4", className)} {...rest} />
}

Section.Title = SectionTitle
Section.ActionLink = SectionActionLink

export default Section
