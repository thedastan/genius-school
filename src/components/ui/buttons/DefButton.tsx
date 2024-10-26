import { Button, ChakraProps } from '@chakra-ui/react'

interface DefButtonProps extends ChakraProps {
	children: string | JSX.Element
	onClick?: () => void
	type?: 'button' | 'submit'
	disabled?: boolean
	rounded?: string
}
const DefButton = ({
	onClick,
	type = 'button',
	disabled,
	children,
	...props
}: DefButtonProps) => {
	return (
		<Button
			onClick={onClick}
			type={type}
			variant='none'
			w='100%'
			bg='white'
			h='51px'
			rounded='50px'
			color='#00712D'
			fontSize='14px'
			fontWeight='700'
			isDisabled={disabled}
			px='2'
			lineHeight='23.4px'
			{...props}
		>
			{children}
		</Button>
	)
}

export default DefButton
