import axios from "axios";

const asiaSportBackendUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ASIASPORT_BACKEND_URL,
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "x-api-key": process.env.NEXT_PUBLIC_ASIASPORT_API_KEY
  }
});

const sportMonkUrl = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ASIASPORT_BACKEND_URL}/v3/football`,
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "x-api-key": process.env.NEXT_PUBLIC_ASIASPORT_API_KEY
  }
});

export { asiaSportBackendUrl, sportMonkUrl };
