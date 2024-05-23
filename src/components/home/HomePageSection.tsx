import { LinkIcon } from "components/common/icons"
import { Section } from "components/common/section"
import { LinkType } from "data/links"

export type HomePageSectionProps = {
  title: string
  links?: LinkType[]
  children?: React.ReactNode
}

const HomePageSection = ({ title, links, children }: HomePageSectionProps) => {
  return (
    <Section>
      <Section.Title>{title}</Section.Title>

      {children}

      {links?.map(({ href, label }) => (
        <Section.ActionLink key={label} href={href}>
          {label}
          <LinkIcon className="ml-2 mb-1" width={16} height={16} />
        </Section.ActionLink>
      ))}
    </Section>
  )
}

export default HomePageSection
