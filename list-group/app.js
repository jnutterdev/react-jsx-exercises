let ListGroupItem = () => {

    return (
             <div>
                <li className="list-group-item active">Cras justo odio</li>
                <li className="list-group-item ">Cras justo odio</li>
                <li className="list-group-item ">Cras justo odio</li>
            </div>
    )
    // return <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
}

let ListGroup = () => {
    return (
        <div className="container">
            <ul className="list-group">
                    <ListGroupItem />
            </ul>
        </div>
    )

    // <span>Make this Component render a handful of ListGroupItems</span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))