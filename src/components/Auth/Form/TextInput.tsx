import { FieldHookConfig, useField } from "formik";

interface OtherProps {
  label: string;
}

export const TextInput = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>
        {props.label}
        {meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null}
      </label>
      <input
        className="text-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
};
