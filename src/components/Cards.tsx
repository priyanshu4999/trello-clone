import classNames from "../styles"

interface CardText{
    classFlag?:boolean
    text? : string
}

const Card = ({text , classFlag}:CardText)=>{
    return(
      <div className={classNames.CardStyle(classFlag)}>
      {text}
      </div>
    )
  }

  export default Card