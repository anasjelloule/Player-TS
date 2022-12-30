import Head from 'next/head';
import React from 'react'
import { useRouter } from "next/router";
import Library from './Library';
import Header from './Header';



type AppProps = {
    children: React.ReactNode,
    title: string,
    description: string
};


function Layout({ children, title = "Welcome to my website", description }: Partial<AppProps>):JSX.Element {

    let router: ReturnType<typeof useRouter> = useRouter();


    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <meta name="description" content={sites.description} /> */}
            </Head>
            <Library />
            <Header />
            {children}
        </>
    )
}

export default Layout