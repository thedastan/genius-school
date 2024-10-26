import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
	subsets: ['latin', 'cyrillic', 'latin-ext', 'greek'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})
export const satoshi = localFont({
	src: [
		{
			path: './Satoshi-Bold.woff',
			weight: '700',
			style: 'normal'
		},

		{
			path: './Satoshi-Light.woff',
			weight: '600',
			style: 'normal'
		},
		{
			path: './Satoshi-Light.woff',
			weight: '500',
			style: 'normal'
		},

		{
			path: './Satoshi-Medium.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './Satoshi-Medium.woff',
			weight: '500',
			style: 'normal'
		},
		{
			path: './Satoshi-Medium.woff',
			weight: '600',
			style: 'normal'
		},
		{
			path: './Satoshi-Variable.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './Satoshi-Regular.woff',
			weight: '400',
			style: 'normal'
		},
		{
			path: './Satoshi-VariableFont.woff',
			weight: '400',
			style: 'normal'
		}
	]
})
