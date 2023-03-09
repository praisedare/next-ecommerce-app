import Navigation from "./navigation"

const Layout = ({children}) => {
    return <div>
        <Navigation links={[
            {text: 'Home', href: '/'},
            {text: 'Products', href: '/products'},
        ]} />
        <header>
            <h1>Next Store</h1>
        </header>
        {children}
    </div>
}

export default Layout
