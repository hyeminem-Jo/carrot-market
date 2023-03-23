import React from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<LoginForm>({
    mode: 'onChange',
  });
  const onValid = (data: LoginForm) => {
    console.log('난 유효해 !!');
    resetField('password');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors); // 에러가 어디서 발생했는지 객체로 보여줌
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'username 을 적어주세요', // true 가 아닐때의 메시지를 넣을 수 있다.
        })}
        type="text"
        placeholder="Username"
        // required
      />
      <input
        {...register('email', {
          required: true,
          validate: {
            notGmail: (value) => !value.includes('@gmail.com') || 'gmail 은 허용하지 않습니다.',
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email?.message) ? 'focus:outline-none focus:border-red-500 rounded-md' : ''
        }`}
      />
      <p>{errors.email?.message}</p>
      <input
        {...register('password', { required: true })}
        type="password"
        placeholder="Password"
        // required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Forms;
