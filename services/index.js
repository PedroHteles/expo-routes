import axios from 'axios'
// import { storage } from './storage'
// import { auth } from './auth'

export const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  // baseURL: "http://teste.teste.com.br/api",
  baseURL: "https://15ae-179-104-247-70.sa.ngrok.io/api",
  timeout: 7000,
})

// api.interceptors.request.use(
//   async (request: any) => {
//     const token = await storage.getStorageItem('token')
//     request.headers['Authorization'] = `Bearer ${token}`
//     return request
//   },
//   async (err: any) => {
//     return Promise.reject(err)
//   }
// )

// api.interceptors.response.use(
//   async (response: any) => {
//     return response
//   },
//   async (err: any) => {
//     if (err.response.status === 401) await auth.onSignOut()
//     return Promise.reject(err)
//   }
// )
