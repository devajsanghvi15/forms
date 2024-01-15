import './App.css';
import { useForm } from 'react-hook-form';

function App() {

  const {register, formState: {errors}, handleSubmit} = useForm({
    mode: "all"
  });

  console.log("errors", errors);

  return (
    <div className="App">
      <form id='myForm' autoComplete='off' onSubmit={handleSubmit((data) => {
        console.log(data);
        alert('Form submitted successfully');
        document.getElementById('myForm').reset();
        })}>
        <h2>Create an account</h2>
        <input {...register("username", {
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Username must be atleast 3 characters long"
          },
          maxLength: {
            value: 30,
            message: "Username must be atmost 30 characters long"
          }
        })} placeholder='Username' />
        <p>{errors.username?.message}</p>
        <input {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email must be valid"
          }
        })} placeholder='Email' />
        <p>{errors.email?.message}</p>
        <input {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
            message: "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Character"
          }
        })} placeholder='Password' 
        type='password' />
        <p>{errors.password?.message}</p>
        <select {...register("gender", {
          required: "Gender is required"
        })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <p>{errors.gender?.message}</p>
        <input type='Submit' />
      </form>
    </div>
  );
}

export default App;
