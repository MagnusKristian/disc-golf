export function Article(props) {
    return (
        <article style={{ backgroundColor: props.color, padding: '1rem', borderRadius: '0.5rem' }}>
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
        </article>
    )
}