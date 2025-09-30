const stats = [
  { name: 'Automations Built', value: '50+' },
  { name: 'Hours Saved Monthly', value: '1,200+' },
  { name: 'Integrations Supported', value: '100+' },
  { name: 'Support', value: '24/7' },
]

export function StatsSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-foreground/70">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
