import { Section, SectionTitleVariant } from "components/common/section"
import Image from "next/image"

import links from "data/links.json"

const HomePageHeader = () => {
  const instagramHref = links.socials.find(({ label }) => label === "Instagram")?.href

  return (
    <div className="flex flex-col w-full items-center space-y-4 md:space-y-8">
      <Image width={300} height={300} className="rounded-full w-48 md:w-96 outline outline-4 outline-primary" src="/band.jpg" alt="Band picture" />

      <Section className="flex flex-col items-center space-y-2 md:space-y-4">
        <Section.Title variant={SectionTitleVariant.Large}>
          <a href={instagramHref} target="_blank">
            @wag.mp3
          </a>
        </Section.Title>

        <span className="text-2xl lg:text-3xl text-neutral-200">Québec Cité Alt rock</span>
      </Section>
    </div>
  )
}

export default HomePageHeader
