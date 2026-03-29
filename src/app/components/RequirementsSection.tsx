import { Monitor, Headphones, Wifi, Video } from 'lucide-react';

const requirements = [
  {
    icon: Monitor,
    title: 'Компьютер или ноутбук',
    description: 'Стационарный компьютер или ноутбук',
  },
  {
    icon: Headphones,
    title: 'Наушники и микрофон',
    description: 'Для качественного общения',
  },
  {
    icon: Wifi,
    title: 'Стабильный интернет',
    description: 'Для проведения онлайн-уроков',
  },
  {
    icon: Video,
    title: 'Zoom',
    description: 'Установленная программа для видеозвонков',
  },
];

export function RequirementsSection() {
  return (
    <section className="py-20 px-6 bg-[#141927]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-4">
            <span className="text-2xl">💻</span>
            <span className="text-sm text-[#14b8a6]">Технические требования</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] to-[#14b8a6] bg-clip-text text-transparent">
            Что потребуется
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 to-[#22d3ee]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative bg-[#0a0e1e] border border-[#14b8a6]/30 hover:border-[#14b8a6]/50 rounded-2xl p-6 transition-all h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-[#14b8a6]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#14b8a6]" />
                  </div>
                  <h3 className="text-lg mb-2">{req.title}</h3>
                  <p className="text-[#cbd5e1] text-sm">{req.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
