import { IconType } from 'react-icons'
import { BsGlobe } from 'react-icons/bs'

type DropdownProps = {
	name: string
	Icon: IconType
}[]

export const DropdownData: DropdownProps = [
	{
		name: 'en-US',
		Icon: BsGlobe,
	},
	{
		name: 'es-ES',
		Icon: BsGlobe,
	},
	{
		name: 'pt-BR',
		Icon: BsGlobe,
	},
]
