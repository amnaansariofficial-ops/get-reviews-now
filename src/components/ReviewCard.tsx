import { Card } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";
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
    <Card className={cn("p-6 max-w-sm backdrop-blur-sm bg-card/95 border-border shadow-lg hover:shadow-xl transition-all", className)}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">{name}</h4>
          {verified && (
            <CheckCircle className="w-5 h-5 text-primary fill-primary" />
          )}
        </div>
        
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {text}
        </p>
        
        <div className="pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">Recent Review</span>
        </div>
      </div>
    </Card>
  );
};
