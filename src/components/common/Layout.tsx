type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <main className="bg-daggy bg-center bg-cover">
    <div className="min-h-screen w-full flex justify-center items-center bg-[rgb(0,0,0,0.85)]">
      <div className="flex flex-col w-full px-8 py-12 max-w-[800px] space-y-12">{children}</div>
    </div>
  </main>
)

export default Layout
