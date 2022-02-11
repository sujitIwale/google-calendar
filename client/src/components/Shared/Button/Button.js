import './Button.css';

const Button = ({ textValue, onClick, bgColor, className, type }) => {
	return (
		<button
			type={type}
			className={`btn ${className}`}
			onClick={onClick}
			style={{ backgroundColor: bgColor }}>
			{textValue}
		</button>
	);
};

export default Button;
