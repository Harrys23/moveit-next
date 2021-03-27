import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"

import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
