import styles from '../styles/Profile.module.css'
import app from '../styles/app.module.css'
import NeuButton from './design/neumorphic/components/button'
import { Permanent_Marker, Dancing_Script } from 'next/font/google'
const boldLogo = Dancing_Script({
  weight: "700",
  subsets: ['latin']
})
const logo = Dancing_Script({
  weight: "400",
  subsets: ['latin']
})
function Profile() {
  //TODO: Avatar img to 3d model viewer
  return <div className={styles.undented +" "+ styles.container}>
    <div className={styles.wrapper}>
      <a href="a">
        <img alt="Avatar" src="favicon.ico" className={styles.avatar}/>
      </a>
      <div
      className={app.nameLogo}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={
                {
                  fontSize: 142,
                  color: "transparent",
                }
              }
              className={[boldLogo.className, styles.gradientText4].join(" ")}
            >
              My
            </h1>
            <h1
              style={
                {
                  color: "transparent",
                  translate: "0em 1.45em",
                  fontSize: 72
                }
              }
              className={[logo.className,  styles.gradientText4].join(" ")}
            >stic</h1>
          </div>
          <div
            style={{
              scale:".5",
              marginTop:"-150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={
                {
                  translate: "0em -1.8em",
                  fontSize: 142,
                  color: "transparent",
                }
              }
              className={[boldLogo.className,  styles.gradientText4].join(" ")}
            >
              Market
            </h1>
          </div>
        <div className={styles.icons}>
          <li>
          <button >
    <img  src="discord.png"></img>
              </button>
              </li>
              <li >
              <button >
          <img  src="instagram.png"></img>
           {/* icon by Prosymbols Premium */}
              </button>
              </li>
              <li >
              <button>
<span className="fab fa-facebook-f"></span>
              </button>
              </li>
              

          </div>
      </div>
    </div>
}

export default Profile;