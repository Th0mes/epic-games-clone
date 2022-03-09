import type { NextPage } from 'next'
import Head from 'next/head'

const Home: React.FC<NextPage> = () => {
	return (
		<div>
			<Head>
				<title>Epic Games Store</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-4xl font-bold">Hello Thømes</h1>
		</div>
	)
}

export default Home
