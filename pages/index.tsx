import type { NextPage } from "next"
import { API_ENDPOINT } from "../lib/api-fetch"

const Home: NextPage = () => {
  return (
    <>
      Zoomflex Home Page
      <div>Backend url: {API_ENDPOINT}</div>
    </>
  )
}

export default Home
