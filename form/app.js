let TextInput = () => {
    return (
        <div className="container">
                <p>Enter:</p>
                <input type="text"/>
        </div>
    )
}



let YesNoRadio = (props) => {



    return (
        <div>
            <label>
                <input type="radio" value="yes" />
                Yes
            </label>
            <br />
            <label>
                <input type="radio" value="no"  />
                No
            </label>

        </div>
    );
}

let SubmitButton = () => {
    return (
        <div>
            <button type="submit">Yes or No?</button>
        </div>
    )
}

let Form = () => {
    return (
        <div className="container">
                 <h1>Hello</h1>
                <TextInput />
                <TextInput />
                <TextInput />
                <YesNoRadio />
                <YesNoRadio />
                <SubmitButton />
          
            </div>
      
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))