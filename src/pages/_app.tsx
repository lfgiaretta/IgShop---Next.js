import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";

import { Container, Header } from "@/styles/pages/app";
import Logo from '../assets/logo.svg';

import Image from 'next/image';

globalStyles();

export default function MyApp({Component, pageProps}: AppProps) {
    return (
    <Container>
        <Header>
            <Image src={Logo} alt="" />
        </Header>
        <Component {...pageProps} />
    </Container>

    )
}

