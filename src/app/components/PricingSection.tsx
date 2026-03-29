import { Calendar, CreditCard, Users, Clock } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb923c]/10 border border-[#fb923c]/30 rounded-full mb-4">
            <span className="text-2xl">🕒</span>
            <span className="text-sm text-[#fb923c]">Расписание и цены</span>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 bg-gradient-to-r from-[#f8fafc] to-[#fb923c] bg-clip-text text-transparent">
            Расписание и стоимость
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Расписание */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/20 to-[#22d3ee]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[#141927] border border-[#14b8a6]/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#14b8a6]/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#14b8a6]" />
                </div>
                <h3 className="text-2xl">Расписание</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-[#0a0e1e]/50 rounded-xl border border-[#14b8a6]/20">
                  <Clock className="w-5 h-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-1">
                      <span className="text-[#14b8a6]">Четверг, 15:00 (МСК)</span>
                    </p>
                    <p className="text-[#cbd5e1] text-sm">Группа 4–5 класс</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#0a0e1e]/50 rounded-xl border border-[#14b8a6]/20">
                  <Clock className="w-5 h-5 text-[#14b8a6] mt-1 flex-shrink-0" />
                  <div>
                    <p className="mb-1">
                      <span className="text-[#14b8a6]">Пятница, 15:30 (МСК)</span>
                    </p>
                    <p className="text-[#cbd5e1] text-sm">Группа 6–8 класс</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-4 bg-[#14b8a6]/10 rounded-xl border border-[#14b8a6]/30 mt-4">
                  <Users className="w-5 h-5 text-[#14b8a6]" />
                  <p className="text-sm text-[#14b8a6]">
                    Группы маленькие — максимум 6 детей, чтобы каждый получил внимание
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Стоимость */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fb923c]/20 to-[#fbbf24]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-[#141927] border border-[#fb923c]/30 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fb923c]/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#fb923c]" />
                </div>
                <h3 className="text-2xl">Стоимость</h3>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-[#fb923c]/10 to-[#fbbf24]/10 rounded-xl border border-[#fb923c]/30">
                  <p className="text-sm text-[#cbd5e1] mb-2">Полный курс (10 уроков)</p>
                  <p className="text-4xl mb-2">
                    <span className="bg-gradient-to-r from-[#fb923c] to-[#fbbf24] bg-clip-text text-transparent">
                      12 000 ₽
                    </span>
                  </p>
                  <p className="text-sm text-[#fb923c]">Экономия 1 000 ₽</p>
                </div>

                <div className="p-6 bg-[#0a0e1e]/50 rounded-xl border border-[#fb923c]/20">
                  <p className="text-sm text-[#cbd5e1] mb-2">Абонемент за урок</p>
                  <p className="text-3xl text-[#fb923c]">1 300 ₽</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#fb923c]/10 rounded-xl border border-[#fb923c]/30">
                <p className="text-sm text-center">
                  <span className="text-[#fb923c]">💳</span>{' '}
                  <span className="text-[#cbd5e1]">Возможна оплата частями</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Важная информация */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#14b8a6]/20 via-[#fb923c]/20 to-[#fbbf24]/20 rounded-2xl blur-xl" />
          <div className="relative bg-[#141927] border border-[#fbbf24]/30 rounded-2xl p-6 text-center">
            <p className="text-lg">
              <span className="text-2xl mr-2">📢</span>
              <span className="text-[#fbbf24]">Набор открыт!</span>
              <span className="text-[#cbd5e1] ml-2">Места ограничены!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
