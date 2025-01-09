/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */

import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <ul>
        <li>Why I'm excited to learn React</li>
        <li>Building interactive user interfaces</li>
        <li>Improving my frontend development skills</li>
    </ul>
)