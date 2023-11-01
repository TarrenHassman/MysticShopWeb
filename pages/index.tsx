import styles from '../styles/app.module.css';
import Profile from './Profile';
import GlassProfile from './GlassProfile';
import { NextPage } from "next";
import RoadMapCards from './RoadmapCards';
import AvatarEditor from './AvatarEditor';

const Home: NextPage = () => {
  return (
    <div className={styles.App} >
    {/* <div className={styles.neuContainer} >
    <div  className={styles.roadMap}>
    <RoadMapCards/>
    </div>
    </div> */}
    <div className={styles.glassContainer} >
    <Profile />
      <AvatarEditor />
    </div>
    <GlassProfile />
    {/* <div className={styles.avatarContainer}>
    <AvatarEditor />
    </div> */}
   
  </div>
  );
};

export default Home;
