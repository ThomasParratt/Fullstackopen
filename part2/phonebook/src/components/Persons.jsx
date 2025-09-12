const Person = (props) => (
    <div key={props.idx}>{props.name} {props.number}</div>
)

const Persons = (props) => (
    props.persons.map((person, index) =>
        <Person idx={index} name={person.name} number={person.number}/> 
    )
)

export default Persons