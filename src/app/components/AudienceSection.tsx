import { GraduationCap } from 'lucide-react';

export function AudienceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/30 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-[#14b8a6]" />
            <span className="text-sm text-[#14b8a6]">Для кого курс</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] to-[#22d3ee] bg-clip-text text-transparent">
            Для кого курс
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Группа 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 to-[#22d3ee]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[#141927] border border-[#14b8a6]/30 rounded-2xl p-8 hover:border-[#14b8a6]/50 transition-all">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#14b8a6] to-[#22d3ee] text-[#0a0e1e] rounded-lg mb-4">
                Первая группа
              </div>
              <h3 className="text-2xl mb-2">4–5 класс</h3>
              <p className="text-[#cbd5e1]">
                Для детей 10-11 лет, которые начинают изучать английский и хотят чувствовать себя уверенно в путешествиях.
              </p>
              <div className="mt-6 pt-6 border-t border-[#14b8a6]/20">
                <p className="text-sm text-[#14b8a6]">📅 Четверг, 15:00 (МСК)</p>
              </div>
            </div>
          </div>

          {/* Группа 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/20 to-[#fbbf24]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[#141927] border border-[#fb923c]/30 rounded-2xl p-8 hover:border-[#fb923c]/50 transition-all">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#fb923c] to-[#fbbf24] text-[#0a0e1e] rounded-lg mb-4">
                Вторая группа
              </div>
              <h3 className="text-2xl mb-2">6–8 класс</h3>
              <p className="text-[#cbd5e1]">
                Для подростков 12-14 лет, которые хотят улучшить разговорные навыки и свободно общаться за границей.
              </p>
              <div className="mt-6 pt-6 border-t border-[#fb923c]/20">
                <p className="text-sm text-[#fb923c]">📅 Пятница, 15:30 (МСК)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
