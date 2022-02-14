import { useEffect, useState } from "react"
import { FiSun } from "react-icons/fi"
import { BsFillMoonFill } from "react-icons/bs"

export default function ThemeBtn() {
	const [theme, setTheme] = useState("light")

	useEffect(() => {
		setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : theme)

		document.documentElement.setAttribute("data-theme", theme)
	}, [theme])

	const saveTheme = (theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
		document.querySelector("body").style.transition =
			"background 250ms ease-in-out, color 250ms ease-in-out"
	}

	const handleSwitch = () => {
		theme.startsWith("light") ? saveTheme("dark") : saveTheme("light")
	}

	const themeIcon = () => {
		return theme === "light" ? (
			<BsFillMoonFill className='icon' />
		) : (
			<FiSun className='icon' />
		)
	}

	return (
		<div className='theme-wrapper'>
			<button onClick={handleSwitch}>{themeIcon()}</button>
		</div>
	)
}
