import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, } from "reactstrap";

interface userSchema{
    email: string,
    password: string
}
export default function Login() {
    const [user,setUser] = useState<userSchema>({email:"",password:""});
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert(JSON.stringify(user));
    }
  return (
    <>
      <Form className="container w-50" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Your Email</Label>
          <Input
            placeholder="enter you email"
            type="text"
            name="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Your Password</Label>
          <Input
            placeholder="enter you password"
            type="text"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button className="text-light bg-dark me-2" type="submit">Sign Up</Button>
        <Label>OR</Label>
        <Button className="text-info bg-dark ms-2">
          Login with Google
        </Button>
      </Form>
    </>
  );
}
