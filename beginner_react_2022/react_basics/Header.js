export default function Header() {
    return (
        <header className="w-full bg-gray-200 shadow-xl">
            <nav className="container mx-auto w-full p-4 flex justify-between items-center">
                <img src="./react-logo.png" className="w-12" alt="React logo" />
                <ul className="flex gap-4">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
