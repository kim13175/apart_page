import NavigateBar from "./NavigateBar"
import Footer from "./Footer"

const Layout = ({ children, navItems }) => {
    return (
        <div className="min-h-screen">
            <NavigateBar navItems={navItems}/>
            <main className="mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout