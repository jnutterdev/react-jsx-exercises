let Header = () => {
    return (
    <header>
        <h1>Welcome to my blog</h1>
    </header>
    );
}
let Article = () => {
    return (
        <div className="jumbotron">
            <p>
        Rings of Uranus billions upon billions bits of moving fluff across the centuries great turbulent clouds shores of the cosmic ocean? A still more glorious dawn awaits the only home we've ever known birth citizens of distant epochs not a sunrise but a galaxyrise kindling the energy hidden in matter. The only home we've ever known Apollonius of Perga a very small stage in a vast cosmic arena emerged into consciousness invent the universe a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.
            </p>
        </div>
    );
}
let Footer = () => {
    
    return (
        <footer className="alert alert-dark">
        <div className="container">
            <p>
                &copy; 2021. John Nutter, footer stuff.
            </p>
        </div>
    </footer>
    );
}

let Blog = () => {
    return (
    <div>
        <Header />
        <Article />
        <Footer />
    </div>
    );
}


ReactDOM.render(<Blog />, document.getElementById('root'))