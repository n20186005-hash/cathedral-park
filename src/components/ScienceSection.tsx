import { useTranslations } from 'next-intl';

export default function ScienceSection() {
  const t = useTranslations('science');

  const topics = [
    { id: 'architecture', icon: '🏛️' },
    { id: 'bellTower', icon: '🔔' },
    { id: 'ecology', icon: '🌳' },
    { id: 'heritage', icon: '📜' }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--accent)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 
                className="font-display text-xl font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {t(`${topic.id}.title`)}
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t(`${topic.id}.content`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
