//children is the default parameter is passed with the props
export default function TabButton({ children, onSelect1 }) {

  console.log("TabButton Component")
  
  return (
    <li>
      <button onClick = {onSelect1}>{children}</button>
    </li>
  );
}
