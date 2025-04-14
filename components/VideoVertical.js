export function VideoVertical({ src, types, caption, size = "max-w-2xl" }) {
  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-4">
      <video 
        className={`w-full ${size}`} 
        playsInline 
        muted 
        loop 
        controls
      >
        <source src={src} type={types} />
      </video>
      {caption && <em>{caption}</em>}
    </div>
  );
}
