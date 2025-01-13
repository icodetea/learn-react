import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))


/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return <ol>
        <li>Why I'm excited to learn React</li>
        <li>Building interactive user interfaces</li>
        <li>Improving my frontend development skills</li>
    </ol>
}

root.render(
    Page()
)
