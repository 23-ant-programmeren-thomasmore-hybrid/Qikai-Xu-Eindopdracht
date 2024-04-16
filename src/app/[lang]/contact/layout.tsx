export const metadata = {
  title: "Qikai | Contact",
  description: "The contact page of Qikai's portfolio.",
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