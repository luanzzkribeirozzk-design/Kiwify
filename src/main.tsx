import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const checkoutUrl = 'https://pay.kiwify.com.br/7hhseK3'

const features = [
  { symbol: '↗', title: 'Métodos de renda', text: 'Caminhos para explorar novas possibilidades online.' },
  { symbol: '✦', title: 'Central de IA', text: 'Prompts e ideias para acelerar sua prática.' },
  { symbol: '⌁', title: 'Como encontrar clientes', text: 'Orientações para dar os primeiros passos.' },
  { symbol: '▣', title: 'Guias práticos', text: 'Conteúdo direto para aprender fazendo.' },
  { symbol: '⊞', title: 'Ferramentas e calculadoras', text: 'Recursos para organizar e testar ideias.' },
  { symbol: '↺', title: 'Desafios para praticar', text: 'Atividades curtas para sair da teoria.' },
]

const stats = [
  { value: '20', label: 'conteúdos' },
  { value: '10', label: 'prompts de IA' },
  { value: '10', label: 'ferramentas' },
  { value: '05', label: 'calculadoras' },
  { value: '02', label: 'desafios' },
  { value: '30', label: 'recursos na biblioteca' },
]

const steps = [
  { number: '01', title: 'Você compra', text: 'Escolha o acesso e finalize a compra com segurança.' },
  { number: '02', title: 'Recebe o acesso', text: 'As instruções chegam para você começar pelo celular.' },
  { number: '03', title: 'Aprende e pratica', text: 'Explore os conteúdos e aplique no seu ritmo.' },
]

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Renda Mobile — início">
      <span className="brand-mark" aria-hidden="true"><span>R</span><span>M</span></span>
      <span className="brand-name">renda<span>mobile</span></span>
    </a>
  )
}

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>
}

