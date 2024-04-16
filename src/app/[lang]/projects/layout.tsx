export const metadata = {
  title: "Qikai | Projects",
  description: "The projects page of Qikai's portfolio.",
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
