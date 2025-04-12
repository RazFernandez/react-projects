import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    // functionm to format the username
    const formatUsernName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard
                formarUsernName={formatUsernName}
                isFollowing userName={'RazFernandez'}
                name={'Miguel Raziel Fernandez Pascual'}
            />
            <TwitterFollowCard
                formarUsernName={formatUsernName}
                sFollowing={false} userName={'midudev'}
                name={'Miguel Angel Durán'}
            />
            <TwitterFollowCard
                formarUsernName={formatUsernName}
                isFollowing userName={'OscarAlvarez'}
                name={'Oscar Alvarez'}
            />
        </section>
    )
}