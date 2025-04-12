import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {

    // Bad practice
    const midudev = { isFollowing: true, userName: 'midudev' }
    
    // functionm to format the username
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="RazFernandez">
                Miguel Raziel Fernandez Pascual
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName="midudev">
                Miguel Diego Alvarez
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="OscarAlvarez">
                Oscar Alvarez Rodriguez
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing = {false} userName="OscarAlvarez">
                Oscar Alvarez Rodriguez
            </TwitterFollowCard>

            <TwitterFollowCard {...midudev}>
                Miguel Diego Alvarez
            </TwitterFollowCard>
        </section>
    )
}