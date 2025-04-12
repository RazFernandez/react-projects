export function TwitterFollowCard({formarUsernName, userName, name, isFollowing }) {
    
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
                <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formarUsernName(userName)}</span>
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                    Seguir 
            </button>
        </aside>
     </article>
    )
}