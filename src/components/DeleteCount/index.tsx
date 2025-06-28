import "./styles.css";

interface ChildProps {
  //Как в целом работают интерфейсы с функциональными компонентами?
  children: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
const DeleteCount: React.FC<ChildProps> = ({ onClick, children }) => {
  return (
    <button className="deleteButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteCount;
