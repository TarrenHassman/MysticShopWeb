import styles from '../styles/RoadmapCard.module.css'
import neumorphic from './design/neumorphic/undented.module.css'
function RoadmapCard({title, description, src}) {
  return (
    <div
      className={styles.roadmapCard + " " + neumorphic.undented}>
        <input type='radio' name='slide' className={styles.slide}/>
      <div className={styles.roadmapImg}>
        <img src={src} />
      </div>
      <div
        className={styles.roadmapTitle + ' ' + styles.gradientText4}>
        <h1>{title}</h1>
      </div>
      <div
       className={styles.roadmapDescription+ ' ' + styles.gradientText4}>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default RoadmapCard;