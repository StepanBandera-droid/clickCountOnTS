import "./styles.css";

interface ChildProps {
  //Как в целом работают интерфейсы с функциональными компонентами?
  children: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}
const Button: React.FC<ChildProps> = ({ onClick, children }) => {
  //Почему свойства/параметры onClick и children обязательно должны быть внутри фигурных скобок при обращении к ним? И что такое IntrinsicAttributes?
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
