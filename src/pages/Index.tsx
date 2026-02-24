import { Hero } from "@/components/Hero";

const stats = [
  { value: "$50M+", label: "Под управлением" },
  { value: "30+", label: "Портфельных компаний" },
  { value: "5x", label: "Средний возврат" },
  { value: "12", label: "Лет на рынке" },
];

const portfolio = [
  { name: "AutoRent Pro", stage: "Series A", sector: "Mobility", growth: "+340%" },
  { name: "FleetOS", stage: "Seed", sector: "SaaS", growth: "+210%" },
  { name: "DriveX", stage: "Series B", sector: "Marketplace", growth: "+580%" },
  { name: "CarShare Hub", stage: "Seed", sector: "Sharing Economy", growth: "+170%" },
  { name: "MotoLogic", stage: "Pre-Seed", sector: "IoT", growth: "+90%" },
  { name: "ParkNet", stage: "Series A", sector: "Infra", growth: "+260%" },
];

const process = [
  { step: "01", title: "Заявка", desc: "Отправьте pitch deck и короткое описание проекта через форму" },
  { step: "02", title: "Анализ", desc: "Команда Kill Net проверяет продукт, рынок и команду за 2 недели" },
  { step: "03", title: "Встреча", desc: "Личная встреча с партнёрами фонда и обсуждение условий" },
  { step: "04", title: "Сделка", desc: "Финализируем условия и начинаем совместную работу" },
];

export default function Index() {
  return (
    <>
      <Hero />

      {/* Stats */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-sentient mb-2">{s.value}</div>
                <div className="font-mono text-sm text-foreground/50 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-t border-white/10">
        <div className="container max-w-3xl">
          <p className="font-mono text-xs text-foreground/40 uppercase mb-6">О фонде</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Мы ставим на основателей,<br />
            <i className="font-light">а не на тренды</i>
          </h2>
          <p className="font-mono text-base text-foreground/60 leading-relaxed">
            Kill Net — венчурный фонд, который инвестирует в стартапы ранних стадий. Мы ищем команды с нестандартным мышлением, готовые бороться за рынок. Наш фокус — мобильность, логистика и технологии проката.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 border-t border-white/10">
        <div className="container">
          <p className="font-mono text-xs text-foreground/40 uppercase mb-6">Портфолио</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16">Наши компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {portfolio.map((item) => (
              <div key={item.name} className="bg-background p-8 hover:bg-white/5 transition-colors duration-200">
                <div className="font-mono text-xs text-foreground/40 uppercase mb-4 flex justify-between">
                  <span>{item.sector}</span>
                  <span className="text-primary">{item.stage}</span>
                </div>
                <div className="text-xl font-sentient mb-6">{item.name}</div>
                <div className="font-mono text-2xl text-foreground/80">{item.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="insights" className="py-24 border-t border-white/10">
        <div className="container">
          <p className="font-mono text-xs text-foreground/40 uppercase mb-6">Процесс</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-16">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step}>
                <div className="font-mono text-xs text-foreground/30 mb-4">{item.step}</div>
                <div className="text-xl font-sentient mb-3">{item.title}</div>
                <div className="font-mono text-sm text-foreground/50 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/10">
        <div className="container max-w-2xl text-center">
          <p className="font-mono text-xs text-foreground/40 uppercase mb-6">Контакты</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-8">
            Готовы обсудить<br />
            <i className="font-light">ваш проект?</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mb-12">
            Отправьте заявку и мы свяжемся с вами в течение 48 часов
          </p>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Название стартапа"
              className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Email основателя"
              className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Расскажите о проекте: стадия, рынок, тракшн"
              className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full border border-white/20 px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-200"
            >
              [Отправить заявку]
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-foreground/30 uppercase">Kill Net Ventures © 2024</div>
          <div className="font-mono text-xs text-foreground/30">Все права защищены</div>
        </div>
      </footer>
    </>
  );
}
