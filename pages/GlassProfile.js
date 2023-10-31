import { ConnectWallet } from '@thirdweb-dev/react'
import styles from '../styles/GlassProfile.module.css'
import neumorphic from './design/neumorphic/undented.module.css'
function GlassProfile() {
  const expand = (e) => {
    document.getElementById("glassProfile").classList.toggle(styles.open)
    document.getElementById("glassProfile").classList.toggle(styles.close)
  }
  return <div className= {styles.container1 + " " + styles.close + " " + neumorphic.undented} id="glassProfile">
    <div className={styles.wrapper1}>
      <a href="a">
        <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
      </a>
      <button className={styles.collapseArrow} onClick={expand}>
        <img src="expand.svg" />
      </button>
      <div className={styles.text1}>
        <div className={styles.icons1}>
          <li >
            <p>      <ConnectWallet className={styles.connectWallet} modalSize={"compact"}></ConnectWallet></p>
            <button>
              <img src="balance.svg" ></img>

            </button>
          </li>
          <li >
            <p>Inventory</p>
            <button >
            <img src="group.svg" ></img>
            </button>
          </li>
          <li >
            <p>Trade Requests</p>
            <button >
            <img src="cart.svg" ></img>
            </button>
          </li>
          <li >
            <p>World</p>
            <button >
            <img src="world.svg" ></img>
            </button>
          </li>
          <li >
            <p>Shopping Cart</p>
            <button >
            <img src="cart.svg" ></img>
            </button>
          </li>
        </div>
      </div>
    </div>

  </div>
}
export default GlassProfile