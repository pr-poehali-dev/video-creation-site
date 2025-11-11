import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: 'Home', label: 'Главная', active: true },
  { icon: 'TrendingUp', label: 'Trending' },
  { icon: 'Compass', label: 'Обзор' },
  { icon: 'ListVideo', label: 'Подписки' },
];

const libraryItems = [
  { icon: 'Library', label: 'Библиотека' },
  { icon: 'History', label: 'История' },
  { icon: 'Clock', label: 'Смотреть позже' },
  { icon: 'Heart', label: 'Понравилось' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[88px] h-[calc(100vh-88px)] w-72 bg-card/50 backdrop-blur-xl border-r border-border/50 overflow-y-auto">
      <nav className="p-4">
        <div className="space-y-2 mb-6">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? 'default' : 'ghost'}
              className={`w-full justify-start gap-4 h-12 text-base rounded-xl transition-all ${
                item.active 
                  ? 'bg-gradient-to-r from-primary to-accent shadow-lg' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6">
          <h3 className="px-4 mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Моя коллекция
          </h3>
          <div className="space-y-2">
            {libraryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-4 h-11 rounded-xl hover:bg-muted/50 transition-all"
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 mt-6">
          <h3 className="px-4 mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Подписки
          </h3>
          <div className="space-y-2">
            {[
              { name: 'TechVision', color: 'from-blue-500 to-cyan-500' },
              { name: 'CreativeHub', color: 'from-purple-500 to-pink-500' },
              { name: 'GameZone', color: 'from-orange-500 to-red-500' },
              { name: 'MusicWave', color: 'from-green-500 to-emerald-500' },
            ].map((channel) => (
              <Button
                key={channel.name}
                variant="ghost"
                className="w-full justify-start gap-3 h-11 rounded-xl hover:bg-muted/50 transition-all"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${channel.color} shadow-md flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{channel.name[0]}</span>
                </div>
                <span>{channel.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
