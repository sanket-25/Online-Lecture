import React from 'react'
import './globals.css'

export default function Schedule() {
    return (
        <>
            <div className="schedule">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=UTC" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </>

    );
}