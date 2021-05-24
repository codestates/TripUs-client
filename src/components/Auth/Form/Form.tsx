import styled from "styled-components";
import { FieldHookConfig, useField } from "formik";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: 811px) {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .social-login {
    width: 60%;
    margin-top: 16px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }

  .line-break {
    width: 50%;
    display: flex;
    flex-direction: row;
    margin: 16px 0;

    :before,
    :after {
      content: "";
      flex: 1 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      margin: auto;
    }

    :before {
      margin-right: 15px;
    }

    :after {
      margin-left: 15px;
    }
  }

  .input-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 18px 0;
  }

  .input-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 56px;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.25);

    label {
      position: absolute;
      top: 0;
      left: 5px;
      transform: translateY(-125%);
    }

    .error {
      color: red;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateY(125%);
    }
  }

  .text-input {
    width: 90%;
    height: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 16px 16px 16px 4px;
    margin-left: 16px;
  }

  .redirect {
    font-size: 1rem;
    cursor: pointer;
    position: absolute;

    bottom: 32px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border: none;
  background: #519de3;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  margin: 16px;
  font-weight: bold;
`;

interface OtherProps {
  label: string;
}

export const MyTextInput = (props: OtherProps & FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className="input-wrapper">
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input
        className="text-input"
        {...field}
        type={props.type}
        id={props.id || props.name}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
