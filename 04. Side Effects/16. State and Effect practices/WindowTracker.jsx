import {useState, useEffect} from "react"

export default function WindowTracker() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
				window.addEventListener("resize", () => {
					console.log("Window resized")
					setWindowWidth(window.innerWidth)
				})
			}, [windowWidth]
	)
	return (
			<h1>Window width: {windowWidth}</h1>
	)
}
