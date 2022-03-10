import { Link } from '@components'
import { BiChevronUpSquare } from 'react-icons/bi'
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiEpicgames, SiUnrealengine } from 'react-icons/si'

export const Footer = () => {
	return (
		<footer className="bg-neutral-700 text-gray-300 px-20 py-10">
			<div className="flex justify-between items-center">
				<ul className="flex space-x-4 text-3xl">
					<li>
						<a href="https://www.facebook.com/">
							<FaFacebookSquare className="hover:text-sky-600 transition-all" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/">
							<FaTwitter className="hover:text-sky-600 transition-all" />
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/">
							<FaYoutube className="hover:text-sky-600 transition-all" />
						</a>
					</li>
				</ul>
				<BiChevronUpSquare className="text-4xl hover:text-sky-600 transition-all cursor-pointer" />
			</div>
			<div className="divide-y-2 my-8">
				<div className="flex w-1/2 pb-4">
					<div>
						<h3 className="font-bold pb-2">Resources</h3>
						<div className="grid grid-cols-3 gap-4">
							<ul>
								<li>Support-A-Creator</li>
								<li>Publish on Epic Games</li>
								<li>Careers</li>
								<li>Company</li>
							</ul>
							<ul>
								<li>Fan Art Policy</li>
								<li>UX Research</li>
								<li>Store EULA</li>
							</ul>
							<ul>
								<li>Online Services</li>
								<li>Community Rules</li>
								<li>Epic Newsroom</li>
							</ul>
						</div>
					</div>
					<div>
						<h3 className="font-bold pb-2">Made By Epic Games</h3>
						<div className="grid grid-cols-2 gap-4">
							<ul>
								<li>Battle Breakers</li>
								<li>Fortnite</li>
								<li>Infinity Blade</li>
							</ul>
							<ul>
								<li>Robo Recall</li>
								<li>Shadow Complex</li>
								<li>Unreal Tournament</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="w-1/2 text-xs pt-4">
					© 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
					Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
					the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
					logo are trademarks or registered trademarks of Epic Games, Inc. in
					the United States of America and elsewhere. Other brands or product
					names are the trademarks of their respective owners. Non-US
					transactions through Epic Games International, S.à r.l.
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="space-x-4 font-medium">
					<Link to="#">Terms of Service</Link>
					<Link to="#">Privacy Settings</Link>
					<Link to="#">Store Refund Policy</Link>
				</div>
				<div className="flex items-center text-3xl space-x-2">
					<Link
						to="/"
						className="hover:text-white  focus:text-sky-600 transition-all"
					>
						<SiEpicgames />
					</Link>
					<a
						href="https://www.unrealengine.com/"
						className="hover:text-white focus:text-sky-600 transition-all"
						target="_blank"
						rel="noreferrer"
					>
						<SiUnrealengine />
					</a>
				</div>
			</div>
		</footer>
	)
}
