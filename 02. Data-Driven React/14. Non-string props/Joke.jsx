export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <p className="rating">Rating: +: {props.upvotes} -:{props.downvotes}</p>
            <hr />
        </>
    )
}