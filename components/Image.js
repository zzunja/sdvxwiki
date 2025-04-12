// utility for inserting centered images
export function Image({ src, alt, className, caption }) {
  return <div className="flex flex-col items-center justify-center mt-4 mb-4">
    <img className={className || ""} src={src} alt={alt} />
    {caption && <em>{caption}</em>}
  </div>
}