
import { Link } from 'react-router-dom';

interface LogoProps {
  small?: boolean;
}

const Logo = ({ small }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <div className={`relative ${small ? 'w-10 h-10' : 'w-16 h-16'} rounded-full bg-amber-400 flex items-center justify-center`}>
        <div className={`absolute inset-0.5 rounded-full border-2 border-white flex items-center justify-center`}>
          <span className={`font-playfair font-bold italic ${small ? 'text-lg' : 'text-xl'} text-center leading-tight`}>
            Yummi<br />Tummy
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
