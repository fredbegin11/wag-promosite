import { RefObject, useLayoutEffect } from "react"

const useResizeRatio = (ref: RefObject<HTMLElement>, widthRatio: number, heightRatio: number) => {
  useLayoutEffect(() => {
    const handleResize = () => {
      const width = ref.current?.getBoundingClientRect().width
      if (width) ref.current.setAttribute("height", (width * (heightRatio / widthRatio)).toFixed(0))
    }

    if (document.readyState !== "loading") {
      handleResize()
    } else {
      window.addEventListener("DOMContentLoaded", handleResize)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.addEventListener("DOMContentLoaded", handleResize)
    }
  }, [widthRatio, heightRatio, ref])
}

export default useResizeRatio
