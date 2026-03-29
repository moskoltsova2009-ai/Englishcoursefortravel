import { ArrowRight, CheckCircle } from 'lucide-react';

export function CTASection() {
  const benefits = [
    'Уверенное общение в путешествиях',
    'Практические навыки для реальной жизни',
    'Максимум внимания в малых группах',
    'Интерактивные уроки с живым преподавателем',
  ];

  return (
    <section id="register" className="py-20 px-6 bg-[#141927]">
      <div className="max-w-4xl mx-auto">
        <div className="relative group">
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14b8a6]/30 via-[#fb923c]/30 to-[#fbbf24]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
          
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-[#1a2137] to-[#0a0e1e] border border-[#fb923c]/40 rounded-3xl p-8 md:p-12">
            {/* Image background */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 rounded-r-3xl overflow-hidden hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1758598737882-4d6d61886bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0dWR5aW5nJTIwdG9nZXRoZXIlMjBoYXBweXxlbnwxfHx8fDE3NzQ3MjUxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Children studying"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb923c]/20 border border-[#fb923c]/30 rounded-full mb-6">
                <span className="text-2xl">👉</span>
                <span className="text-sm text-[#fb923c]">Запишитесь сейчас</span>
              </div>

              <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] via-[#22d3ee] to-[#fbbf24] bg-clip-text text-transparent max-w-xl">
                Следующее путешествие — первое, где ваш ребёнок заговорит по-английски без страха!
              </h2>

              <p className="text-[#cbd5e1] text-lg mb-8 max-w-xl">
                Не упустите возможность дать ребёнку навыки, которые останутся на всю жизнь.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#14b8a6] mt-0.5 flex-shrink-0" />
                    <span className="text-[#cbd5e1] text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fb923c] to-[#fbbf24] text-[#0a0e1e] rounded-xl hover:shadow-2xl hover:shadow-[#fb923c]/50 transition-all duration-300 hover:scale-105">
                <span className="text-lg">Записаться на курс</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <p className="text-[#94a3b8] text-sm mt-6 max-w-xl">
                После нажатия на кнопку вы сможете оставить заявку, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
