import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit  = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <form onSubmit={handleSubmit(onSubmit)} className="contact row">
          <div className="col-12 col-sm-10 col-md-10 col-lg-10 text-start">
            <div className="mb-3 mt-3">
                <label className="form-label">Name</label>
                <input {...register("contactName", { required: true, minLength: 1, maxLength: 80, pattern: /^[a-zA-Z]+$/ })} type="text" className="form-control" placeholder="your name" />
                {errors.contactName && <p className="form-validation-error">Please input your name</p>}
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                {...register("email", {
                    required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })}
                type="email" className="form-control" placeholder="name@example.com" />
                {errors.email && <p className="form-validation-error">Please enter a valid email address</p>}
            </div>
            <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea {...register("message", { required: true, minLength: 1 })} className="form-control" rows={5} placeholder="your message"></textarea>
                {errors.message && <p className="form-validation-error">Please input your message</p>}
            </div>
            <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
