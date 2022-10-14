import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuth } from '../utils/useAuth'

export const accessToken = Cookies.get('app_accessToken')

export default function client() {


  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })
  return client
}
