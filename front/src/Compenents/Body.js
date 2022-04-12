import {useEffect,useState} from 'react'


const Body = () => {
  const [error,setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([])
  const name="hamza"
  useEffect(()=>{
    fetch("/student?name="+name).then(res=>res.json()).then(result=>{
      setItems(result.value)
      setIsLoaded(true)
      console.log(result)
    })
  },[])

  if(error){
    return(<div>
      Error: {error.message}
    </div>)
  }else if(!isLoaded){
    return(<div>Is loading ...</div>)
  }else{
    return(
      <div>
        <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default Body