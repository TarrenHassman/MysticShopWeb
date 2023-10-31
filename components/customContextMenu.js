import { useState } from "react"
import { Menu } from "./menu";


const initialContextMenu = {
  x: 0,
  y: 0,
  visible: false
}
export function ContextMenu (){

  const [contextMenu, setContextMenu] = useState(initialContextMenu);

  return(
    <div>

      {/* Context Menu */}
      {contextMenu.visible && <Menu x={contextMenu.x} y={contextMenu.y} />}
      <div onContextMenu={(e) =>{
         e.preventDefault()
         setContextMenu({
           x: e.pageX,
           y: e.pageY,
           visible: true
         })

        }} 
      // className={styles.container}
      >
        <img
        src="/images/AetherLogo.png"
        width={100}
        height={100}
        // className={styles.logo}
        >
        </img>
      </div>
    </div>
  )
}