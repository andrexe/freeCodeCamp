// function UnorderedList() {
//     return (
//         <ul>
//             <li>item 1</li>
//             <li>item 2</li>
//         </ul>
//     )
// }

// function MainContent() {
//     return (
//         <h1 className="text-4xl font-bold">This is the title</h1>
//     )
// }

// const navbar = (
//     <nav>
//         <h1 className="font-bold text-4xl">Life Planner</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// document.getElementById("root").append(JSON.stringify(page))

// ReactDOM.render(navbar, document.getElementById("root"))

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// ReactDOM.render(<div>
//     <MainContent />
//     <UnorderedList />
// </div>, document.getElementById("root"))




// const page = (
//     <div>
//         <h1 className="text-4xl font-bold">LifePlanner.click</h1>
//         <h3 className="text-2xl font-bold">Reasons I love LifePlanner</h3>
//         <ol>
//             <li>Stay organized</li>
//             <li>Plan for the future</li>
//             <li>Review the past</li>
//             <li>Increase efficiency</li>
//         </ol>
//     </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(page)




// const reactInfo = (
//     <main className="container p-4 flex flex-col gap-4">
//         <img src="./react-logo.png" className="w-10" alt="React logo" />
//         <h1 className="font-bold text-4xl">Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>

//     </main>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(reactInfo)



// function ReactInfo() {
//     return (
//         <div>
//             <header className="container p-4">
//                 <nav>
//                     <img src="./react-logo.png" className="w-10" alt="React logo" />
//                 </nav>
//             </header>
//             <main className="container px-4 flex flex-col gap-4">
//                 <h1 className="font-bold text-4xl">Fun facts about React</h1>
//                 <ol>
//                     <li>Was first released in 2013</li>
//                     <li>Was originally created by Jordan Walke</li>
//                     <li>Has well over 100k stars on GitHub</li>
//                     <li>Is maintained by Facebook</li>
//                     <li>Powers thousands of enterprise apps, including mobile apps</li>
//                 </ol>
//             </main>
//             <footer className="container p-4">
//                 <small>&copy; 2022 Andrei.click development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }




// function Header() {
//     return (
//         <header className="w-full bg-gray-200 shadow-xl">
//             <nav className="container mx-auto w-full p-4 flex justify-between items-center">
//                 <img src="./react-logo.png" className="w-12" alt="React logo" />
//                 <ul className="flex gap-4">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer className="fixed bottom-0 bg-gray-200 w-full">
//             <small className="flex container mx-auto text-center p-4">&copy; 2022 Andrei.click development. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <main className="container mx-auto px-4 flex flex-col gap-4">
//             <h1 className="font-bold text-4xl">Fun facts about React</h1>
//             <ol>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on GitHub</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ol>
//         </main>
//     )
// }

// function Page() {
//     return (
//         <div className="mx-auto flex flex-col gap-8">
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <Page />
// )



function Header() {
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

function Footer() {
    return (
        <footer className="fixed bottom-0 bg-gray-200 w-full">
            <small className="flex container mx-auto text-center p-4">&copy; 2022 Andrei.click development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <main className="container mx-auto px-4 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </main>
    )
}

function Page() {
    return (
        <div className="mx-auto flex flex-col gap-8">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <Page />
)