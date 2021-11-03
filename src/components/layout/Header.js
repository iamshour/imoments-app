import logo from "images/logo.png"
import { useEffect, useState } from "react"
//icons
import { FiSun } from "react-icons/fi"
import { BsFillMoonFill } from "react-icons/bs"

const Header = () => {
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		document.documentElement.setAttribute(
			"data-theme",
			localStorage.getItem("theme")
		)

		setTheme(localStorage.getItem("theme"))
	}, [])

	const saveTheme = (theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	const switcher = () => {
		if (theme === "light") {
			saveTheme("dark")
		} else {
			saveTheme("light")
		}
	}

	return (
		<header>
			<div className='logo-wrapper'>
				<img src={logo} alt='imoments logo' />
			</div>
			<div className='theme-wrapper'>
				<button onClick={switcher}>
					{theme === "light" ? (
						<BsFillMoonFill className='icon' />
					) : (
						<FiSun className='icon' />
					)}
				</button>
			</div>
		</header>
	)
}

export default Header
