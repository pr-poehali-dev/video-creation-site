import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-lg opacity-50 animate-pulse-slow" />
              <div className="relative bg-gradient-to-br from-primary via-accent to-primary p-3 rounded-2xl shadow-xl">
                <Icon name="Sparkles" size={28} className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                StreamVibe
              </h1>
              <p className="text-xs text-muted-foreground">Discover & Watch</p>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск видео, каналов, плейлистов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-12 rounded-full bg-muted/50 border-border/50 focus:bg-background transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-all">
            <Icon name="Upload" size={22} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-all relative">
            <Icon name="Bell" size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
          </Button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
            <Icon name="User" size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
