import type { AppProps } from 'next/app'
import './../Styles/global.scss'
import React, { useState, useRef } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';

import Layout from '../Components/Layout'
import Player from '../Components/Player'
import store, { RootState, MusicObjectInterface } from './../Store'



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Comp: JSX.Element =
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Player />
      </Layout>
    </Provider>
  return Comp
}

export default MyApp;