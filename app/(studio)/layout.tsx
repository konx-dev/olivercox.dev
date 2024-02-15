export const metadata = {
  title: 'Next.js',
  description: 'Admin area for olivercox.dev - built with sanity studio'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
