import "./globals.css";

export const metadata = {
  title: "Learning React",
  description: "Learning React and Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
