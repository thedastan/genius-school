import { ChakraProps, Heading } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title = ({
	children,
	fontWeight = '500',
	fontSize = '56px',
	color = '#000000',
	...props
}: Props) => {
	return (
		<Heading
			as='h1'
			{...props}
			color={color}
			fontWeight={fontWeight}
			fontSize={fontSize}
		>
			{children}
		</Heading>
	)
}

export default Title
