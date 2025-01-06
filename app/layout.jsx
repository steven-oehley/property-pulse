import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Find your next dream home...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
