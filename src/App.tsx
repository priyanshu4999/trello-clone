
import Card from './components/Cards.tsx'
import Column from './components/Columns.tsx'
import AppContainerComponent from './components/AppContainer.tsx'
import './global.css'
import classNames from './styles.ts'
import { useState } from 'react'

function App() {
  const [black, setflipBlack] = useState(false)

  return (
    <>
      <button className={classNames.AddItemButtonProps(black)} onClick={() => { setflipBlack(!black) }}> {black?"😎":"🌚"}</button>
      <AppContainerComponent classFlag={black}>
        {datainput.datalist.map((item , index) => {
          return (
            <Column classFlag={black} text={item.title} key={index}>
              {item.description.map(
                (descriptionItem , cardIndex)=>{
                  return(
                    <Card classFlag={black} key={100*index + cardIndex} text={descriptionItem}></Card>
                  )
                }
              )}
            </Column>)
        })}

      </AppContainerComponent>

    </>

  )
}
export default App

interface Data {
  title: string
  description: string[]
}

interface DataList {
  datalist: Data[]
}

const datainput: DataList = {
  datalist: [
      {
          title: "Monday",
          description: [
              "Finish TypeScript interfaces for project",
              "Review and merge pull requests",
              "Team meeting at 10 AM"
          ]
      },
      {
          title: "Tuesday",
          description: [
              "Work on UI components",
              "Refactor legacy code",
              "Client call at 3 PM"
          ]
      },
      {
          title: "Wednesday",
          description: [
              "Write unit tests for new features",
              "Update project documentation",
              "One-on-one with manager"
          ]
      },
      {
          title: "Thursday",
          description: [
              "Implement feedback from code review",
              "Design new API endpoints",
              "Team lunch"
          ]
      },
      {
          title: "Friday",
          description: [
              "Deploy new version to staging",
              "Bug triage and fixes",
              "Company all-hands meeting"
          ]
      },
      {
          title: "Saturday",
          description: [
              "Plan for next week's sprint",
              "Catch up on reading",
              "Exercise and relaxation"
          ]
      },
      {
          title: "Sunday",
          description: [
              "Family time",
              "Grocery shopping",
              "Meal prep for the week"
          ]
      }
  ]
};


