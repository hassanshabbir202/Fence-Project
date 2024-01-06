import axios from 'axios';

const baseUrl = ""
const DeployUrl = "https://comfortable-tan-wig.cyclic.app" 

const create_Design = (data) => {

  try {

    const response = axios.post(`${baseUrl||DeployUrl}/design/save`, data);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);

        }).catch((err)=>{

          reject(err)

        })

    }, response)


  } catch (error) { throw new error }

};

const updateDesign = (id, data) => {

  try {
    const response = axios.put(`${baseUrl || DeployUrl}/design/update/${id}`, data);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};

const deleteDesign = (id) => {

  try {
    const response = axios.delete(`${baseUrl || DeployUrl}/design/delete/${id}`);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};

const getDesign = (id) => {

  try {
    const response = axios.get(`${baseUrl || DeployUrl}/design/get/${id}`);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};

const create_user = () => {

  try {
    const response = axios.post(`${baseUrl || DeployUrl}/auth/register`);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};

const loginUser = () => {

  try {
    const response = axios.post(`${baseUrl || DeployUrl}/auth/login`);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};

const payment = (Data) => {

  try {
    const response = axios.post(`${baseUrl || DeployUrl}/payment/checkout/`, Data);

    return  new Promise((resolve, reject) => {
      
        response.then((resp)=>{
        
          resolve(resp);
        
        }).catch((err)=>{

          reject(err)

        })

    }, response)

  } catch (error) { throw new error }

};


export {create_Design, updateDesign, getDesign, deleteDesign, create_user, loginUser,payment}