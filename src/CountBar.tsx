import { ReactNode, createElement} from "react";
import { CountBarSection } from "./components/CountBarSection";
import { CountBarKey } from "./components/CountBarKey"
import { EditableValue } from "mendix";
import { hot } from "react-hot-loader/root";
import { CountBarContainerProps } from "../typings/CountBarProps";

import "./ui/CountBar.css";

const CountBarWidget = (props: CountBarContainerProps): ReactNode => {
    console.log (props)

    let {Colour1, Colour2, Colour3, Colour4, Colour5, Colour6, Colour7, Colour8, Colour9, Colour10, TotalColour,
        Value1, Value2, Value3, Value4, Value5, Value6, Value7, Value8, Value9, Value10, TotalValue,
        Description1, Description2, Description3, Description4, Description5, Description6, Description7, Description8, Description9, Description10} = props

    let ValueArray = [Value1, Value2, Value3, Value4, Value5, Value6, Value7, Value8, Value9, Value10]
    let numberArray = ValueArray.map ((value:EditableValue<BigJs.Big>|undefined): number => {
        return convertValueToNumber (value)
    })
    //This is not iterated through to render because identifying the associated colour would be challenging
    //Can't select items from the props object using keys because string cannot be used to index (typescript restriction)

    let totalOfKnownValues: number = numberArray.reduce ((prevValue:number, currentValue:number) => (prevValue+currentValue))
    let TotalValueNum:number = convertValueToNumber (TotalValue)
    let differentialValue = TotalValueNum - totalOfKnownValues
    console.log (differentialValue, TotalValueNum, totalOfKnownValues)

    const borderColour = "white"
    const numberColour = "white"

    return (
        <div>
        <div className='CountBar'>
            {renderSection (Value1, TotalValueNum, Colour1, borderColour, numberColour)}
            {renderSection (Value2, TotalValueNum, Colour2, borderColour, numberColour)}
            {renderSection (Value3, TotalValueNum, Colour3, borderColour, numberColour)}
            {renderSection (Value4, TotalValueNum, Colour4, borderColour, numberColour)}
            {renderSection (Value5, TotalValueNum, Colour5, borderColour, numberColour)}
            {renderSection (Value6, TotalValueNum, Colour6, borderColour, numberColour)}
            {renderSection (Value7, TotalValueNum, Colour7, borderColour, numberColour)}
            {renderSection (Value8, TotalValueNum, Colour8, borderColour, numberColour)}
            {renderSection (Value9, TotalValueNum, Colour9, borderColour, numberColour)}
            {renderSection (Value10, TotalValueNum, Colour10, borderColour, numberColour)}
            {renderSectionFromNumber (differentialValue, TotalValueNum, TotalColour, borderColour, numberColour )}
        </div>
        <div className='CountBarKey'>
            {convertValueToNumber (Value1) > 0 && <CountBarKey description={Description1} colour={Colour1}/>}
            {convertValueToNumber (Value2) > 0 && <CountBarKey description={Description2} colour={Colour2}/>}
            {convertValueToNumber (Value3) > 0 && <CountBarKey description={Description3} colour={Colour3}/>}
            {convertValueToNumber (Value4) > 0 && <CountBarKey description={Description4} colour={Colour4}/>}
            {convertValueToNumber (Value5) > 0 && <CountBarKey description={Description5} colour={Colour5}/>}
            {convertValueToNumber (Value6) > 0 && <CountBarKey description={Description6} colour={Colour6}/>}
            {convertValueToNumber (Value7) > 0 && <CountBarKey description={Description7} colour={Colour7}/>}
            {convertValueToNumber (Value8) > 0 && <CountBarKey description={Description8} colour={Colour8}/>}
            {convertValueToNumber (Value9) > 0 && <CountBarKey description={Description9} colour={Colour9}/>}
            {convertValueToNumber (Value10) > 0 && <CountBarKey description={Description10} colour={Colour10}/>}
            {differentialValue > 0 && <CountBarKey description={"Remaining count"} colour={TotalColour}/>}
        </div>
        </div>
    )}
export default hot(CountBarWidget);

function convertValueToNumber (value: EditableValue<BigJs.Big>|undefined) {
    if (typeof value === "object") {
        if (value!.status! != "loading") {
        return parseInt (value!.displayValue)
        }
        else return 0
    }
    else return 0
}

function valuesToWidth (value:number, total:number):string {
    let percentage = Math.round((value/total)*100)
    console.log (percentage)
    return `${percentage}%`
}

function renderSection (Value: EditableValue<BigJs.Big>|undefined, Total:number, Colour:string, borderColour:string, numberColour:string):ReactNode|undefined {
    let valueNum:number = convertValueToNumber (Value)

    if (valueNum>0) {
        let width = valuesToWidth (valueNum, Total)
        console.log (width)
        return <CountBarSection 
                    width={width} 
                    backgroundColour={Colour} 
                    borderColour={borderColour} 
                    textColour={numberColour}
                    count={valueNum} />
    }
}

function renderSectionFromNumber (value: number, Total:number, Colour:string, borderColour:string, numberColour:string):ReactNode|undefined {
   
    if (value>0) {
        let width = valuesToWidth (value, Total)
        return <CountBarSection 
                    width={width} 
                    backgroundColour={Colour} 
                    borderColour={borderColour} 
                    textColour={numberColour}
                    count={value} />
    }
}
