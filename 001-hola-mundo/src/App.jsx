import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {

    // Bad practice
    const midudev = { isFollowing: true, userName: 'midudev' }
    
    // functionm to format the username
    return (
        <section className='App'>
            <TwitterFollowCard  userName="RazFernandez">
                Miguel Raziel Fernandez Pascual
            </TwitterFollowCard>

            <TwitterFollowCard  userName="midudev">
                Miguel Diego Alvarez
            </TwitterFollowCard>

            <TwitterFollowCard  userName="OscarAlvarez">
                Oscar Alvarez Rodriguez
            </TwitterFollowCard>

            <TwitterFollowCard  userName="OscarAlvarez">
                Oscar Alvarez Rodriguez
            </TwitterFollowCard>

            <TwitterFollowCard {...midudev}>
                Miguel Diego Alvarez
            </TwitterFollowCard>
        </section>
    )
}