export const metadata = {
  title: "Qikai | Home",
  description: "The home page of Qikai's portfolio.",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="">
        <body>{children}</body>
      </html>
    );
  }