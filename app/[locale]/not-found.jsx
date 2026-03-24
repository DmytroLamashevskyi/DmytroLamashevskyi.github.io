import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-8xl font-extrabold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-white/60 max-w-[500px] mx-auto mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/en">
          <Button variant="outline" size="lg">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
