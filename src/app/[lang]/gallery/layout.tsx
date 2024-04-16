export const metadata = {
  title: "Qikai | Gallery",
  description: "The gallery page of Qikai's portfolio.",
  };

export default function Layout({
    children
  }: Readonly<{
    children: React.ReactNode
  }>) {
  return (
    <>
      <main>{children}</main>
    </>
   
  )
}
