import Image from "next/image"
import { ActionLink } from "@/components"
import links from "@/data/links.json"
import { LinkIcon } from "@/components/icons"
import { twMerge } from "tailwind-merge"

const Home = () => {
  const instagramHref = links.socials.find(({ label }) => label === "Instagram")?.href

  return (
    <main className="flex min-h-screen bg-daggy bg-center bg-cover">
      <div className="flex justify-center min-h-screen items-center w-full bg-[rgb(0,0,0,0.85)]">
        <div
          className={twMerge(
            "flex flex-col justify-center w-full p-12 max-w-[1280px] space-y-8 items-center",
            "md:flex-row md:justify-between md:space-y-0 md:space-x-12 lg:space-x-24 md:px-12 lg:px-24"
          )}
        >
          <div className="flex flex-col w-full items-center space-y-4 md:space-y-8">
            <Image
              className="rounded-full w-48 md:w-[80%] outline outline-4 outline-primary"
              src="/band.jpg"
              alt="Band picture"
              width={750}
              height={750}
            />

            <div className="flex flex-col items-center space-y-2 md:space-y-4">
              <a href={instagramHref} className="text-5xl lg:text-7xl underline decoration-secondary" target="_blank">
                @wag.mp3
              </a>
              <span className="text-2xl lg:text-3xl text-neutral-200">Québec Cité Alt rock</span>
            </div>
          </div>

          <div className="flex flex-col w-full space-y-8">
            {Object.entries(links).map(([key, link]) => (
              <section key={key} className="space-y-4">
                <span className="text-3xl lg:text-4xl underline decoration-secondary">{key}</span>

                {link.map(({ href, label }) => (
                  <ActionLink key={label} href={href}>
                    {label}
                    <LinkIcon className="ml-2 mb-1" width={16} height={16} />
                  </ActionLink>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
