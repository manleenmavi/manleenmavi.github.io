const WaveConstructionPage = (props: {
  /** By default it will color will be white */
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={props.className || ""}
    >
      <path
        fill={props.color || "#fff"}
        fillOpacity="1"
        d="M0,0L30,21.3C60,43,120,85,180,117.3C240,149,300,171,360,160C420,149,480,107,540,117.3C600,128,660,192,720,218.7C780,245,840,235,900,224C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,112C1320,96,1380,96,1410,96L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
      ></path>
    </svg>
  );
};

export default WaveConstructionPage;
