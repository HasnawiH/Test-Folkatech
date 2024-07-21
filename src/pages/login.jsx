import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authLogin } from '../service/auth';
import "../assets/styles/global.css"

const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setShowPassword] = useState(false)
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFormLogin((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  const handleRedirectRegister = () => navigate("/register")

  const handleSubmit = async () => {
    // Ini saya masih validasi manual, untuk kedepannya menggunakan formik 
    if (formLogin.email === "" && formLogin.password === "") {
      alert("Silahkan mengisi email dan password terlebih dahulu")
    } else {
      try {
        const response = await authLogin(formLogin)
        if (response.status === 200) {
          localStorage.setItem('token', response.data.data.token);
          navigate("/product")
        } else {
          alert("Email atau Password Salah. Silahkan Login Kembali!")
        }
      } catch (error) {
        console.log(`error`, error)
      }
    }
  }

  return (
    <section id="login" className="flex place-items-center  w-[35.5rem] h-[100vh] m-auto">
      <div className="w-[35.5rem] m-auto shadow-md rounded-lg border border-[#ECECEC] drop-shadow-md p-8 text-center">
        <h2 className="text-title text-start mb-6">Masuk</h2>
        <input onChange={handleChange} name='email' placeholder='Email' type='email' className="mb-4 p-3 w-full shadow-sm rounded-md focus:outline-none focus:shadow-outline" />

        <div class="w-full ">
          <div class="relative">
            <input onChange={handleChange} name='password' class="shadow-md  rounded w-full p-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type={isShowPassword ? "text" : "password"} placeholder="Password" />
            <div onClick={() => setShowPassword(!isShowPassword)} class="absolute inset-y-1 right-0 flex mt-2 px-3 text-[#730C07] cursor-pointer">
              {isShowPassword ? "Hide" : "Show"}
            </div>
          </div>
        </div>

        <p className="mb-2 w-full text-end text-[#730C07]">Lupa Password?</p>
        <button onClick={handleSubmit} className="w-full mt-4 bg-[#EB3F36] text-white mb-4 focus:outline-none focus:shadow-outline">MASUK</button>
        <div class="w-full flex justify-center items-center mt-4 shadow-none">
          <div class="w-[80%] h-[2px]  bg-gray-200"></div>
        </div>
        <div className="mt-4">Belum punya akun? <label onClick={handleRedirectRegister} className="text-[#730C07] font-medium cursor-pointer">Daftar Sekarang</label></div>
      </div>
    </section>
  )
}

export default Login;