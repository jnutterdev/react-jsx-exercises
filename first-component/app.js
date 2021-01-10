let FirstComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="col-md-12 red"></div>
                </div>
                <div className="col-md-6 ">
                     <div className="col-md-12 green"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <div className="col-md-12 blue"></div>
                </div>
                <div className="col-md-6 ">
                    <div className="col-md-12 yellow"></div>
                </div>
            </div>
        </div>

    )
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))