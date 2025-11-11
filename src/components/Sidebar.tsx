import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: 'Home', label: 'Главная', active: true },
  { icon: 'Compass', label: 'Обзор' },
  { icon: 'ListVideo', label: 'Подписки' },
];

const libraryItems = [
  { icon: 'Library', label: 'Библиотека' },
  { icon: 'History', label: 'История' },
  { icon: 'Clock', label: 'Смотреть позже' },
  { icon: 'ThumbsUp', label: 'Понравившиеся' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-background border-r border-border overflow-y-auto">
      <nav className="p-2">
        <div className="space-y-1 mb-4">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? 'secondary' : 'ghost'}
              className="w-full justify-start gap-4"
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <h3 className="px-3 mb-2 text-sm font-semibold text-muted-foreground">
            БИБЛИОТЕКА
          </h3>
          <div className="space-y-1">
            {libraryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-4"
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4 mt-4">
          <h3 className="px-3 mb-2 text-sm font-semibold text-muted-foreground">
            ПОДПИСКИ
          </h3>
          <div className="space-y-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Button
                key={i}
                variant="ghost"
                className="w-full justify-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent" />
                <span>Канал {i}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
