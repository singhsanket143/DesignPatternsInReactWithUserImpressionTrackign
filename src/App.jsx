
import './App.css'

// HOC
const ImpressionTracking = (ChildComponent) => {
  return (props) => {
    // this internal returned function is React component
    console.log(props)
    const handleClick = () => {
      console.log(`User clicked: ${ChildComponent.name}`);
    }

    const handleMouseEnter = () => {
      console.log(`User hovered over ${ChildComponent.name}`);
    }

    return (
      <div onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <ChildComponent  {...props} />
      </div>
    )
  }
}

// render props -> we pass another component as a prop
// this function is a react component
const NewImpressionTracking = ({ component }) => {
  const handleClick = () => {
    console.log(`User clicked`);
  }

  const handleMouseEnter = () => {
    console.log(`User hovered`);
  }

  return (
    <div onClick={handleClick} onMouseEnter={handleMouseEnter}>
      {component()}
    </div>
  )
}

const RPComp = ({ component }) => {

  return (
    <div>
      {component()}
    </div>
  )
}

const PresentationalComponent = ({message}) => {
  return (
    <div>
      <button>Click Me</button>
      <p>{message}</p>
    </div>
  )
}

function App() {
  // const TrackedPresentationalComponent = ImpressionTracking(PresentationalComponent)
  return (
    <>
      Design Pattern
      <RPComp component={() => (<div>World</div>)} />
      <NewImpressionTracking component={() => (<PresentationalComponent message="This component is a brand new compopnent"/>)} />
      {/* <TrackedPresentationalComponent message="This component is a brand new compopnent"  /> */}
    </>
  )
}

export default App
