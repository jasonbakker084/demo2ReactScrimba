import React from "react"

function Conditional(props) {
    // condition ? statement if true : statement if false
    return (
        <div>
            <h1>NavBar</h1>

            {props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}

            <h1>Footer</h1>
        </div>
    )
}

// function Conditional(props) {
//     return <h1>Some cool stuff about conditional rendering</h1>
// }

//   {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}

export default Conditional