import classNames from "../styles"

interface ColumnText{
    classFlag? : boolean
    text? : string
}

const Column = ({text , classFlag, children} : React.PropsWithChildren<ColumnText>)=>{
    return(
        <div className={classNames.ColumnStyle(classFlag)}>
            {text}
            {children}
        </div>
    )
}

export default Column