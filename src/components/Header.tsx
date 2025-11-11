import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Icon name="Play" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold hidden sm:block">VideoHub</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-12 bg-muted border-border"
            />
            <Button 
              size="icon" 
              className="absolute right-0 rounded-l-none"
            >
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Icon name="Video" size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Bell" size={24} />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-primary">
            <Icon name="User" size={20} className="text-primary-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
}
