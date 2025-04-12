// utility for inserting centered images
export function Image({ src, alt, className }) {
  return <div className="flex items-center justify-center mt-4 mb-4">
    <img className={className || ""} src={src} alt={alt} />
  </div>
}