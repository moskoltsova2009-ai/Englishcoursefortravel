import { MessageSquare, Gamepad2, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Акцент на практическую речь',
    description: 'Живая речь, а не грамматика ради грамматики.',
  },
  {
    icon: Target,
    title: 'Реальные ситуации',
    description: 'Все ситуации — из реальной жизни путешественника.',
  },
  {
    icon: Gamepad2,
    title: 'Интерактивные задания',
    description: 'Ролевые игры, аудиоситуации, мини-квесты.',
  },
  {
    icon: TrendingUp,
    title: 'Уровень A2–B1',
    description: 'Ребёнок выходит на уровень Pre-Intermediate за курс.',
  },
];

export function WhySpecialSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fbbf24]/10 border border-[#fbbf24]/30 rounded-full mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-sm text-[#fbbf24]">Почему мы</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] to-[#fbbf24] bg-clip-text text-transparent">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = ['cyan', 'orange', 'gold', 'cyan'];
            const color = colors[index % colors.length];
            
            const colorMap: Record<string, { border: string; text: string; bg: string; gradient: string }> = {
              cyan: {
                border: 'border-[#14b8a6]/30',
                text: 'text-[#14b8a6]',
                bg: 'bg-[#14b8a6]/20',
                gradient: 'from-[#14b8a6]/20 to-[#22d3ee]/20',
              },
              orange: {
                border: 'border-[#fb923c]/30',
                text: 'text-[#fb923c]',
                bg: 'bg-[#fb923c]/20',
                gradient: 'from-[#fb923c]/20 to-[#f59e0b]/20',
              },
              gold: {
                border: 'border-[#fbbf24]/30',
                text: 'text-[#fbbf24]',
                bg: 'bg-[#fbbf24]/20',
                gradient: 'from-[#fbbf24]/20 to-[#f59e0b]/20',
              },
            };

            const colorClasses = colorMap[color];

            return (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100`} />
                <div className={`relative bg-[#141927] border ${colorClasses.border} hover:border-opacity-50 rounded-2xl p-6 transition-all h-full flex flex-col items-center text-center`}>
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#cbd5e1] text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
