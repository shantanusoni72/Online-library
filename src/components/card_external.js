import React from 'react'
import Fictional from './book/cs'
import SelfHelp from './book/mba'
import Doc from './book/class12'

export default function card_external(props) {
    return (
        <>
        {
            (props.category == "fictional") ? <Fictional /> : (props.category == "selfhelp") ? <SelfHelp /> : (props.category == "doc") ? <Doc /> : null
        }
        </>
    )
}
