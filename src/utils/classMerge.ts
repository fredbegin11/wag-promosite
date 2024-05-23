import classNames, { ArgumentArray } from "classnames"
import { twMerge } from "tailwind-merge"

const classMerge = (...args: ArgumentArray) => {
  return twMerge(classNames(...args))
}

export default classMerge
