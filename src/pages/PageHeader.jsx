import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav className="bg-rose-500 text-white p-4">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm md:text-base">
          <li>
            <Link to="/" className="flex items-center hover:text-rose-200 transition-colors">
              <Home className="w-4 h-4 mr-1" />
            </Link>
          </li>
          <li>
            <span className="mx-2 text-rose-200">&gt;</span>
          </li>
          <li>
            <Link to="/panchang" className="hover:text-rose-200 transition-colors">
              Panchang
            </Link>
          </li>
          <li>
            <span className="mx-2 text-rose-200">&gt;</span>
          </li>
          <li>
            <Link to="/panchang/today" className="hover:text-rose-200 transition-colors">
              Today's Panchang
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;