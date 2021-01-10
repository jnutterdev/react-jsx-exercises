let ProfilePic = () => {
    return (
        <div className="container">
            <img src="space.gif" alt="Space!" width="100" height="auto" />
        </div>
    );
}


let CommentBody = (userName) => {
    return (
        <div>   
            <strong>Username</strong>
            <p>Some comment text</p>
        </div>
    );
}

let Comment = () => {
    return (
        <div className="container">
         <ProfilePic />
         <CommentBody />
         </div>
       );
}

let Comments = () => {
    return ( 
    <div className="container">
       <Comment />
       <Comment />
       <Comment />
       <Comment />
    </div>
    );
}

ReactDOM.render(<Comments />, document.getElementById('root'))