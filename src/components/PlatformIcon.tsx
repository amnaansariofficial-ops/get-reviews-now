import googleLogo from "@/assets/platforms/google.png";
import facebookLogo from "@/assets/platforms/facebook.svg";

interface PlatformIconProps {
  platform: string;
  className?: string;
}

export const PlatformIcon = ({ platform, className = "" }: PlatformIconProps) => {
  const iconConfig: Record<string, { bg: string; content: React.ReactNode }> = {
    "Google": {
      bg: "bg-white border-2 border-primary/50",
      content: <img src={googleLogo} alt="Google" className="w-6 h-6" />
    },
    "Google Local Guide": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-2xl">📍</span>
    },
    "TrustPilot": {
      bg: "bg-[#00B67A]",
      content: <span className="text-white text-xl">★</span>
    },
    "Google GPS": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-[#34A853] text-2xl">📍</span>
    },
    "Glassdoor": {
      bg: "bg-[#0CAA41]",
      content: <span className="text-white font-bold text-lg">🚪</span>
    },
    "Facebook": {
      bg: "bg-[#1877F2]",
      content: <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
    },
    "Google LSA": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-[#00A550] font-bold text-2xl">✓</span>
    },
    "Zillow": {
      bg: "bg-[#006AFF]",
      content: <span className="text-white font-black text-xl">Z</span>
    },
    "Thumbtack": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-[#009FD9] font-black text-xl">T</span>
    },
    "Houzz": {
      bg: "bg-[#4DBC8C]",
      content: <span className="text-white font-black text-xl">h</span>
    },
    "Home Advisor": {
      bg: "bg-[#F89939]",
      content: <span className="text-white text-xl">🏠</span>
    },
    "Google Playstore": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-xl">▶️</span>
    },
    "Indeed": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-[#2164F3] font-bold text-[9px]">indeed</span>
    },
    "TrustPilot Verified": {
      bg: "bg-[#00B67A]",
      content: <span className="text-white text-xl">★</span>
    },
    "Home Star": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-primary text-xl">⭐</span>
    },
    "Booking": {
      bg: "bg-[#003580]",
      content: <span className="text-white font-black text-lg">B.</span>
    },
    "BBB": {
      bg: "bg-[#005A8B]",
      content: <span className="text-white font-black text-[10px]">BBB</span>
    },
    "Tripadvisor": {
      bg: "bg-[#34E0A1]",
      content: <span className="text-xl">🦉</span>
    },
    "WebMD": {
      bg: "bg-white border-2 border-primary/50",
      content: <span className="text-[#3E7CBB] font-bold text-[8px]">WebMD</span>
    },
    "Product": {
      bg: "bg-[#DA552F]",
      content: <span className="text-white font-black text-xl">P</span>
    },
  };

  const config = iconConfig[platform] || { bg: "bg-gray-200", content: platform[0] };

  return (
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${config.bg} ${className}`}>
      {config.content}
    </div>
  );
};
