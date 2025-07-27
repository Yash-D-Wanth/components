function Example({ Person }) {
  //   .message="there"
  return (
    <>
      <h1>
        Hello, this is an example {Person.name}{" "}
        <ul>
          {Person.hobbies.map(hobby => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </h1>
      <h1>{Person.age}</h1>
    </>
  );
}
export default Example;
