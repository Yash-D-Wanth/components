function Example(props){
    let {Person}=props;
    return(
        <div>orewa {props.Person.name} who will became {props.Person.aim} his age {props.Person.age}</div>
    )
}
export default Example