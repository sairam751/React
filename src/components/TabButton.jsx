//children is the default parameter is passed with the props
export default function TabButton({ children, onSelect1,isSelected }) {

  console.log("TabButton Component")
  
  return (
    <li>
      <button className = {isSelected ?"active":undefined }onClick = {onSelect1}>{children}</button>
    </li>
  );
}
