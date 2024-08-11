//children is the default parameter is passed with the props
export default function TabButton({ children }) {

  function handleClick() {
    console.log('Hello World!');
  }
  
  return (
    <li>
      <button onClick = {handleClick}>{children}</button>
    </li>
  );
}
