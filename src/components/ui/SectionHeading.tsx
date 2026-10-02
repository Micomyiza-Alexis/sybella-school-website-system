interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use on navy backgrounds */
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const center = align === "center";

  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-[0.95rem] font-semibold ${
            center ? "justify-center" : ""
          } ${light ? "text-accent" : "text-primary"}`}
        >
          <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-[3.25rem] ${
          light ? "text-white" : "text-primary-dark"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-white/75" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}