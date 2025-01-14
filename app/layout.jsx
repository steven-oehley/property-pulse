import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse",
  description: "Find your next dream home...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
