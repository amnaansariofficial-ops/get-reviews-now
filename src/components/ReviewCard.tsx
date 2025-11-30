import { Card } from "@/components/ui/card";
import { Star, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  verified?: boolean;
  delay?: number;
  className?: string;
}

export const ReviewCard = ({ name, rating, text, verified = true, className }: ReviewCardProps) => {
  return (
    <Card className={cn("p-5 bg-white border-0 shadow-2xl rounded-lg", className)}>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-bold text-base text-foreground">{name}</h4>
          <div className="flex items-center gap-1 flex-shrink-0">
            <div className="flex gap-0.5">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            {verified && (
              <BadgeCheck className="w-4 h-4 text-primary ml-0.5" />
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed">
          {text}
        </p>
        
        <div className="flex items-center gap-2 pt-1">
          <div className="w-7 h-7 rounded-sm bg-gray-300"></div>
          <span className="text-xs text-gray-500">Recent Review</span>
        </div>
      </div>
    </Card>
  );
};
