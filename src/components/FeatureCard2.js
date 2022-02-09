function FeatureCards2(props) {
    const className= "FeatureCard2 level" +props.level 
    return (
      <div>
      <div className={className}>
        <div>
          <img src={props.icon} alt="icon" className="w-[120px] ml-[-100px]"/>
          <h3>{props.title}</h3>
          <p className="">{props.text}</p>
        </div>
      </div>
      </div>
    );
  }
  
  export default FeatureCards2;
  