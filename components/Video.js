export function Video({ src, types, caption }) {
  return <div className="flex flex-col items-center justify-center mt-4 mb-4">
    <video playsInline={true} muted loop controls>
      <source src={src} types={types} />
    </video>
    {caption && <em>{caption}</em>}
  </div>
}