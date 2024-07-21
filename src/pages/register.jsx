import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authRegister } from '../service/auth';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isShowPassword, setShowPassword] = useState(false)
  const [isShowConfirmPass, setShowConfirmPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState("")
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFormRegister((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  const handleStep = (param) => {
    if(formRegister.name === "" || formRegister.email === "") {
      alert("Silahkan Isi Nama dan Email terlebih Dahulu!")
    }else{
      setStep(param)
    }
  }
  const handleRedirectLogin = () => navigate("/")

  const handleSubmit = async () => {
    // Ini saya masih validasi manual, untuk kedepannya menggunakan formik 
    if(formRegister.phone === "" || formRegister.password === ""){
      alert("Silahkan Isi Nomor Telepeon dan Password!")
    }else{
      if(formRegister.password !== confirmPass){
        alert("Password dan Konfirmasi Password Tidak Sama")
      }else{
        try {
          const response = await authRegister(formRegister)
          if (response.status === 200) {
            alert("Register Sukses");
            handleRedirectLogin()
          } else {
            alert("Register Gagal")
          }
        } catch (error) {
          console.log(`error`, error)
        }
      }
    }
  }

  return (
    <section id="login" className="flex place-items-center  w-[35.5rem] h-[100vh] m-auto">
      <div className="w-[35.5rem] m-auto shadow-md rounded-lg border border-[#ECECEC] drop-shadow-md p-8 text-center">
        {step === 0 &&
          <div>
            <h2 className="text-title text-start mb-6">Daftar Sekarang</h2>
            <input onChange={handleChange} name="name" placeholder='Nama Depan' type='text' className="mb-4 p-3 w-full shadow-sm rounded-md" />
            <input onChange={(e) => setFormRegister({ ...formRegister, name: formRegister.name + ` ${e.target.value}` })} name="name" placeholder='Nama Belakang' type='text' className="mb-4 p-3 w-full shadow-sm rounded-md" />
            <input onChange={handleChange} name="email" placeholder='Email' type='email' className="mb-4 p-3 w-full shadow-sm rounded-md" />
            <button onClick={() => handleStep(1)} className="w-full mt-4 bg-[#EB3F36] text-white mb-4">SELANJUTNYA</button>
          </div>
        }

        {step === 1 &&
          <div>
            <h2 onClick={() => handleStep(0)} className="text-title text-[18px] text-start mb-6 cursor-pointer">Kembali</h2>
            <input onChange={handleChange} name="phone" placeholder='Nomor Telepon' type='number' className="mb-4 p-3 w-full shadow-sm rounded-md" />
            {/* <input onChange={handleChange} name="password" placeholder='Password' type='text' className="mb-4 p-3 w-full shadow-sm rounded-md" /> */}
            <div class="w-full ">
              <div class="relative">
                <input onChange={handleChange} name='password' class="shadow-md  rounded w-full p-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type={isShowPassword ? "text" : "password"} placeholder="Password" />
                <div onClick={() => setShowPassword(!isShowPassword)} class="absolute inset-y-1 right-0 flex mt-2 px-3 text-[#730C07] cursor-pointer">
                  {isShowPassword ? "Hide" : "Show"}
                </div>
              </div>
            </div>

            <div class="w-full ">
              <div class="relative">
                <input onChange={(e) => setConfirmPass(e.target.value)} class="shadow-md  rounded w-full p-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" type={isShowConfirmPass ? "text" : "password"} placeholder="Konfirmasi Password" />
                <div onClick={() => setShowConfirmPass(!isShowConfirmPass)} class="absolute inset-y-1 right-0 flex mt-2 px-3 text-[#730C07] cursor-pointer">
                  {isShowConfirmPass ? "Hide" : "Show"}
                </div>
              </div>
            </div>
            {/* <input placeholder='Konfirmasi Password' type='text' className="mb-4 p-3 w-full shadow-sm rounded-md" /> */}
            <button onClick={handleSubmit} className="w-full mt-4 bg-[#EB3F36] text-white mb-4">SELANJUTNYA</button>
          </div>
        }

        <div class="w-full flex justify-center items-center mt-4 shadow-none">
          <div class="w-[80%] h-[2px]  bg-gray-200"></div>
        </div>

        <div className="mt-4">Sudah punya akun? <label onClick={handleRedirectLogin} className="text-[#730C07] font-medium cursor-pointer">Masuk</label></div>
      </div>
    </section>
  )
}

export default Register