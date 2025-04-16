export function Image({ src, alt, className, caption }) {
  return <div className="flex flex-col items-center justify-center mt-4 mb-4">
    <img className={className || ""} src={src} alt={alt} />
    {caption && <em>{caption}</em>}
  </div>
}

export function Video({ src, caption, vertical = false, size = "max-w-2xl" }) {
  const type = `video/${src.split(".").pop()}`

  return <div className="flex flex-col items-center justify-center mt-4 mb-4">
    <video
      className={vertical ? `w-full ${size}` : ""}
      playsInline
      muted
      loop
      controls
    >
      <source src={src} type={type} />
    </video>
    {caption && <em>{caption}</em>}
  </div>
}