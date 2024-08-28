interface inputProps {
  className?: string;
  placeholder?: string;
  password?: boolean;
  id: string;
  name: string;
  required?: boolean;
}

export default function Input(props: inputProps) {
  return (
    <input
      className={`border p-1 ${props.className}`}
      placeholder={props.placeholder}
      type={props.password ? "password": "text"}
      id={props.id}
      name={props.name}
      required={props.required}
    />
  );
}
