"use client"

import links from "data/links.json"
import { Layout } from "components/common"
import { HomePageSection, HomePageHeader } from "components/home"
import { useLayoutEffect, useRef, useState } from "react"
import useResizeRatio from "hooks/useResizeRatio"

const Home = () => {
  const ref = useRef<HTMLIFrameElement>(null)

  useResizeRatio(ref, 16, 9)

  return (
    <Layout>
      <HomePageHeader />

      <div className="flex justify-center items-center">
        <iframe
          ref={ref}
          width="100%"
          height="320"
          src="https://www.youtube.com/embed/NL05b33OoOg?si=rkx0Ge-dZEEdPlN3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <HomePageSection title="Music" links={links.daggy} />
      <HomePageSection title="Socials" links={links.socials} />
      <HomePageSection title="Booking">
        <p className="text-xl">Pour le booking, nous écrire via Facebook, Instagram or par e-mail à wag.mp3@gmail.com</p>
        <p className="text-xl">For booking inquiries, contact us via Facebook, Instagram or by Email at wag.mp3@gmail.com</p>
      </HomePageSection>
    </Layout>
  )
}

export default Home
