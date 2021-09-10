import React from "react";

interface Props {
    readonly name: string
    readonly initialName: string
    readonly handleChangeName: any
}

export const Hello = (props: Props) => {
    return (
        <>
            <p>
                Hello, <b>{props.name}</b> !!
                <br />
                name の初期値: <b>{props.initialName}</b>
            </p>

            <input type="text" onChange={props.handleChangeName} />
        </>
    )
}