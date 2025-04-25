
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gear-dark text-white">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-gear-purple">404</h1>
        <p className="text-xl text-gear-neutral mb-6">Oops! We couldn't find the page you're looking for.</p>
        <p className="text-gear-neutral mb-8">
          The page may have been moved, deleted, or never existed in the first place.
        </p>
        <Button asChild className="bg-gear-purple hover:bg-gear-purple-dark">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
