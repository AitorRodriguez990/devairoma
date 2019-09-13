export const Footer = () => {
  const currentDate = new Date().getFullYear()

  return (
    <footer className="da-Footer">&copy; {currentDate}</footer>
  )
}
