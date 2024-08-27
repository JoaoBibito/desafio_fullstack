import "./Loading.css";
import {useLottie} from "lottie-react";
import loading from "../.././../../public/Animations/loading.json";

const Loading = () => {
  const options = {
    animationData: loading,
    loop: true,
  };

  const {View} = useLottie(options, {
    backgroundColor: "transparent",
  });
  return (
    <div className='container_loader'>
      <div className='animation_loader'>{View}</div>
    </div>
  );
};

export default Loading;
