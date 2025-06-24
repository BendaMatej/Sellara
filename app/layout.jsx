export const metadata = {
  title: "Sellara",
  description: "Top produkty, nejlepší obchody",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
