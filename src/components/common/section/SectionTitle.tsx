import { classMerge } from "utils"

export enum SectionTitleVariant {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

type SectionTitleProps = {
  variant?: SectionTitleVariant
} & React.ComponentProps<"span">

const SectionTitle = ({ className, variant = SectionTitleVariant.Medium, ...rest }: SectionTitleProps) => (
  <span
    className={classMerge(
      "underline decoration-secondary",
      {
        "text-xl lg:text-2xl": variant === SectionTitleVariant.Small,
        "text-3xl lg:text-4xl": variant === SectionTitleVariant.Medium,
        "text-5xl lg:text-7xl": variant === SectionTitleVariant.Large,
      },
      className
    )}
    {...rest}
  />
)

export default SectionTitle
