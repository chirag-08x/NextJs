import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// Entry file of our application
// Whatever we place in this file, will be shared across all pages in our application
// We need to return html and body tag. We don't need to do that when we set nested layout.
// Layout component doesn't re-render when route changes.
// If we want re-render functionality, in that case we have to use template.js file
export const metadata = {
  title: "Next.js Tutorial",
  description: "Build Awesome stuff with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Must include children in our component */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
