export default function Button({ children, type = 'button', onClick, variant = 'primary' }) {
  return (
    <button type={type} onClick={onClick} className={`button button--${variant}`}>
      {children}
    </button>
  );
}
