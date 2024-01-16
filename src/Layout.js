import Headers from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import BasicExample from './Navigation';

const Layout = () => {

    return (
        <>
            <header>
                <Headers />
                <BasicExample />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>


        </>

    )

}
export default Layout;