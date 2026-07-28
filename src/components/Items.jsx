import { Link, useNavigate } from "react-router"

export default function CatItem({ item }) {

    const navigate = useNavigate();

    <div onClick={() => navigate(`/cats/${item.id}`)}>
        <img src={item.url} alt="" />
    </div>
    
}