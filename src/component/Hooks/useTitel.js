import { useEffect } from "react"

const useTitle = title =>{
  useEffect(() =>{
    document.title = `${title} - Sumaiya's Kitchen`;
  },[title])
}
export default useTitle;