//children is the default parameter is passed with the props
export default function TabButton({ children, onSelect1 }) {

  
  return (
    <li>
      <button onClick = {onSelect1}>{children}</button>
    </li>
  );
}
