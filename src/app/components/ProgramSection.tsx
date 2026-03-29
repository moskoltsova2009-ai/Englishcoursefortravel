import { Plane, Hotel, UtensilsCrossed, MapPin, AlertCircle, Compass, Users as UsersIcon, Award } from 'lucide-react';

const modules = [
  {
    number: '1',
    icon: Plane,
    title: 'Аэропорт без стресса',
    description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
    result: 'Уверенность уже в первые часы за границей.',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1758669246636-17a5f6d972ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzc0NjkyMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '2',
    icon: Hotel,
    title: 'В отеле: заселение и помощь',
    description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
    result: 'Практика вежливых фраз и повседневной лексики.',
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1774192621035-20d11389f781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGx1eHVyeXxlbnwxfHx8fDE3NzQ3MjUxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '3',
    icon: UtensilsCrossed,
    title: 'Кафе и рестораны',
    description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
    result: 'Развитие гастрономического словаря и уверенности в общении.',
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1671508658503-6d9cb57e662d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzQ3MjUxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '4',
    icon: MapPin,
    title: 'На улице: ориентирование и просьбы',
    description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
    result: 'Понимание устной речи и произношения в реальных ситуациях.',
    color: 'cyan',
    image: 'https://images.unsplash.com/photo-1766862871844-b9c47ee9ebf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbmF2aWdhdGlvbnxlbnwxfHx8fDE3NzQ3MjUxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    number: '5',
    icon: AlertCircle,
    title: 'Экстренные случаи',
    description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
    result: 'Важные фразы, которые могут спасти отпуск.',
    color: 'orange',
  },
  {
    number: '6',
    icon: Compass,
    title: 'Туризм и развлечения',
    description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
    result: 'Погружение в культурный контекст через язык.',
    color: 'gold',
  },
  {
    number: '7',
    icon: UsersIcon,
    title: 'Дружба в путешествиях',
    description: 'Как познакомиться с другими детьми или подростками за границей.',
    result: 'Игровая практика диалогов и неформального общения.',
    color: 'cyan',
  },
  {
    number: '8',
    icon: Award,
    title: 'Дипломный проект: «Мой идеальный отпуск»',
    description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
    result: 'Развитие связной речи и творческого самовыражения.',
    color: 'orange',
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    cyan: {
      border: 'border-[#14b8a6]/30',
      hoverBorder: 'hover:border-[#14b8a6]/50',
      bg: 'bg-[#14b8a6]/10',
      text: 'text-[#14b8a6]',
      iconBg: 'bg-[#14b8a6]/20',
      gradient: 'from-[#14b8a6]/20 to-[#22d3ee]/20',
    },
    orange: {
      border: 'border-[#fb923c]/30',
      hoverBorder: 'hover:border-[#fb923c]/50',
      bg: 'bg-[#fb923c]/10',
      text: 'text-[#fb923c]',
      iconBg: 'bg-[#fb923c]/20',
      gradient: 'from-[#fb923c]/20 to-[#f59e0b]/20',
    },
    gold: {
      border: 'border-[#fbbf24]/30',
      hoverBorder: 'hover:border-[#fbbf24]/50',
      bg: 'bg-[#fbbf24]/10',
      text: 'text-[#fbbf24]',
      iconBg: 'bg-[#fbbf24]/20',
      gradient: 'from-[#fbbf24]/20 to-[#f59e0b]/20',
    },
  };
  return colors[color as keyof typeof colors];
};

export function ProgramSection() {
  return (
    <section className="py-20 px-6 bg-[#141927]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#fb923c]" />
            <span className="text-sm text-[#fb923c]">Программа курса</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] to-[#fb923c] bg-clip-text text-transparent">
            Программа курса
          </h2>
          <p className="text-[#cbd5e1] max-w-2xl mx-auto">
            8 интерактивных модулей, охватывающих все аспекты путешествия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const colorClasses = getColorClasses(module.color);

            return (
              <div key={module.number} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100`} />
                <div className={`relative bg-[#0a0e1e] border ${colorClasses.border} ${colorClasses.hoverBorder} rounded-2xl p-6 transition-all h-full flex flex-col`}>
                  {module.image && (
                    <div className="mb-4 rounded-xl overflow-hidden h-48">
                      <img 
                        src={module.image} 
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colorClasses.iconBg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`inline-block px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-lg text-sm mb-2`}>
                        Модуль {module.number}
                      </div>
                      <h3 className="text-xl mb-2">{module.title}</h3>
                    </div>
                  </div>

                  <p className="text-[#cbd5e1] mb-4 flex-1">
                    {module.description}
                  </p>

                  <div className={`pt-4 border-t ${colorClasses.border}`}>
                    <p className={`text-sm ${colorClasses.text} flex items-start gap-2`}>
                      <span>👉</span>
                      <span>{module.result}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
