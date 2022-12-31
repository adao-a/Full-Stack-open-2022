const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <>
      <Part name = {part1.name} exercises={part1.exercises}/>
      <Part name = {part2.name} exercises={part2.exercises}/>
      <Part name = {part3.name} exercises={part3.exercises}/>
    </>
  )
}

const Total = (props) => {
  let total = 0
  props.parts.forEach(element => {
    total += element.exercises
  });
  return (
    <>
      Number of exercises {total}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App