export const metadata = {
  title: "Qikai | Other",
  description: "The other page with projects of Qikai's portfolio.",
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
