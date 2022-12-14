import './Hero.css'
import photo_grid from '../assets/photo-grid.png'

export default function() {
    return (
        <section className="hero--container">
            <img src={photo_grid} className="hero--photo"/>
            <h1 className="hero--header">
                Online Experiences
            </h1>
            <p className="hero--text">
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}