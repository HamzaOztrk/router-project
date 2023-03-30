import { useNavigate, useLocation } from "react-router-dom" 

const PersonDetail = () => {

  const {state: person} = useLocation()
  const navigate = useNavigate()
  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded mb-3" src={person?.avatar} alt="img" />
      <p>{person?.email}</p>
      <button onClick={()=> navigate(`/`)} className="btn btn-success me-2">
        GO BACK
      </button>
    </div>
  )
}

export default PersonDetail