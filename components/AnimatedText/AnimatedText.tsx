type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => (
  <div className="wrapper overflow-hidden text-left h-[48px] flex items-center font-bold text-sm bg-black text-white max-w-[100vw]">
    <span className="animate-move-x absolute whitespace-nowrap">{text}</span>
  </div>
);

export default AnimatedText;
