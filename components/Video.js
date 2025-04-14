export function Video({ src, type, caption }) {
  return <div className="flex flex-col items-center justify-center mt-4 mb-4">
    <video playsInline={true} muted loop controls>
      <source src={src} type={type} />
    </video>
    {caption && <em>{caption}</em>}
  </div>
}