
export default function Die(props) {
    return (
        <button className={props.value.isHeld ? "btn-held" : "btn-default"}>{props.value.value}</button>
    )
}