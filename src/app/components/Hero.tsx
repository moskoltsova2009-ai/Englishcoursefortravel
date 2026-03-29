import { Plane, Users, BookOpen, Clock, CreditCard } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1e] via-[#1e1b4b] to-[#312e81]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#14b8a6]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#fb923c]/20 rounded-full blur-[100px]" />
      </div>

      {/* Hero image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1773379412328-7f101292ab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBzdW5zZXQlMjBob3Jpem9ufGVufDF8fHx8MTc3NDcyNTExMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/20 border border-[#14b8a6]/30 rounded-full mb-6">
          <Plane className="w-4 h-4 text-[#14b8a6]" />
          <span className="text-sm text-[#14b8a6]">Курс английского для путешествий</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#f8fafc] via-[#22d3ee] to-[#fbbf24] bg-clip-text text-transparent leading-tight">
          Английский для путешествий
        </h1>

        <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto mb-8 leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#141927]/80 backdrop-blur-sm border border-[#14b8a6]/30 rounded-lg">
            <Users className="w-5 h-5 text-[#14b8a6]" />
            <span className="text-sm">Макс. 6 детей</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#141927]/80 backdrop-blur-sm border border-[#fb923c]/30 rounded-lg">
            <BookOpen className="w-5 h-5 text-[#fb923c]" />
            <span className="text-sm">10 уроков</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#141927]/80 backdrop-blur-sm border border-[#fbbf24]/30 rounded-lg">
            <Clock className="w-5 h-5 text-[#fbbf24]" />
            <span className="text-sm">2 группы</span>
          </div>
        </div>

        <a 
          href="#register" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#fb923c] to-[#fbbf24] text-[#0a0e1e] rounded-xl hover:shadow-lg hover:shadow-[#fb923c]/50 transition-all duration-300 hover:scale-105"
        >
          Записаться на курс
        </a>
      </div>
    </section>
  );
}
