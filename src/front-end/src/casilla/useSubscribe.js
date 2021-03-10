import { useEffect } from "react"

const useObserver = observer => 
    useEffect(() => {
        observer.subscribe()
        return () => observer.unsubscribe()
    } ,[])


export default useObserver