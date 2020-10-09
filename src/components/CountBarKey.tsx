import {ReactElement, createElement} from 'react'

export interface CountBarKey_Props {
    description:string,
    colour: string
}

export const CountBarKey = (props: CountBarKey_Props): ReactElement => {
    let {description, colour} = props

    const sectionStyle = {
        backgroundColor: colour,
    }

    return (
        <div className='KeyContainer'>
            <div className='KeyContainer_ColourContainer'>
                <div className='KeyContainer_ColourIndicator' style = {sectionStyle}/>
            </div>
            <p>{description}</p>
        </div>
    )
}