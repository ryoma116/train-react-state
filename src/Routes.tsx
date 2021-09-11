import * as React from 'react'
import { Router } from '@reach/router'
import HelloContainer from 'views/containers/HelloContainer'
import TimerContainer from "views/containers/TimerContainer";


export default function Routes() {
    return (
        <Router>
            <HelloContainer path="/" />
            <TimerContainer path="/timer" />
        </Router>
    )
}
