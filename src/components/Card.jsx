import './Card.css'
import star from '../assets/star.png'

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--image" src={props.img}/>
            <div className="card-stats">
                <img className="card--star" src={star}/>
                <span>{props.rating}</span>
                <span className="card--gray">({props.reviewCount}) • </span>
                <span className="card--gray">{props.country}</span>
                <p className="card--title">{props.title}</p>
                <p> <span className="card--price">From ${props.price}</span> / person </p>
            </div>
        </div>
    )
}