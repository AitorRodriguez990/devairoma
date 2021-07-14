import Header from '../header'
import Footer from '../footer'

export default function Layout({children}) {
  return (
    <div className="page">
      <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}
