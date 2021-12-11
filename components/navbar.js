import Link from "next/link"
export default function Navbar(){
    return(
        <header className="header">
            <nav className="navbar">
                <Link href="/"><a className="nav-logo">Wykresy wykresiki</a></Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">O stronie</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/charts"><a className="nav-link">Wykresy</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}