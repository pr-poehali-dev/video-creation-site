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
      className="group cursor-pointer overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm rounded-2xl transition-all hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {duration}
        </div>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="bg-gradient-to-br from-primary to-accent rounded-full p-4 shadow-2xl animate-scale-in">
              <Icon name="Play" size={32} className="text-white" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-md" />
          <p className="text-sm font-medium text-foreground">{channel}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon name="Eye" size={14} />
          <span>{views}</span>
          <span>•</span>
          <Icon name="Clock" size={14} />
          <span>{timestamp}</span>
        </div>
      </div>
    </Card>
  );
}