import { Plane, Mail, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0e1e] border-t border-[#14b8a6]/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#14b8a6] to-[#22d3ee] rounded-xl flex items-center justify-center">
                <Plane className="w-5 h-5 text-[#0a0e1e]" />
              </div>
              <span className="text-xl bg-gradient-to-r from-[#14b8a6] to-[#fbbf24] bg-clip-text text-transparent">
                Travel English
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm">
              Курс английского для путешествий. Научим вашего ребёнка свободно общаться за границей.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#14b8a6]">Быстрые ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors">
                  О курсе
                </a>
              </li>
              <li>
                <a href="#" className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors">
                  Программа
                </a>
              </li>
              <li>
                <a href="#" className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors">
                  Стоимость
                </a>
              </li>
              <li>
                <a href="#register" className="text-[#cbd5e1] hover:text-[#14b8a6] transition-colors">
                  Записаться
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[#fb923c]">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[#cbd5e1]">
                <Mail className="w-4 h-4 text-[#fb923c]" />
                <span>info@travelenglish.ru</span>
              </li>
              <li className="flex items-center gap-2 text-[#cbd5e1]">
                <Phone className="w-4 h-4 text-[#fb923c]" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-[#cbd5e1]">
                <Globe className="w-4 h-4 text-[#fb923c]" />
                <span>Онлайн по всему миру</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#14b8a6]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94a3b8] text-sm">
              © 2026 Travel English. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-[#94a3b8] hover:text-[#14b8a6] transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-[#94a3b8] hover:text-[#14b8a6] transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
