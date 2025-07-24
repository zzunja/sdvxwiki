import Link from "next/link";

/**
 *
 *  Button / Link component for internal or external navigation.
 *  Icons are implemented as SVGs so no additional dependencies are needed.
 *  SVGs can be found at lucide.dev.
 *
 *  @param {Object} props
 *  @param {string} props.href - The URL to navigate to when the button is clicked
 *  @param {React.ReactNode} [props.children] - Button content
 *  @param {string} [props.className] - Additional tailwind classes
 *  @param {"github" | "rocket"} [props.icon] - The icon displayed above the text
 *  @param {boolean} [props.external=false] - If true, the link will open in a new tab
 *  @param {"blue" | "sky" | "cyan"} [props.theme='blue'] - Color of the button
 */

export function Button({
  href,
  children,
  className,
  icon,
  external = false,
  theme = "blue",
}) {
  return (
    <Link
      href={href}
      className={`w-full flex flex-col gap-3 cursor-pointer py-3 px-4 rounded border
        ${
          theme === "blue" &&
          "border-blue-200/30 bg-blue-900/30 hover:bg-blue-800/30 transition-colors duration-200"
        }
        ${
          theme === "sky" &&
          "border-sky-200/30 bg-sky-900/30 hover:bg-sky-800/30 transition-colors duration-200"
        }
        ${
          theme === "cyan" &&
          "border-cyan-200/30 bg-cyan-900/30 hover:bg-cyan-800/30 transition-colors duration-200"
        }
        ${className}`}
      target={external ? "_blank" : undefined}
    >
      {icon === "github" && <Github />}
      {icon === "rocket" && <Rocket />}
      {icon === "joystick" && <Joystick />}
      {icon === "laptop" && <Laptop />}
      {icon === "appwindow" && <AppWindow />}
      {icon === "clock" && <Clock />}
      <div className="flex items-center font-medium">
        {children}
        {external && <ArrowUpRight />}
      </div>
    </Link>
  );
}

// SVGs Exports

export function Joystick() {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"/>
      <path d="M6 15v-2"/>
      <path d="M12 15V9"/>
      <circle cx="12" cy="6" r="3"/>
    </svg>
  )
}

export function Clock() {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 6v6l4 2"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
}

export function Laptop() {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2"/>
      <line x1="2" x2="22" y1="20" y2="20"/>
    </svg>
  )
}

export function AppWindow() {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M10 4v4"/><path d="M2 8h20"/>
        <path d="M6 4v4"/>
    </svg>
  )
}


export function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Rocket() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
