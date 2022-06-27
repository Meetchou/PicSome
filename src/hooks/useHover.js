import { useState, useEffect, useRef } from "react";

function useHover() {
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef(null)

	function enter ()
	{
		setIsHovered(true)
	}

	function leave ()
	{
		setIsHovered(false)
	}

	useEffect(() => {
		const reference = ref.current
		reference.addEventListener("mouseenter", enter)
		reference.addEventListener("mouseleave", leave)

		return () => {
            reference.removeEventListener("mouseenter", enter)
			reference.removeEventListener("mouseleave", leave)
		}
	}, [])

	return {isHovered, ref}
}

export default useHover