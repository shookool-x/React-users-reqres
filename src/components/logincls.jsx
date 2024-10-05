import { Component } from "react";
import Input from "./inpute";
import * as yup from 'yup'
import axios from "axios";

class Logincls extends Component {

  state = {
    account: {
      email: '',
      password: '',
    },
    errors: [],
    sending: false,
  }

  schema = yup.object().shape({
    email: yup.string()
      .email('فرمت ایمیل معتبر نیست!')
      .required(' فیلد ایمیل نباید خالی باشد!'),
    password: yup.string().min(4, 'برای پسورد حداقل ۴ کاراکتر لازم است!'),
  })

  render() {
    const { email } = this.state.account;
    const { password } = this.state.account;
    const { errors } = this.state;
    return (
      <>
        {
          errors.length !== 0 && (
            <div className="alert alert-primary p-2 mx-4" role="alert" style={{ direction: 'rtl' }}>
              <ul>
                {
                  errors.map((e, i) => <li key={i}>{e}</li>)
                }
              </ul>
            </div>
          )
        }
        <div className="p-5">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <Input handleChange={this.handleChange} value={email} describe="Email adress" type="email" />
              <div id="notshow" className="form-text" style={{ color: "white" }}>
                we will never show your Email to anyone!
              </div>
            </div>
            <div className="mb-3">
              <Input handleChange={this.handleChange} value={password} describe="Password" type="password" />
            </div>
            <button disabled={this.state.sending} type="submit" className="ft">Login</button>
            <ul style={{ margin: "100px auto" }}>
              <li>use email : george.bluth@reqres.in and preferred password</li>
            </ul>
          </form>
        </div>
      </>
    );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.validation();
    if (res) {
      this.setState({ sending: true })
      try {
        const resposns = await axios.post('https://reqres.in/api/login', res);
        console.log(resposns.data.token);
        window.localStorage.setItem('token', resposns.data.token);
        window.location.replace('/dashbord');
        this.setState({ sending: false });
        this.setState({ errors: [] });
      } catch (error) {
        this.setState({ errors: ['ایمیل یا پسورد شما صحیح نیست'] });
        this.setState({ sending: false });
      }
    }
  }

  validation = async () => {
    try {
      const result = await this.schema.validate(this.state.account, { abortEarly: false });
      return result;
    } catch (error) {
      this.setState({ errors: error.errors });
    }
    this.setState({
      account: {
        email: '',
        password: '',
      }
    })
  }

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const account = { ...this.state.account }
    account[name] = value;
    this.setState({ account });
  }
}

export default Logincls;


