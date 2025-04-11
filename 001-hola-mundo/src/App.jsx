import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName={'RazFernandez'} name={'Miguel Raziel Fernandez Pascual'} />
            <TwitterFollowCard userName={'midudev'} name={'Miguel Angel Durán'} />
            <TwitterFollowCard userName={'OscarAlvarez'} name={'Oscar Alvarez'} />
        </section>
    )
}