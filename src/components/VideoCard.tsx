import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
}

export default function VideoCard({ 
  title, 
  channel, 
  views, 
  timestamp, 
  duration,
  thumbnail 
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-0 bg-transparent transition-all hover:bg-muted/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/90 text-white px-2 py-0.5 rounded text-xs font-medium">
          {duration}
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-black/80 rounded-full p-3">
              <Icon name="Play" size={28} className="text-white" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{channel}</p>
            <p className="text-xs text-muted-foreground">
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
