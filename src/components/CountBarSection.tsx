import {ReactElement, createElement} from 'react'

export interface Bar_Props {
    width: string,
    backgroundColour: string,
    borderColour: string,
    textColour: string,
    count: number
}

export const CountBarSection = (props: Bar_Props): ReactElement => {
    const {width, backgroundColour, borderColour, textColour, count} = props

    const sectionStyle = {
        backgroundColor: backgroundColour,
        width: width,
        border: `2px solid ${borderColour}`,
        colour: textColour,
    }

    return (
        <div className='CountBarSection' style={sectionStyle}><p>{count}</p></div>
    )
}