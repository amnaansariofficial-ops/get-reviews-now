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
    <Card className={cn("p-6 backdrop-blur-sm bg-white border-0 shadow-xl", className)}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h4 className="font-bold text-lg text-foreground">{name}</h4>
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            {verified && (
              <BadgeCheck className="w-5 h-5 text-primary" />
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed">
          {text}
        </p>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gray-200"></div>
          <span className="text-xs font-semibold text-muted-foreground">Recent Review</span>
        </div>
      </div>
    </Card>
  );
};
