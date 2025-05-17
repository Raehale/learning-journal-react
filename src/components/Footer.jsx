import React from "react"

export default function Footer() {
    console.log(new Date().getFullYear())
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <h4>My Learning Journal</h4>
            Copyright © { currentYear }
            <br /><a href="mailto:alyssarae98ha@gmail.com">alyssarae98ha@gmail.com</a>
        </footer>
    )
}