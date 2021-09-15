import axios from 'axios';
const URL = 'https://connections-api.herokuapp.com';

const createRequest=async (token="",callback,path,data) => {
  axios.defaults.headers.common['Authorization']=token

  try{
    const res= data? await callback(path,data): await callback(path)
    return res;
  }
  catch({response}){
    return {...response, isError: true}
  }
};

export const get = async (data, token) => {
  const res=await createRequest(token, axios.get,`${URL}/contacts`)
  if(res.isError) return res
    return res.data
}
 

export const add = async (data, token) => {
  delete data.id
  const res= await createRequest(token, axios.post,`${URL}/contacts`,data)
if(res.isError) return res
    return res.data.id}

export const del = async (data, token) => 
 await createRequest(token, axios.delete,`${URL}/contacts/${data}`)

export const signIn = async (data, token) => {
  const res=await createRequest("",axios.post,`${URL}/users/login`,data)
  if(res.isError) return res
    return res.data.token
}


export const signUp = async (data, token) => 
  await createRequest("",axios.post,`${URL}/users/signup`,{...data, name:"Pupkin"})

export const signOut = async (data, token) => 
  await createRequest(token, axios.post,`${URL}/users/logout`)
