import classNames from "../styles"
interface AppContainerInterface{
    classFlag? : boolean
}
const AppContainerComponent = ({classFlag , children}:React.PropsWithChildren<AppContainerInterface>)=>{
    return (<div className={classNames.AppContainerStyle(classFlag)}>
        {children}
    </div>)
}

export default AppContainerComponent