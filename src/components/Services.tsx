import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Хатха-йога",
    description: "Классическая практика для развития силы, гибкости и концентрации. Подходит для всех уровней подготовки.",
    icon: "Flame",
  },
  {
    title: "Медитация",
    description: "Практики осознанности и дыхательные техники для достижения внутреннего спокойствия и ясности ума.",
    icon: "Brain",
  },
  {
    title: "Йога для начинающих",
    description: "Мягкое введение в практику йоги с подробным объяснением базовых асан и принципов дыхания.",
    icon: "Sprout",
  },
  {
    title: "Индивидуальные сессии",
    description: "Персональные занятия с опытным инструктором, адаптированные под ваши цели и особенности.",
    icon: "User",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наши направления
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Выберите свою практику
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                <Icon name={service.icon} size={32} strokeWidth={1} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}