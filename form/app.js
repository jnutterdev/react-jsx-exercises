let TextInput = () => {
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Enter text</Form.Label>
                <Form.Control type="text" placeholder="Some text..." />
            </Form>
        </div>
    )
}

let YesNoRadio = () => {
    return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
}

let SubmitButton = () => {
    return <span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
    return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))