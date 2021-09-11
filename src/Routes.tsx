import * as React from 'react'
import { Router } from '@reach/router'
import HelloContainer from 'views/containers/HelloContainer'


export default function Routes() {
    return (
        <Router>
            <HelloContainer path="/" />
        </Router>
    )
}
