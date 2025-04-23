import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    // const [username, setUsermame] = useState('RazFernandez')

    // // Simple function to change the name of a user
    // function UpdateUsername() {
    //     setUsermame('carljhonson');
    // }

    // console.log('Render with name: ', username)
 
    // functionm to format the username
    return (
        <section className='App'>
            <TwitterFollowCard  userName="RazFernandez" initialIsFollowing={true}>
                Miguel Raziel Fernandez Pascual
            </TwitterFollowCard>

            <TwitterFollowCard userName={"OscarAlvarez"}>
                Miguel Diego Alvarez
            </TwitterFollowCard>

            {/* <button onClick={() => { UpdateUsername(); } }>
                Cambiar Nombre
            </button> */}
        </section>

    )
}