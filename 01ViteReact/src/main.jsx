import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const user = 'username1'

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit Google',
    user
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp />,
    ReactElement
)
