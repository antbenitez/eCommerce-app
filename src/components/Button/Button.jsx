import "./Button.css";

const Button = ({ type, disabled, onClick, children, className }) => {
  const buttonType = type ? `btn-${type}` : "btn-primary";
  const buttonClasses = `${buttonType}${className ? ` ${className}` : ""}`;
  const isDisabled = disabled ? "disabled" : "";

  return (
    <button className={buttonClasses} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
