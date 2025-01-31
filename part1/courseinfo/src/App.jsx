const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.number}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part={props.part} number={props.number} />
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} number={exercises1} />
      <Content part={part2} number={exercises2} />
      <Content part={part3} number={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App
