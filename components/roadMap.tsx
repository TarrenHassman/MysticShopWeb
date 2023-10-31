import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from "../styles/Home.module.css"
import { Dancing_Script, Permanent_Marker } from 'next/font/google';


const marker = Permanent_Marker(
  {
    weight: "400",
    subsets: ['latin']
  }
)
const boldLogo = Dancing_Script({
  weight: "700",
  subsets: ['latin']
})

export default function RoadMap() {
  return (
    <div >
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="April - June"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Current Unity Implementation</h3>
          <h4 className={[boldLogo.className, styles.gradientText4].join(" ")}></h4>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Character Movement</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Multiplayer enabled</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Wallet Connect</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Initial Building system</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Decentralized save/load</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Base list for sale function</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          date="October"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Project Avatar</h3>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Web Portal</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Token Bount Account Creator</p>
          <p className={[marker.className, styles.gradientText4].join(" ")}> Batched NFT Transfer</p>
          <p style={{
            color: "transparent",
          }} className={[marker.className, styles.gradientText4].join(" ")}>Soulbound Avatar Creator</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          date="TBA"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Project Barter</h3>
          <p className={[marker.className, styles.gradientText4].join(" ")}>Batched Drag & Drop Trade System for Token Bound Accounts</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          date="TBA"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Project Enchantment</h3>
          <p className={[marker.className, styles.gradientText4].join(" ")}>Token Bound Account System for Item stats</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          date="TBA"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Project Materialization</h3>
          <p className={[marker.className, styles.gradientText4].join(" ")}>White Labled Manufacturing for NFTs (Initially clothing)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ backgroundColor: ' #4a0b6cac', color: '#fff' }}
          date="TBA"
          dateClassName={boldLogo.className}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className={[boldLogo.className, styles.gradientText4].join(" ")} style={{
            fontSize: 48,
            color: "transparent",
          }}>Project Virtualization</h3>
          <p className={[marker.className, styles.gradientText4].join(" ")}>Creating Virtual Counterpart of Real world goods (Lidar scans)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}