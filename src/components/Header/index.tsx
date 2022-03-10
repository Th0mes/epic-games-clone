import { Link } from '@components'
import { Dropdown } from './Dropdown'
import { NavData } from './NavData'
import { SiEpicgames } from 'react-icons/si'
import { BsPersonPlus } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

export const Header = () => {
	return (
		<header className="flex justify-between items-center h-14 bg-neutral-700 uppercase text-xs text-gray-300">
			<div className="flex items-center h-full">
				<Link
					to="/"
					className="flex items-center h-full px-4 hover:text-white transition-all"
				>
					<SiEpicgames className="text-4xl" />
				</Link>
				<ul className="hidden md:flex h-full">
					{NavData.map((item, index) => (
						<Link to={item.url} key={index}>
							<li className="flex items-center h-full px-4 hover:border-b-4 border-sky-600 hover:text-white transition-all">
								{item.name}
							</li>
						</Link>
					))}
				</ul>
			</div>
			<FaBars className="flex md:hidden text-4xl" />
			<div className="hidden md:flex items-center h-full">
				<Dropdown />
				<Link
					to="/login"
					className="flex items-center h-full px-4 space-x-2 hover:border-b-4 border-sky-600 hover:text-white transition-all"
				>
					<BsPersonPlus className="text-xl" />
					<p>sign in</p>
				</Link>
				<a
					href="/favicon.ico"
					className="flex items-center bg-sky-600 h-full px-4 hover:bg-sky-500 transition-all"
					download
				>
					available on pc/mac only
				</a>
			</div>
		</header>
	)
}
