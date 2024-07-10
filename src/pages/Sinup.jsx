// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// function Sinup() {
//     const [name,setName]=useState('')
//     const[email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const Navgite=useNavigate()

//     const vaildEmail=(email)=>{
//         if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
//             return ;
// }

//     const hundel =()=>{
//         if(email=='' ||vaildEmail(email)){
//             alert('Enter Your Email')
//             return;
//         }
//         if(name=='' || password.length >5){
//             alert('enter your password')
//             return;
//         }
//         localStorage.setItem('Name',name)
//         localStorage.setItem('Email',email)
//         localStorage.setItem('password',password)
//         Navgite('/Login')
//     }
//   return (
//     <div>
//         <div class="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
//     <div class="w-full max-w-md space-y-8">
//         <div class="bg-white shadow-md rounded-md p-6">

//             <img class="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

//             <h2 class="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
//                 Sign up for an account
//             </h2>

//             <form class="space-y-6" method="POST">

//                 <div>
//                     <label for="new-password" class="block text-sm font-medium text-gray-700">Username</label>
//                     <div class="mt-1">
//                         <input name="username" type="username" required value={name} onChange={(e)=>setName(e.target.value)}
//                             class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//                     </div>
//                 </div>

//                 <div>
//                     <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
//                     <div class="mt-1">
//                         <input name="email" type="email-address" autocomplete="email-address" required value={email} onChange={(e)=>setEmail(e.target.value)}
//                             class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//                     </div>
//                 </div>

//                 <div>
//                     <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
//                     <div class="mt-1">
//                         <input name="password" type="password" autocomplete="password" required value={password} onChange={(e)=>setPassword(e.target.value)}
//                             class="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
//                     </div>
//                 </div>

//                 <div>

//                 </div>

//                 <div>
//                     <Link to='/'>
//                     <button type="submit" onClick={hundel}
//                         class="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
//                         Account
//                         </button>
//                         </Link>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>
//     </div>
//   )
// }

// export default Sinup

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Sinup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navgite = useNavigate();

  const vaildEmail = (email) => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      return;
  };

  const hundel = () => {
    if (email == '' || vaildEmail(email)) {
      alert('Enter Your Email');
      return;
    }
    if (name == '' || password.length > 5) {
      alert('enter your password');
      return;
    }
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('password', password);
    Navgite('/Login');
  };
  return (
    <div>
      <section class="flex flex-col items-center pt-6 m-10">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" method="">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Emelia Erickson"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="emelia_erickson24"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <br></br>

              <Link to="/">
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={hundel}
                >
                  Create an account
                </button>
                <br></br>
                <br></br>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <a
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    href="/signin"
                  >
                    Sign in here
                  </a>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sinup;
