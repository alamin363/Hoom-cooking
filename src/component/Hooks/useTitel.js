import { useEffect } from "react"

const useTitle = title =>{
  useEffect(() =>{
    document.title = `${title} - Sumaiya Bagery`;
  },[title])
}
export default useTitle;