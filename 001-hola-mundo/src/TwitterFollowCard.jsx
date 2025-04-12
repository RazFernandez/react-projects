export function TwitterFollowCard({ children, userName = 'unknown', isFollowing }) {
    
    // props must be inmutable
    // const { userName, name, isFollowing } = props

    // const that holds the state of the component
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const imageSrc = `https://unavatar.io/github/${userName}`
    console.log(isFollowing)

    return (
     <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img
                className='tw-followCard-avatar'
                alt="Avatar Miguel Fernandez"
                src={imageSrc}></img>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName}>
                    {text}
            </button>
        </aside>
     </article>
    )
}