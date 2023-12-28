interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <div
      className={` bg-slate-700 border border-slate-500  rounded-full  px-3 py-2 text-white cursor-pointer hover:bg-slate-800 transition hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-purple-500 ease-in-out shadow-2xl`}
    >
      {text}
    </div>
  );
};

export default Button;
