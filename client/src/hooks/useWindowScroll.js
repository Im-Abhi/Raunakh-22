import { useLayoutEffect, useState } from 'react'

function useWindowScroll() {
    const [size, setSize] = useState(0)
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.scrollY)
        }

        window.addEventListener('scroll', updateSize)
        updateSize()
        return () => window.removeEventListener('scroll', updateSize)
    }, [])
    return size
}

export default useWindowScroll