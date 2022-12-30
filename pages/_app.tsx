import type { AppProps } from 'next/app'
import './../Styles/global.scss'
import React from 'react'
import { Provider } from 'react-redux'


import Layout from '../Components/Layout'

import store from './../Store'

function MyApp({ Component, pageProps }: AppProps): any {
  const Comp: JSX.Element =
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  return Comp
}

export default MyApp;