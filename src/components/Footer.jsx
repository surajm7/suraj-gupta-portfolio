import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white border-t border-white/10 mt-12">
      <div className="container mx-auto max-w-6xl flex flex-col items-center justify-center text-center gap-6">
        {/* Footer text */}
        <p className="text-sm md:text-base text-white/70">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Suraj Gupta</span>. All rights reserved.
        </p>

        {/* Back to Top Button */}
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 shadow-md hover:scale-105"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