function App() {
  return (
    <div className="site-shell" id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#conteudos">O que você encontra</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a className="header-cta" href={checkoutUrl} target="_blank" rel="noreferrer">
          Quero acessar <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> PLATAFORMA DE APRENDIZADO ONLINE</div>
            <h1 id="hero-title">Aprenda.<br /><em>Use.</em> Conquiste.</h1>
            <p className="hero-lead">Uma plataforma completa para aprender e colocar em prática formas de criar renda online usando apenas o celular.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">
                QUERO ACESSAR AGORA <ArrowIcon />
              </a>
              <span className="price-note">Acesso único <strong>R$ 24,90</strong></span>
            </div>
            <div className="hero-proof" aria-label="Benefícios principais">
              <span><i>✓</i> Conteúdo direto ao ponto</span>
              <span><i>✓</i> Feito para o celular</span>
              <span><i>✓</i> Aplicação prática</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Prévia visual da plataforma Renda Mobile">
            <div className="visual-orbit orbit-one" aria-hidden="true" />
            <div className="visual-orbit orbit-two" aria-hidden="true" />
            <div className="floating-chip chip-library"><span className="chip-icon">◎</span><span><b>30</b><small>recursos</small></span></div>
            <div className="floating-chip chip-mobile"><span className="pulse-dot" /><span><b>100%</b><small>no seu mobile</small></span></div>
            <div className="device-shadow" aria-hidden="true" />
            <div className="device-frame">
              <div className="device-camera" aria-hidden="true" />
              <div className="device-screen">
                <div className="device-topbar"><span className="mini-brand"><b>R</b> renda<span>mobile</span></span><span className="top-dots">•••</span></div>
                <div className="device-welcome"><small>OLÁ, VAMOS COMEÇAR?</small><strong>Sua central de prática<br />está aqui.</strong></div>
                <div className="progress-card"><div><span>Seu progresso</span><b>12%</b></div><div className="progress-track"><span /></div><small>Um passo de cada vez.</small></div>
                <div className="device-library-heading"><b>Biblioteca</b><span>ver tudo ↗</span></div>
                <div className="device-cards">
                  <div className="device-course course-purple"><span>✦</span><b>Central<br />de IA</b><small>10 prompts</small></div>
                  <div className="device-course course-blue"><span>↗</span><b>Métodos<br />de renda</b><small>20 conteúdos</small></div>
                  <div className="device-course course-pink"><span>⊞</span><b>Ferramentas<br />úteis</b><small>10 recursos</small></div>
                </div>
                <div className="device-bottom-nav"><span className="active">⌂<small>Início</small></span><span>▣<small>Conteúdos</small></span><span>◌<small>Perfil</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Números da plataforma">
          <div className="section-wrap stats-inner">
            <div className="stats-intro"><span className="section-kicker">POR DENTRO</span><p>Um ponto de partida<br />mais claro para você.</p></div>
            {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </section>

        <section className="content-section section-wrap" id="conteudos" aria-labelledby="features-title">
          <div className="section-heading">
            <div><span className="section-kicker">TUDO EM UM SÓ LUGAR</span><h2 id="features-title">O que você <em>encontra</em></h2></div>
            <p>Conteúdo essencial para aprender, organizar ideias e experimentar novos caminhos — sem complicar.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => <article className="feature-card" key={feature.title}>
              <div className="feature-top"><span className="feature-index">0{index + 1}</span><span className="feature-symbol">{feature.symbol}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="card-line" aria-hidden="true" />
            </article>)}
          </div>
        </section>

        <section className="audience-section section-wrap" aria-labelledby="audience-title">
          <div className="audience-panel">
            <div className="audience-stamp" aria-hidden="true"><span>RM</span><small>NA PRÁTICA</small></div>
            <div className="audience-copy"><span className="section-kicker">PARA QUEM É</span><h2 id="audience-title">Para quem quer<br /><em>começar pelo celular.</em></h2><p>Para quem quer aprender maneiras práticas de criar oportunidades de renda online, descobrir ferramentas e transformar conhecimento em ação — usando o celular como ponto de partida.</p></div>
            <div className="audience-side-note"><span>01</span><p>Conhecimento<br />que se move<br />com você.</p></div>
          </div>
        </section>

        <section className="steps-section section-wrap" id="como-funciona" aria-labelledby="steps-title">
          <div className="section-heading compact-heading"><div><span className="section-kicker">SEM COMPLICAÇÃO</span><h2 id="steps-title">Como <em>funciona</em></h2></div><p>Três passos simples entre você e uma nova rotina de aprendizado.</p></div>
          <div className="steps-grid">
            {steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
          </div>
        </section>

        <section className="offer-section section-wrap" aria-labelledby="offer-title">
          <div className="offer-card">
            <div className="offer-copy"><span className="section-kicker">SEU PRÓXIMO PASSO</span><h2 id="offer-title">Comece a construir<br /><em>sua prática.</em></h2><p>Tenha um espaço para aprender, testar e organizar novas possibilidades pelo celular.</p><div className="offer-checks"><span>✓ Acesso à plataforma</span><span>✓ Conteúdo e ferramentas</span><span>✓ No seu ritmo</span></div></div>
            <div className="offer-price"><span className="offer-label">RENDA MOBILE</span><strong>R$ <b>24,90</b></strong><small>Acesso único</small><a className="button button-light" href={checkoutUrl} target="_blank" rel="noreferrer">QUERO ACESSAR AGORA <ArrowIcon /></a><span className="safe-note">Você será direcionado para o checkout oficial.</span></div>
          </div>
        </section>

        <section className="faq-section section-wrap" id="duvidas" aria-labelledby="faq-title">
          <div className="faq-intro"><span className="section-kicker">AINDA TEM DÚVIDAS?</span><h2 id="faq-title">Perguntas<br /><em>frequentes.</em></h2><p>Se precisar de mais detalhes, o checkout oficial apresenta todas as informações do acesso.</p></div>
          <div className="faq-list">
            <details><summary>Preciso de computador?<span>+</span></summary><p>Não. O Renda Mobile foi pensado para você acessar e colocar em prática usando apenas o celular.</p></details>
            <details><summary>O acesso é pelo celular?<span>+</span></summary><p>Sim. A plataforma foi desenhada para uma experiência prática, leve e responsiva no seu mobile.</p></details>
            <details><summary>O que está incluído?<span>+</span></summary><p>Conteúdos, prompts de IA, ferramentas, calculadoras, guias e desafios organizados em uma biblioteca prática.</p></details>
            <details><summary>Como recebo o acesso?<span>+</span></summary><p>Depois da confirmação da compra, você recebe as instruções de acesso no contato informado no checkout.</p></details>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><Logo /><p>Aprenda. Use. Conquiste.</p><span>© {new Date().getFullYear()} Renda Mobile</span></footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
