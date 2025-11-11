import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import VideoPlayer from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: 'Как создать современный сайт за 10 минут',
    channel: 'WebDev Pro',
    views: '1.2M просмотров',
    timestamp: '2 дня назад',
    duration: '12:34',
    thumbnail: 'https://cdn.poehali.dev/projects/fa2f9df8-71f3-4ac6-acbb-bf698df7df88/files/f2266fbb-acca-446d-a9ad-affefa16883a.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    likes: 45000,
    dislikes: 1200,
  },
  {
    id: 2,
    title: 'EPIC Gaming Highlights 2024',
    channel: 'ProGamer',
    views: '850K просмотров',
    timestamp: '1 неделю назад',
    duration: '15:22',
    thumbnail: 'https://cdn.poehali.dev/projects/fa2f9df8-71f3-4ac6-acbb-bf698df7df88/files/8516d3cc-0a95-484b-931a-66248fda107c.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    likes: 32000,
    dislikes: 800,
  },
  {
    id: 3,
    title: 'Идеальный рецепт пасты карбонара',
    channel: 'Кулинарный канал',
    views: '2.5M просмотров',
    timestamp: '3 дня назад',
    duration: '8:45',
    thumbnail: 'https://cdn.poehali.dev/projects/fa2f9df8-71f3-4ac6-acbb-bf698df7df88/files/4861b483-7db4-435b-93d2-9bb8cb09b6a7.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    likes: 78000,
    dislikes: 2100,
  },
];

const categories = [
  'Все', 'Музыка', 'Игры', 'Новости', 'Прямые эфиры', 'Подкасты', 
  'Спорт', 'Образование', 'Развлечения', 'Технологии'
];

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const recommendedVideos = videos.filter(v => v.id !== selectedVideo?.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      <Sidebar />
      
      <main className="ml-72 mt-[88px] p-8">
        {!selectedVideo ? (
          <>
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className={`whitespace-nowrap rounded-full px-6 h-10 transition-all ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                      : 'bg-muted/30 hover:bg-muted/60'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...videos, ...videos, ...videos].map((video, idx) => (
                <div key={idx} onClick={() => setSelectedVideo(video)}>
                  <VideoCard {...video} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-[1800px] mx-auto">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => setSelectedVideo(null)}
            >
              ← Назад к видео
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <VideoPlayer
                  videoUrl={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  channel={selectedVideo.channel}
                  views={selectedVideo.views}
                  likes={selectedVideo.likes}
                  dislikes={selectedVideo.dislikes}
                />

                <div className="mt-4 p-4 bg-muted rounded-xl">
                  <h3 className="font-semibold mb-2">Описание</h3>
                  <p className="text-sm text-muted-foreground">
                    Это потрясающее видео покажет вам все, что нужно знать! 
                    Не забудьте подписаться на канал и поставить лайк, если видео было полезным.
                  </p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span className="text-xs bg-background px-2 py-1 rounded">#обучение</span>
                    <span className="text-xs bg-background px-2 py-1 rounded">#полезное</span>
                    <span className="text-xs bg-background px-2 py-1 rounded">#топ</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Рекомендации</h2>
                <div className="space-y-3">
                  {recommendedVideos.map((video) => (
                    <div
                      key={video.id}
                      className="flex gap-2 cursor-pointer group"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden bg-muted">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/90 text-white px-1.5 py-0.5 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{video.channel}</p>
                        <p className="text-xs text-muted-foreground">{video.views}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}