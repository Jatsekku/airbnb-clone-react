import './Card.css'
import star from '../assets/star.png'

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card--container">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.item.coverImg}/>
            <div className="card-stats">
                <img className="card--star" src={star}/>
                <span>{props.item.stats.rating}</span>
                <span className="card--gray">({props.item.stats.reviewCount}) • </span>
                <span className="card--gray">{props.item.location}</span>
                <p className="card--title">{props.item.title}</p>
                <p> <span className="card--price">From ${props.item.price}</span> / person </p>
            </div>
        </div>
    )
}