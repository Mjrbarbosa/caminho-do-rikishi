/**
 * CAMINHO DO RIKISHI (力士の道) — WAY OF THE RIKISHI
 * Aplicação Web Educativa Bilíngue (PT-BR 🇧🇷 / EN 🇺🇸) sobre o Sumô Tradicional
 * JavaScript Puro (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. ESTADO GLOBAL & INTERNACIONALIZAÇÃO (i18n)
  // =========================================================================
  let currentLang = localStorage.getItem('caminho_rikishi_lang') || 'pt';

  // Dicionário de Traduções da Interface Estática
  const uiTranslations = {
    pt: {
      'brand.title': 'CAMINHO DO RIKISHI',
      'brand.subtitle': '力士の道 • OZUMO TRADICIONAL',
      'nav.overview': 'O que é o Sumô',
      'nav.anatomy': 'Anatomia do Combate',
      'nav.timeline': 'Linha do Tempo',
      'nav.curriculum': 'Pilares & Kimarite',
      'header.status': 'Portal Educativo Aberto',

      'hero.badge': 'Tradição • Filosofia • Marcialidade Milenar',
      'hero.title': 'A Força que Nasce do <span class="highlight-vermilion">Respeito</span>',
      'hero.subtitle': 'Mergulhe no universo sagrado do <em>Ozumo</em> (大相撲). Mais do que um combate corpo a corpo, o sumô é uma disciplina espiritual xintoísta onde honra, autodomínio e reverência aos ancestrais moldam cada respiração no <em>dohyō</em>.',
      'hero.enterDojo': 'Adentrar o Santuário & Iniciar a Caminhada',
      'hero.entryNote': 'Deixe o ruído do mundo no <em>Genkan</em> (soleira). Você acaba de pisar no solo sagrado de Ise e do <em>Heya</em>.',
      'hero.stat1.desc': 'Anos de Tradição e Rituais',
      'hero.stat2.num': '4 Eras',
      'hero.stat2.desc': 'Dos Mitos aos Torneios Modernos',
      'hero.stat3.desc': 'Kimarite Oficiais Reconhecidas',
      'hero.stat4.desc': 'Pilares de Conhecimento e Prática',

      'steps.step1.badge': 'Capítulo I',
      'steps.step1.title': 'O Umbral Sagrado: A Essência & Devoção Xintoísta',
      'steps.step1.nextBtn': 'Continuar Caminhada: Entrar no Corredor dos Séculos',

      'steps.step2.badge': 'Capítulo II',
      'steps.step2.title': 'A Trilha dos Séculos: A Caminhada Histórica',
      'steps.step2.nextBtn': 'Continuar Caminhada: Aproximar-se do Dohyō Sagrado',

      'steps.step3.badge': 'Capítulo III',
      'steps.step3.title': 'À Beira da Argila (Dohyō-giwa): As Regras do Duelo',
      'steps.step3.nextBtn': 'Atingir o Coração do Santuário: Pilares & Golpes de Vitória',

      'steps.step4.badge': 'Capítulo IV',
      'steps.step4.title': 'O Santuário Técnico: Filosofia & As 82 Kimarite',

      'overview.pretitle': '相撲とは • A Essência e Significado',
      'overview.title': 'Muito Mais que uma Luta: Uma Devoção Viva',
      'overview.lead': 'O sumô é um dos esportes profissionais organizados mais antigos da humanidade, existindo há mais de 15 séculos na convergência singular entre marcialidade, espetáculo e sagrado.',
      'overview.badge': 'Esporte Nacional & Patrimônio Cultural',
      'overview.headline': 'A Tripla Dimensão do <span class="highlight-vermilion">Ozumo Tradicional</span>',
      'overview.p1': 'Para o olhar desatento, o sumô pode parecer apenas dois homens corpulentos colidindo em um círculo de argila. No entanto, o <em>Ozumo</em> (大相撲) é uma disciplina cerimonial viva, na qual cada centímetro da arena e cada gesto dos lutadores carregam significados forjados ao longo de mil e quinhentos anos de história ininterrupta.',
      'overview.p2': 'Não existem categorias de peso, rounds cronometrados nem comemorações extravagantes. Trata-se de uma contenda onde a força corporal é inseparável da dignidade interior (<em>Hinkaku</em>), transformando a disputa esportiva em um tributo à honra, à ancestralidade e à harmonia cósmica.',
      'overview.pillar1.title': 'Devoção Xintoísta (Shinji)',
      'overview.pillar1.desc': 'O dohyō é um santuário sagrado purificado com sal marinho onde se ora pela bênção e fertilidade das colheitas.',
      'overview.pillar2.title': 'Arte Marcial Rígida (Budō)',
      'overview.pillar2.desc': 'Herança dos guerreiros samurais: precisão biomecânica, alavancagem cinética e retidão moral inegociável.',
      'overview.pillar3.title': 'Espetáculo Profissional',
      'overview.pillar3.desc': 'Seis grandes torneios anuais (Honbasho) que mobilizam o Japão sob hierarquia estrita mantida há séculos.',
      'overview.side.kicker': 'Filosofia de Dohyō',
      'overview.side.quote': '“No círculo sagrado, a vaidade é desmantelada. O rikishi luta não para humilhar o adversário, mas para oferecer sua máxima força como prece viva.”',
      'overview.stat1.text': 'Séculos de tradição ininterrupta documentada',
      'overview.stat2.text': 'Torneios oficiais (Basho) disputados ao ano',
      'overview.stat3.text': 'Dias consecutivos de combate intenso em cada torneio',

      'anatomy.pretitle': '一番の真髄 • Regras & Dinâmica Instantânea',
      'anatomy.title': 'Anatomia de um Combate',
      'anatomy.lead': 'Sem tempo a perder, sem divisões de peso e sem contagem por pontos. No sumô, meses de preparação se resumem a uma fração de segundo.',
      'anatomy.card1.step': 'O Cenário',
      'anatomy.card1.title': 'O Ringue (Dohyō)',
      'anatomy.card1.metric': '4,55 metros de diâmetro',
      'anatomy.card1.desc': 'Uma arena circular perfeita delimitada por 28 fardos de palha de arroz (<em>tawara</em>) cravados em um quadrado elevado de 60 cm de argila batida purificada. Não existem cordas, grades ou proteções: quem ultrapassar o limite ou despencar da elevação perde no mesmo instante.',
      'anatomy.card1.rule': 'Borda estrita: um único dedo tocando fora do círculo sela o fim da luta.',
      'anatomy.card2.step': 'A Explosão',
      'anatomy.card2.title': 'O Choque (Tachi-ai)',
      'anatomy.card2.metric': 'Fração de segundo inicial',
      'anatomy.card2.desc': 'Zero enrolação ou atraso. A contenda não se inicia ao soar de um gongo, mas pela respiração sincronizada (<em>a-un no kokyu</em>). Quando ambos tocam simultaneamente os dois punhos no solo nas linhas de partida (<em>shikiri-sen</em>), mais de 300 kg combinados colidem com violência cinética inaudita.',
      'anatomy.card2.rule': 'Impacto súbito: quem vence a colisão do tachi-ai controla mais de 70% das lutas.',
      'anatomy.card3.step': 'O Desfecho',
      'anatomy.card3.title': 'A Decisão (Shōbu)',
      'anatomy.card3.metric': '3 a 10 segundos de duração',
      'anatomy.card3.desc': 'A regra é cirúrgica e implacável: qualquer parte do corpo fora a sola dos pés que encoste na argila — seja um joelho, a mão ou a ponta do coque de cabelo (<em>mage</em>) — decreta a derrota. O árbitro central (<em>Gyōji</em>) aponta seu leque cerimonial e 5 juízes (<em>Shinpan</em>) ratificam a vitória.',
      'anatomy.card3.rule': 'Sem empate: a decisão é categórica e decidida por uma das 82 kimarite oficiais.',

      'timeline.pretitle': '歴史の変遷 • Dos Mitos Primitivos à Era Moderna',
      'timeline.title': 'A Linha do Tempo: A Evolução dos Séculos',
      'timeline.lead': 'Acompanhe a extraordinária metamorfose do sumô ao longo de quatro grandes eras históricas da civilização japonesa.',
      'timeline.tab1.title': '1. Mitológica & Antiguidade',
      'timeline.tab1.period': 'Século VIII',
      'timeline.tab2.title': '2. Era Imperial',
      'timeline.tab2.period': 'Sécs. VIII a XII',
      'timeline.tab3.title': '3. Guerreira & Samurais',
      'timeline.tab3.period': 'Sécs. XII a XVI',
      'timeline.tab4.title': '4. Edo & Sumô Moderno',
      'timeline.tab4.period': 'Sécs. XVII a XIX',

      'timeline.era1.tag': 'Era I • Mitos & Xintoísmo',
      'timeline.era1.badge': 'Kojiki — Século VIII',
      'timeline.era1.title': 'Era Mitológica & Antiguidade',
      'timeline.era1.subtitle': 'A Lenda de Takemikazuchi & Ritos de Fertilidade',
      'timeline.era1.p1': 'O sumô nasce envolto na mitologia da criação japonesa registrada no <strong>Kojiki</strong> (Registro dos Fatos Antigos, 712 d.C.). Segundo a lenda, o deus do trovão <em>Takemikazuchi</em> enfrentou o deus <em>Takeminakata</em> em um combate corporal decisivo na praia de Inasa pela supremacia sobre as ilhas do Japão.',
      'timeline.era1.p2': 'Durante a antiguidade, as primeiras contendas de sumô eram rituais sagrados de adivinhação agrícola celebrados nos vilarejos: a força empregada nas lutas era oferecida aos <strong>Kami</strong> (espíritos divinos da natureza) para implorar por colheitas abundantes de arroz e apaziguar calamidades climáticas.',
      'timeline.era1.m1': '<strong>Origem Ritual:</strong> Ritos agrários dedicados aos espíritos Kami',
      'timeline.era1.m2': '<strong>Primeiro Registro:</strong> Manuscrito sagrado do Kojiki (712 d.C.)',

      'timeline.era2.tag': 'Era II • Aristocracia de Kyoto',
      'timeline.era2.badge': 'Período Heian — Sécs. VIII a XII',
      'timeline.era2.title': 'Era Imperial',
      'timeline.era2.subtitle': 'O Banquete Palaciano do Sechie-zumo (節会相撲)',
      'timeline.era2.p1': 'Com o florescimento da requintada corte imperial em Kyoto, o sumô deixou as aldeias rústicas e foi adotado como uma pomposa cerimônia de Estado sob a denominação de <strong>Sechie-zumo</strong> (節会相撲). Anualmente, no sétimo mês do calendário lunar após a colheita, o Imperador convocava os homens mais vigorosos de todas as províncias para exibirem sua força no jardim do palácio.',
      'timeline.era2.p2': 'Nesse período, o esporte foi elevado a símbolo aristocrático de paz e prestígio dinástico. Regras cerimoniais estritas foram introduzidas, os combates passaram a ser acompanhados por música de corte imperial (<em>Gagaku</em>) e árbitros togados começaram a presidir as decisões diante da nobreza.',
      'timeline.era2.m1': '<strong>Patrocínio da Corte:</strong> Torneios anuais na presença direta do Imperador',
      'timeline.era2.m2': '<strong>Refinamento Técnico:</strong> Primeiras formalizações de faltas e etiquetas cerimoniais',

      'timeline.era3.tag': 'Era III • Período dos Guerreiros',
      'timeline.era3.badge': 'Kamakura a Sengoku — Sécs. XII a XVI',
      'timeline.era3.title': 'Era Guerreira & Samurais',
      'timeline.era3.subtitle': 'O Buke-zumo (武家相撲) & Os Torneios de Oda Nobunaga',
      'timeline.era3.p1': 'Com a derrocada do poder civil e a ascensão do regime militar dos Samurais e do Xogunato Kamakura, o sumô despiu-se do requinte da corte e voltou-se para a brutalidade da guerra sob o nome de <strong>Buke-zumo</strong> (武家相撲). Tornou-se um treinamento marcial obrigatório para ensinar os guerreiros a imobilizar e arremessar adversários em combates corpo a corpo nos campos de batalha.',
      'timeline.era3.p2': 'No auge da era das guerras civis (Sengoku), o lendário líder militar <strong>Oda Nobunaga</strong>, fervoroso entusiasta da prática, reuniu mais de 1.500 lutadores no Castelo de Azuchi para recrutar novos oficiais samurais. Foi Nobunaga quem primeiro instituiu limites circulares demarcados no chão para que as lutas fossem rápidas e os espectadores pudessem se aglomerar em segurança.',
      'timeline.era3.m1': '<strong>Forja Marcial:</strong> Condicionamento físico letal para a classe dos Samurais',
      'timeline.era3.m2': '<strong>Inovação de Nobunaga:</strong> Surgem as primeiras demarcações circulares do ringue',

      'timeline.era4.tag': 'Era IV • Fundação Moderna',
      'timeline.era4.badge': 'Período Edo — Sécs. XVII a XIX',
      'timeline.era4.title': 'Era Edo & O Nascimento do Sumô Moderno',
      'timeline.era4.subtitle': 'O Kanjin-zumo (勧進相撲) e a Criação do Dohyō Elevado',
      'timeline.era4.p1': 'Durante a longa paz do Xogunato Tokugawa, o sumô converteu-se no mais amado entretenimento popular das metrópoles de Edo (atual Tóquio) e Osaka. Inicialmente organizado para arrecadar donativos para a reforma e construção de templos budistas e santuários xintoístas (<strong>Kanjin-zumo</strong>), o sumô consolidou sua infraestrutura profissional e esportiva.',
      'timeline.era4.p2': 'Neste período decisivo nasceram todas as bases do sumô que conhecemos hoje: foi erguido o <strong>dohyō elevado de argila</strong> com fardos de arroz semi-enterrados (<em>tawara</em>), estabeleceu-se a lista oficial de rankings caligrafados à mão (<strong>Banzuke</strong>), codificaram-se as 48 técnicas clássicas de vitória e fundou-se a associação profissional que administra o esporte até a atualidade.',
      'timeline.era4.m1': '<strong>Arquitetura Oficial:</strong> O dohyō elevado de argila com fardos de arroz',
      'timeline.era4.m2': '<strong>Estrutura Profissional:</strong> Publicação do primeiro Banzuke oficial e 48 técnicas',

      'curriculum.pretitle': '力士の教え • Ementa & Consulta Técnica',
      'curriculum.title': 'Pilares e Técnicas do Sumô Tradicional',
      'curriculum.lead': 'Explore os fundamentos filosóficos, a disciplina diária e o catálogo de técnicas oficiais de vitória do Ozumo.',

      'kimarite.filterHeading': 'Filtrar por Categoria:',
      'kimarite.searchPlaceholder': 'Buscar por nome (ex: Yorikiri), kanji (寄り切り) ou mecânica...',
      'kimarite.mechanicsLabel': 'Mecânica Corporal & Alavanca',
      'kimarite.emptyTitle': 'Nenhuma técnica encontrada para esta busca',
      'kimarite.emptyDesc': 'Não localizamos nenhuma técnica correspondente aos termos digitados ou à categoria selecionada. Experimente buscar por outro nome romanizado (ex: Yorikiri), ideograma kanji (ex: 寄り切り) ou selecione a categoria Todas.',
      'kimarite.resetBtn': '↺ Redefinir Busca e Filtros',
      'kimarite.counter': 'Exibindo {visible} de {total} técnicas',

      'quote.text': '“Rei ni hajimari, rei ni owaru — O combate se inicia com a reverência e conclui-se com o respeito.”',
      'quote.cite': '— Princípio Fundamental do Dohyō e da Dignidade (Hinkaku)',

      'footer.title': 'Caminho do Rikishi (力士の道)',
      'footer.copy': 'Iniciativa comunitária para a difusão e preservação da cultura do sumô tradicional.',
      'footer.disclaimer': 'Conteúdo formatado exclusivamente para fins educativos e culturais abertos.',
      'footer.rights': 'Desenvolvido com respeito às tradições da Nihon Sumo Kyokai (日本相撲協会).'
    },

    en: {
      'brand.title': 'WAY OF THE RIKISHI',
      'brand.subtitle': '力士の道 • TRADITIONAL OZUMO',
      'nav.overview': 'What is Sumo',
      'nav.anatomy': 'Bout Anatomy',
      'nav.timeline': 'Timeline',
      'nav.curriculum': 'Pillars & Kimarite',
      'header.status': 'Open Educational Portal',

      'hero.badge': 'Tradition • Philosophy • Ancient Martiality',
      'hero.title': 'The Strength Born of <span class="highlight-vermilion">Reverence</span>',
      'hero.subtitle': 'Immerse yourself in the sacred realm of <em>Ozumo</em> (大相撲). Far beyond physical combat, sumo is a living Shinto spiritual discipline where honor, self-mastery, and ancestral devotion govern every breath on the <em>dohyō</em>.',
      'hero.enterDojo': 'Enter the Sanctuary & Begin the Walk',
      'hero.entryNote': 'Leave the outside clamor at the <em>Genkan</em> threshold. You tread now upon sacred <em>Heya</em> clay.',
      'hero.stat1.desc': 'Years of Unbroken Tradition & Rituals',
      'hero.stat2.num': '4 Eras',
      'hero.stat2.desc': 'From Ancient Myths to Modern Era',
      'hero.stat3.desc': 'Official Recognized Kimarite',
      'hero.stat4.desc': 'Pillars of Sacred Knowledge',

      'steps.step1.badge': 'Chapter I',
      'steps.step1.title': 'The Sacred Threshold: Essence & Shinto Devotion',
      'steps.step1.nextBtn': 'Continue Walk: Enter the Corridor of Centuries',

      'steps.step2.badge': 'Chapter II',
      'steps.step2.title': 'The Path of Eras: Historical Progression',
      'steps.step2.nextBtn': 'Continue Walk: Approach the Consecrated Dohyō Ring',

      'steps.step3.badge': 'Chapter III',
      'steps.step3.title': 'At the Ring’s Edge (Dohyō-giwa): Rules of the Duel',
      'steps.step3.nextBtn': 'Reach the Sacred Core: Pillars & Kimarite Archive',

      'steps.step4.badge': 'Chapter IV',
      'steps.step4.title': 'The Technical Sanctuary: Philosophy & The 82 Kimarite',

      'overview.pretitle': '相撲とは • Essence and Meaning',
      'overview.title': 'Far More Than a Bout: A Living Devotion',
      'overview.lead': 'Sumo stands as one of humanity’s oldest organized professional sports, thriving for over 15 centuries at the singular crossroads of martial combat, public spectacle, and sacred ritual.',
      'overview.badge': 'National Sport & Cultural Heritage',
      'overview.headline': 'The Triple Dimension of <span class="highlight-vermilion">Traditional Ozumo</span>',
      'overview.p1': 'To the casual observer, sumo might appear simply as two massive men colliding inside a ring of clay. Yet <em>Ozumo</em> (大相撲) is a living ritual discipline where every grain of the arena and every gesture of the wrestlers carries deep spiritual meaning forged across fifteen centuries of unbroken heritage.',
      'overview.p2': 'There are no weight classes, no timed rounds, and no boastful victory celebrations. It is a contest where raw bodily power is inseparable from inner dignity (<em>Hinkaku</em>), transforming athletic competition into an enduring tribute to ancestral honor and cosmic harmony.',
      'overview.pillar1.title': 'Shinto Devotion (Shinji)',
      'overview.pillar1.desc': 'The dohyō is consecrated ground purified with sea salt where prayer is offered for agricultural fertility and divine blessing.',
      'overview.pillar2.title': 'Rigid Martial Art (Budō)',
      'overview.pillar2.desc': 'Samurai lineage: biomechanical precision, kinetic leverage, and unbending ethical discipline without weapons.',
      'overview.pillar3.title': 'Professional Spectacle',
      'overview.pillar3.desc': 'Six grand annual tournaments (Honbasho) captivating Japan under a strict hierarchical ladder preserved for centuries.',
      'overview.side.kicker': 'Dohyō Philosophy',
      'overview.side.quote': '“Inside the sacred ring, vanity dissolves. The rikishi contends not to humiliate the foe, but to offer his supreme vigor as a living prayer.”',
      'overview.stat1.text': 'Centuries of documented unbroken tradition',
      'overview.stat2.text': 'Official premier basho contested each year',
      'overview.stat3.text': 'Consecutive days of intense bouts per tournament',

      'anatomy.pretitle': '一番の真髄 • Rules & Instantaneous Dynamics',
      'anatomy.title': 'Anatomy of a Bout',
      'anatomy.lead': 'No rounds to waste, no weight classes, and no scorekeeping. In sumo, months of grueling preparation culminate in a split-second clash.',
      'anatomy.card1.step': 'The Arena',
      'anatomy.card1.title': 'The Ring (Dohyō)',
      'anatomy.card1.metric': '4.55 meters in diameter',
      'anatomy.card1.desc': 'A circular arena bounded by 28 half-buried rice-straw bales (<em>tawara</em>) set atop an elevated 60 cm platform of consecrated clay. There are no ropes, cages, or soft paddings: stepping out or falling off means immediate defeat.',
      'anatomy.card1.rule': 'Strict boundary: a single toe touching outside the straw boundary immediately ends the contest.',
      'anatomy.card2.step': 'The Explosion',
      'anatomy.card2.title': 'The Clash (Tachi-ai)',
      'anatomy.card2.metric': 'Initial split-second',
      'anatomy.card2.desc': 'Zero stalling. The duel does not begin on a referee whistle, but through synchronized breathing (<em>a-un no kokyu</em>). The moment both wrestlers touch both fists to the clay behind the starting lines (<em>shikiri-sen</em>), over 300 combined kilos collide with thunderous force.',
      'anatomy.card2.rule': 'Sudden momentum: whoever commands the tachi-ai impact dictates the outcome in over 70% of duels.',
      'anatomy.card3.step': 'The Verdict',
      'anatomy.card3.title': 'The Decision (Shōbu)',
      'anatomy.card3.metric': '3 to 10 seconds average',
      'anatomy.card3.desc': 'The rule is surgical and absolute: any part of the body touching the clay other than the soles of the feet — be it a knee, a hand, or even the tip of the topknot (<em>mage</em>) — signals instant defeat. The referee (<em>Gyōji</em>) raises his war fan and 5 ringside judges confirm.',
      'anatomy.card3.rule': 'No draws: victory is definitive and officially cataloged under one of the 82 winning kimarite.',

      'timeline.pretitle': '歴史の変遷 • From Mythological Rites to Modern Era',
      'timeline.title': 'The Historical Timeline: Evolution Across Centuries',
      'timeline.lead': 'Trace the remarkable transformation of sumo across four pivotal eras of Japanese civilization.',
      'timeline.tab1.title': '1. Mythological & Antiquity',
      'timeline.tab1.period': '8th Century',
      'timeline.tab2.title': '2. Imperial Court Era',
      'timeline.tab2.period': '8th–12th Centuries',
      'timeline.tab3.title': '3. Warrior & Samurai Era',
      'timeline.tab3.period': '12th–16th Centuries',
      'timeline.tab4.title': '4. Edo & Modern Sumo',
      'timeline.tab4.period': '17th–19th Centuries',

      'timeline.era1.tag': 'Era I • Myth & Shinto',
      'timeline.era1.badge': 'Kojiki — 8th Century',
      'timeline.era1.title': 'Mythological Era & Antiquity',
      'timeline.era1.subtitle': 'The Legend of Takemikazuchi & Fertility Rituals',
      'timeline.era1.p1': 'Sumo originates deep within Japanese creation mythology recorded in the <strong>Kojiki</strong> (Records of Ancient Matters, 712 AD). According to scripture, the thunder deity <em>Takemikazuchi</em> clashed in hand-to-hand combat against the rival god <em>Takeminakata</em> on Inasa Beach to determine sovereign dominion over the Japanese archipelago.',
      'timeline.era1.p2': 'Throughout antiquity, the earliest bouts were sacred agricultural divination rites held in village shrines: bodily strength was offered to the <strong>Kami</strong> (nature spirits) to plead for bountiful rice harvests and avert seasonal catastrophes.',
      'timeline.era1.m1': '<strong>Ritual Genesis:</strong> Agrarian rites dedicated to the sacred Kami spirits',
      'timeline.era1.m2': '<strong>Earliest Written Record:</strong> The ancient sacred Kojiki manuscript (712 AD)',

      'timeline.era2.tag': 'Era II • Kyoto Aristocracy',
      'timeline.era2.badge': 'Heian Period — 8th to 12th Century',
      'timeline.era2.title': 'Imperial Court Era',
      'timeline.era2.subtitle': 'The Palatial Banquets of Sechie-zumo (節会相撲)',
      'timeline.era2.p1': 'With the rise of the cultured imperial court in Kyoto, sumo evolved beyond village grounds into a grand ceremony of State titled <strong>Sechie-zumo</strong> (節会相撲). Annually, during the seventh lunar month following the autumn harvest, the Emperor summoned the most formidable champions from every province to perform before the throne.',
      'timeline.era2.p2': 'During this period, sumo was enshrined as an aristocratic symbol of peace and dynastic prestige. Formalized ceremonial conduct was instituted, bouts were serenaded by imperial court orchestra (<em>Gagaku</em>), and robed judges oversaw decisions before the nobility.',
      'timeline.era2.m1': '<strong>Imperial Patronage:</strong> Annual tournaments held directly before the Emperor',
      'timeline.era2.m2': '<strong>Technical Refinement:</strong> First codification of prohibited actions and court etiquette',

      'timeline.era3.tag': 'Era III • The Warrior Epoch',
      'timeline.era3.badge': 'Kamakura to Sengoku — 12th to 16th Century',
      'timeline.era3.title': 'Warrior & Samurai Era',
      'timeline.era3.subtitle': 'Buke-zumo (武家相撲) & Oda Nobunaga’s Tournaments',
      'timeline.era3.p1': 'With the decline of courtly rule and the rise of the Samurai warrior class and the Kamakura Shogunate, sumo transformed into combat-ready warfare training termed <strong>Buke-zumo</strong> (武家相撲). It served as an indispensable discipline teaching bushi how to grapple and cast down foes on bloody battlefields.',
      'timeline.era3.p2': 'During the chaotic Warring States era (Sengoku), the legendary warlord <strong>Oda Nobunaga</strong>, an impassioned patron of the sport, gathered over 1,500 fighters at Azuchi Castle to scout promising samurai commanders. Nobunaga introduced circular boundary lines on the earth to quicken the duels and protect encircling onlookers.',
      'timeline.era3.m1': '<strong>Martial Crucible:</strong> Lethal physical conditioning for the elite Samurai caste',
      'timeline.era3.m2': '<strong>Nobunaga’s Innovation:</strong> Birth of the circular boundary to enclose the bout',

      'timeline.era4.tag': 'Era IV • Modern Foundations',
      'timeline.era4.badge': 'Edo Period — 17th to 19th Century',
      'timeline.era4.title': 'Edo Era & The Birth of Modern Sumo',
      'timeline.era4.subtitle': 'Kanjin-zumo (勧進相撲) & The Raised Clay Dohyō',
      'timeline.era4.p1': 'Across the enduring peace of the Tokugawa Shogunate, sumo blossomed into the preeminent public entertainment of Edo (modern Tokyo) and Osaka. Originally organized to raise charitable funds for temple restorations (<strong>Kanjin-zumo</strong>), the sport established its permanent professional structure.',
      'timeline.era4.p2': 'This era established all hallmarks of modern Ozumo: the raised square <strong>clay dohyō</strong> with rice-straw bales (<em>tawara</em>), the official hand-calligraphed rankings (<strong>Banzuke</strong>), the catalog of 48 classic winning moves, and the strict moral code of honor (<em>Hinkaku</em>) required of wrestlers to this day.',
      'timeline.era4.m1': '<strong>Official Architecture:</strong> The elevated clay ring bound with 28 rice bales',
      'timeline.era4.m2': '<strong>Professional League:</strong> Publication of the Banzuke and formalized technical manual',

      'curriculum.pretitle': '力士の教え • Curriculum & Technical Registry',
      'curriculum.title': 'Pillars & Techniques of Traditional Sumo',
      'curriculum.lead': 'Explore the philosophical foundations, daily grueling discipline, and official winning technique catalog of Ozumo.',

      'kimarite.filterHeading': 'Filter by Category:',
      'kimarite.searchPlaceholder': 'Search by name (e.g. Yorikiri), kanji (寄り切り), or mechanics...',
      'kimarite.mechanicsLabel': 'Body Mechanics & Leverage',
      'kimarite.emptyTitle': 'No techniques found for this query',
      'kimarite.emptyDesc': 'We found no techniques matching your query or selected category. Try searching by romanized name (e.g. Yorikiri), kanji (e.g. 寄り切り), or select the All category.',
      'kimarite.resetBtn': '↺ Reset Search & Filters',
      'kimarite.counter': 'Displaying {visible} of {total} techniques',

      'quote.text': '“Rei ni hajimari, rei ni owaru — The duel begins with reverence and concludes with mutual respect.”',
      'quote.cite': '— Fundamental Principle of the Dohyō and Dignity (Hinkaku)',

      'footer.title': 'Way of the Rikishi (力士の道)',
      'footer.copy': 'Community initiative devoted to the appreciation and preservation of traditional sumo culture.',
      'footer.disclaimer': 'Formatted exclusively for open cultural and educational study.',
      'footer.rights': 'Developed with deep respect for the traditions of the Nihon Sumo Kyokai (日本相撲協会).'
    }
  };

  // =========================================================================
  // 2. DADOS DOS MÓDULOS EDUCATIVOS (BILÍNGUES)
  // =========================================================================
  const sumoData = [
    {
      id: 'shin-gi-tai',
      badgeId: { pt: 'Módulo I', en: 'Module I' },
      kanji: '心技体',
      title: { pt: 'Shin-Gi-Tai', en: 'Shin-Gi-Tai' },
      subtitle: { pt: 'A Tríade Sagrada do Lutador', en: 'The Sacred Triad of the Warrior' },
      description: {
        pt: 'O tripé filosófico que rege as artes marciais japonesas e atinge sua expressão máxima no Ozumo: a harmonia indivisível entre mente moral (Shin), precisão técnica (Gi) e compleição física (Tai).',
        en: 'The philosophical triad governing Japanese martial arts, reaching its zenith in Ozumo: the indivisible harmony between moral spirit (Shin), technical precision (Gi), and physical conditioning (Tai).'
      },
      items: [
        {
          id: 'shin',
          tag: { pt: 'Espiritualidade & Moral', en: 'Spirituality & Ethics' },
          kanji: '心',
          title: 'Shin',
          romaji: 'Kokoro',
          subtitle: { pt: 'Mente, Coração & Espírito', en: 'Mind, Heart & Spirit' },
          summary: {
            pt: 'O domínio sobre o ego, o cultivo da dignidade inabalável (hinkaku) e a serenidade absoluta diante da vitória ou da derrota dentro da arena sagrada.',
            en: 'Mastery over the ego, the cultivation of unshakable dignity (hinkaku), and absolute composure in victory or defeat inside the sacred ring.'
          },
          details: {
            pt: [
              'Proibição estrita de comemorações efusivas ou gestos provocatórios no dohyō.',
              'Cultivo constante do hinkaku (graça, honra e nobreza de porte).',
              'Respeito reverencial irrestrito ao oponente, aos juízes (shinpan) e aos deuses (kami).'
            ],
            en: [
              'Strict prohibition of boastful celebrations or provocative gestures on the dohyō.',
              'Continuous cultivation of hinkaku (grace, nobility, and serene stature).',
              'Unconditional reverent respect toward opponent, ringside judges (shinpan), and spirits (kami).'
            ]
          },
          concept: {
            pt: '“A verdadeira vitória é manter a calma impassível mesmo sob a mais violenta pressão.”',
            en: '“True victory lies in maintaining impassive calm even under the most violent pressure.”'
          }
        },
        {
          id: 'gi',
          tag: { pt: 'Habilidade & Estratégia', en: 'Skill & Strategy' },
          kanji: '技',
          title: 'Gi',
          romaji: 'Waza',
          subtitle: { pt: 'Técnica & Precisão Marcial', en: 'Technique & Martial Precision' },
          summary: {
            pt: 'A inteligência biomecânica e o domínio exímio de esquivas, empurrões e alavancagens cinéticas que permitem superar oponentes de massa superior.',
            en: 'Biomechanical mastery of feints, thrusts, and kinetic leverage allowing fighters to overcome adversaries of vastly superior mass.'
          },
          details: {
            pt: [
              'Reconhecimento e domínio das 82 kimarite oficiais homologadas pela Kyokai.',
              'Combate de pegada no mawashi (yotsu-zumo) vs. combate de empurrões (oshi-zumo).',
              'Uso da inércia, alavancas corporais e timing no momento do tachi-ai (impacto inicial).'
            ],
            en: [
              'Fluency across the 82 official winning kimarite approved by the Kyokai.',
              'Belt grappling styles (yotsu-zumo) versus pushing/thrusting combat (oshi-zumo).',
              'Mastering momentum, skeletal leverage, and split-second timing at the tachi-ai clash.'
            ]
          },
          concept: {
            pt: '“A técnica converte o peso bruto do adversário em seu próprio desequilíbrio.”',
            en: '“Technique converts the adversary’s raw bulk into his own undoing.”'
          }
        },
        {
          id: 'tai',
          tag: { pt: 'Condicionamento Físico', en: 'Physical Conditioning' },
          kanji: '体',
          title: 'Tai',
          romaji: 'Karada',
          subtitle: { pt: 'Corpo & Resistência', en: 'Body & Resilience' },
          summary: {
            pt: 'A construção de uma estrutura física massiva, flexível e resiliente, aliando centro de gravidade rebaixado com extrema flexibilidade articular.',
            en: 'Building a massive, flexible, and resilient physical engine combining a grounded center of gravity with deep articular suppleness.'
          },
          details: {
            pt: [
              'Desenvolvimento focado na flexibilidade profunda da bacia e das articulações coxofemorais.',
              'Pernas e tronco blindados através de milhares de repetições cotidianas no dohyō.',
              'Centro de massa extremamente baixo para prevenir quedas e expulsões da arena.'
            ],
            en: [
              'Intensive focus on deep pelvic flexibility and coxofemoral mobility.',
              'Legs and core forged through thousands of grueling daily repetitions in clay.',
              'Ultra-low center of mass to resist forward lunges and ring-edge ejections.'
            ]
          },
          concept: {
            pt: '“A flexibilidade protege as articulações onde a força bruta quebraria.”',
            en: '“Suppleness preserves the joints where brute stiffness would snap.”'
          }
        }
      ]
    },
    {
      id: 'keiko',
      badgeId: { pt: 'Módulo II', en: 'Module II' },
      kanji: '稽古',
      title: { pt: 'O Keiko', en: 'The Keiko' },
      subtitle: { pt: 'Rotina de Treinamento Tradicional', en: 'Traditional Training Discipline' },
      description: {
        pt: 'O regime diário de treinos extenuantes no estábulo (heya). Iniciado nas primeiras horas da madrugada em jejum, o keiko forja o caráter e a resistência física através da repetição exaustiva.',
        en: 'The rigorous daily regimen in the sumo stable (heya). Commencing in pre-dawn freezing cold on empty stomachs, keiko tempers character and fortitude through relentless repetition.'
      },
      items: [
        {
          id: 'shiko',
          tag: { pt: 'Exercício Fundamental', en: 'Fundamental Exercise' },
          kanji: '四股',
          title: 'Shiko',
          romaji: 'Pisada Ritual',
          subtitle: { pt: 'Fortalecimento da Base & Expulsão Espiritual', en: 'Leg Stomp & Spiritual Purification' },
          summary: {
            pt: 'O movimento mais icônico do lutador: erguer cada perna de forma lenta e controlada no ar, descendo com um golpe pesado de calcanhar contra o solo.',
            en: 'The signature rikishi drill: lifting each leg slowly and powerfully aloft, then stomping down with thunderous heel impact against the earth.'
          },
          details: {
            pt: [
              'Desenvolvimento do equilíbrio monopodálico, glúteos, quadríceps e estabilizadores do core.',
              'Praticado entre centenas a mil repetições diárias por cada rikishi.',
              'Origem xintoísta: o pisar firme tem o propósito simbólico de esmagar espíritos malignos sob a terra.'
            ],
            en: [
              'Builds single-leg stability, massive glutes, adductors, and core equilibrium.',
              'Contested from several hundred up to a thousand repetitions daily by every rikishi.',
              'Shinto ritual origin: the forceful heel strike symbolically drives subterranean evil spirits from the soil.'
            ]
          },
          concept: {
            pt: '“Quem domina o Shiko jamais tem seus pés arrancados do solo.”',
            en: '“He who masters the Shiko never has his feet torn from the earth.”'
          }
        },
        {
          id: 'teppo',
          tag: { pt: 'Dinâmica de Ataque', en: 'Striking Dynamics' },
          kanji: '鉄砲',
          title: 'Teppo',
          romaji: 'Golpes no Pilar',
          subtitle: { pt: 'Coordenação Rítmica de Impulso e Passo', en: 'Pillar Palm Strikes & Synchronized Footwork' },
          summary: {
            pt: 'O avanço coordenado batendo repetidamente as palmas das mãos abertas contra um poste maciço de cedro (teppobashira), sincronizando quadris e passos.',
            en: 'Marching forward while slamming open palms rhythmically against a massive cedar wooden post (teppobashira), synchronizing hip drives and strides.'
          },
          details: {
            pt: [
              'Sincronia biomecânica exata: o avanço do pé direito acompanha o impacto da palma direita.',
              'Fortalecimento peitoral, escapular, ombros e mãos para os confrontos de tsuppari.',
              'Consolidação do ritmo corporal e fluidez de movimento sem perder a base.'
            ],
            en: [
              'Precise kinetic synchronization: the right foot stride lands in tandem with the right palm impact.',
              'Conditions chest, deltoids, palms, and scapular stabilizers for tsuppari thrusting duels.',
              'Ingrains unrelenting forward momentum without sacrificing posture.'
            ]
          },
          concept: {
            pt: '“O tronco e os braços golpeiam como um único bloco de madeira viva.”',
            en: '“Torso and arms strike as a single block of living timber.”'
          }
        },
        {
          id: 'matawari',
          tag: { pt: 'Mobilidade Extrema', en: 'Extreme Mobility' },
          kanji: '股割り',
          title: 'Matawari',
          romaji: 'Abertura Pélvica',
          subtitle: { pt: 'Flexibilidade Extrema de Quadril', en: 'Deep Pelvic Splits' },
          summary: {
            pt: 'Espacate frontal completo sentado no solo, esticando as pernas em 180 graus e projetando o tórax e o abdômen até repousarem totalmente contra a areia.',
            en: 'Seated full straddle split, splaying legs outward 180 degrees and flattening the torso and chest flush against the dohyō clay.'
          },
          details: {
            pt: [
              'Garante amplitude angular aos quadris, prevenindo lesões graves no joelho e coluna.',
              'Permite absorver choques de atletas com mais de 160 kg sem perder o eixo de gravidade.',
              'Muitas vezes executado com o auxílio de lutadores seniores empurrando as costas do novato.'
            ],
            en: [
              'Bestows profound pelvic hip mobility, protecting knees and lumbar spine from career-ending tears.',
              'Enables absorbing direct impacts from 160+ kg giants without losing spinal balance.',
              'Often aided by senior stablemates applying firm downward pressure on the junior’s back.'
            ]
          },
          concept: {
            pt: '“A elasticidade do corpo é o verdadeiro escudo contra as lesões mais devastadoras.”',
            en: '“Bodily elasticity is the ultimate armor against catastrophic injury.”'
          }
        }
      ]
    },
    {
      id: 'raizes-rituais',
      badgeId: { pt: 'Módulo III', en: 'Module III' },
      kanji: '神事',
      title: { pt: 'Raízes & Rituais', en: 'Roots & Rituals' },
      subtitle: { pt: 'A Dimensão Sagrada da Arena', en: 'The Sacred Dimension of the Dohyō' },
      description: {
        pt: 'O sumô nasceu como um ritual xintoísta dedicado aos Kami (divindades) para rogar por colheitas abundantes. Essa herança reverente permanece intacta em cada detalhe cerimonial.',
        en: 'Sumo arose as a Shinto ceremony dedicated to the Kami to plead for fertile grain harvests. This sacred heritage lives on unblemished in every ceremonial observance.'
      },
      items: [
        {
          id: 'dohyo',
          tag: { pt: 'Espaço Sagrado', en: 'Consecrated Ground' },
          kanji: '土俵',
          title: 'O Dohyō Consagrado',
          romaji: 'A Arena de Batalha',
          subtitle: { pt: 'Arquitetura Cerimonial e Cosmológica', en: 'Cosmological and Ceremonial Architecture' },
          summary: {
            pt: 'O círculo sagrado de 4,55 metros de diâmetro, construído com argila especial compactada e delimitado por 28 fardos de palha de arroz semi-enterrados (tawara).',
            en: 'The 4.55-meter sacred circle built of packed clay and bounded by 28 half-buried rice-straw bales (tawara).'
          },
          details: {
            pt: [
              'Coberto por um teto suspenso (tsuriyane) esculpido no estilo xintoísta do santuário de Ise.',
              'No centro do dohyō são enterrados oferendas votivas sagradas: castanhas, nozes, arroz e lula seca.',
              'Território sagrado onde apenas pés descalços e rituais de purificação têm permissão de entrada.'
            ],
            en: [
              'Crowned by a suspended shrine roof (tsuriyane) sculpted after the grand Ise Shinto Shrine.',
              'Consecrated by buried sacred offerings in its core: chestnuts, torreya nuts, washed rice, and dried squid.',
              'Sanctified space where only barefoot athletes undergoing purification may tread.'
            ]
          },
          concept: {
            pt: '“O círculo não delimita apenas um ringue, mas o microcosmo da própria existência humana.”',
            en: '“The circle marks not merely a ring, but the microcosm of mortal human existence.”'
          }
        },
        {
          id: 'shio',
          tag: { pt: 'Purificação Ritual', en: 'Purification Rite' },
          kanji: '清めの塩',
          title: 'Kiyome no Shio',
          romaji: 'O Sal Purificador',
          subtitle: { pt: 'Bênção da Arena & Retidão de Conduta', en: 'Blessing the Ground & Moral Purity' },
          summary: {
            pt: 'O solene gesto em que o lutador apanha um punhado de sal marinho e o arremessa em arco sobre o solo antes de adentrar a área interna de embate.',
            en: 'The solemn ritual where the sekitori takes a handful of sea salt and tosses it in a sweeping arc across the clay before entering the battle ring.'
          },
          details: {
            pt: [
              'Purifica a argila consagrada contra energias deletérias e acidentes graves.',
              'Simboliza a lealdade, transparência e retidão de intenção do lutador perante o combate.',
              'Privilégio ritual restrito aos lutadores das categorias de elite (Sekitori).'
            ],
            en: [
              'Purifies the sacred clay against harmful spirits and grievous fractures.',
              'Symbolizes clean conscience, absolute transparency, and chivalry before the bout.',
              'A ritual privilege strictly reserved for elite ranked wrestlers (Sekitori).'
            ]
          },
          concept: {
            pt: '“O sal limpa o solo e expurga qualquer trapaça ou intenção desleal da mente.”',
            en: '“The salt cleanses the clay and expels deceit or malice from the warrior’s spirit.”'
          }
        },
        {
          id: 'chirichozu',
          tag: { pt: 'Gestual Ancestral', en: 'Ancestral Gestures' },
          kanji: '塵手水',
          title: 'Chirichozu',
          romaji: 'Gesto de Pureza',
          subtitle: { pt: 'Transparência e Ausência de Armas', en: 'Transparency and Absence of Weapons' },
          summary: {
            pt: 'A sequência na qual os lutadores se agacham no limite do dohyō, batem palmas, esfregam as mãos e as abrem com as palmas voltadas para cima diante do oponente.',
            en: 'The crouched sequence at the ring’s perimeter where wrestlers clap palms, rub them together, and spread them outward toward heaven before the rival.'
          },
          details: {
            pt: [
              'Evoca o ritual de lavar as mãos e a boca com a água purificadora dos santuários xintoístas.',
              'Abertura das palmas vazias assegura formalmente que nenhum dos lutadores esconde armas.',
              'Manifestação explícita de confiança recíproca e cavalheirismo marcial supremo.'
            ],
            en: [
              'Echoes the shrine ritual of cleansing mouth and hands at the temizuya water basin.',
              'Upturned open palms solemnly certify that neither warrior conceals weapons or blades.',
              'An explicit pledge of mutual honor and supreme martial integrity.'
            ]
          },
          concept: {
            pt: '“Mãos limpas, mente desarmada: o embate repousa unicamente na honra e no esforço.”',
            en: '“Clean hands, disarmed mind: the battle rests solely on honor and supreme toil.”'
          }
        }
      ]
    },
    {
      id: 'banzuke',
      badgeId: { pt: 'Módulo IV', en: 'Module IV' },
      kanji: '番付',
      title: { pt: 'O Banzuke', en: 'The Banzuke' },
      subtitle: { pt: 'Hierarquia Oficial do Ozumo', en: 'Official Ozumo Hierarchy' },
      description: {
        pt: 'O ranking oficial redigido à mão em caligrafia tradicional sumi-e após cada torneio oficial (Basho). No sumô profissional, a classificação determina status social, remuneração e rotina diária.',
        en: 'The official ranking sheet penned by hand in historic sumi-e calligraphy following every grand tournament (Basho). In professional sumo, rank governs status, salary, and every facet of daily life.'
      },
      items: [
        {
          id: 'sekitori',
          tag: { pt: 'Elite Profissional', en: 'Salaried Elite' },
          kanji: '関取',
          title: 'Sekitori',
          romaji: 'Makuuchi & Jūryō',
          subtitle: { pt: 'Lutadores de Primeira Linha', en: 'Top-Tier Champions' },
          summary: {
            pt: 'Apenas os atletas classificados nas duas primeiras divisões (aproximadamente os 70 melhores do mundo) alcançam o prestigioso status de Sekitori.',
            en: 'Only wrestlers ranked within the top two premier divisions (the top ~70 in the world) earn the coveted status of Sekitori.'
          },
          details: {
            pt: [
              'Recebem salário fixo mensal e premiações proporcionais da Associação de Sumô do Japão.',
              'Têm direito a assistentes pessoais (tsukebito) formados por lutadores iniciantes da heya.',
              'Uso privativo do penteado requintado em folha de ginkgo (oicho-mage) e quimonos de seda de luxo.'
            ],
            en: [
              'Receive monthly stipends and tournament prize bonuses from the Japan Sumo Association.',
              'Attended by personal junior disciples (tsukebito) drawn from the lower ranks.',
              'Exclusive right to wear the elaborate ginkgo-leaf topknot (oicho-mage) and fine silk robes.'
            ]
          },
          concept: {
            pt: '“Menos de 10% dos aspirantes conquistam o direito de serem chamados de Sekitori.”',
            en: '“Fewer than 10% of aspirants ever earn the right to be heralded as Sekitori.”'
          }
        },
        {
          id: 'toriteki',
          tag: { pt: 'Formação & Base', en: 'The Apprentices' },
          kanji: '力士養成員',
          title: 'Toriteki',
          romaji: 'Makushita a Jonokuchi',
          subtitle: { pt: 'Os Aprendizes em Forja Contínua', en: 'Unsalaried Ranks in the Crucible' },
          summary: {
            pt: 'Os lutadores das divisões inferiores que não recebem remuneração salarial regular e desempenham todas as tarefas operacionais de sustentação do estábulo.',
            en: 'Wrestlers in the lower 4 divisions who receive no monthly salary and execute all manual labor sustaining the stable.'
          },
          details: {
            pt: [
              'Acordam por volta das 4h da manhã para preparar a argila e iniciar o treinamento no frio.',
              'Responsáveis por cozinhar o nutritivo chankonabe, lavar roupas e limpar as instalações da heya.',
              'Uso obrigatório de penteado simples (chonmage), tamancos de madeira (geta) e quimonos rústicos de algodão.'
            ],
            en: [
              'Rise at 4 AM to prepare the clay and train first in freezing temperatures.',
              'Responsible for cooking the chankonabe stew, doing laundry, and cleaning stable facilities.',
              'Wear plain chonmage topknots, wooden geta sandals, and coarse cotton yukata.'
            ]
          },
          concept: {
            pt: '“Na humildade do serviço diário forja-se a resiliência indispensável para a grandeza futura.”',
            en: '“In the humility of daily toil is forged the resilience indispensable for future greatness.”'
          }
        },
        {
          id: 'yokozuna',
          tag: { pt: 'O Pináculo Eterno', en: 'The Supreme Pinnacle' },
          kanji: '横綱',
          title: 'Yokozuna',
          romaji: 'O Grande Campeão',
          subtitle: { pt: 'A Corda Branca Sagrada', en: 'The Sacred White Rope' },
          summary: {
            pt: 'O ápice inalcançável para a vasta maioria: não é apenas um posto de combate, mas a encarnação viva de uma divindade xintoísta no mundo dos homens.',
            en: 'The near-unreachable summit: not merely an athletic standing, but the living earthly embodiment of a Shinto deity.'
          },
          details: {
            pt: [
              'Posto vitalício: um Yokozuna nunca sofre rebaixamento de ranking por resultados ruins.',
              'Exigência máxima de Hinkaku (dignidade exemplar); ao entrar em declínio, a única saída honrada é a aposentadoria voluntária.',
              'Porta a gigantesca corda sagrada de cânhamo branco (shimenawa) durante a cerimônia solene do Dohyō-iri.'
            ],
            en: [
              'Permanent lifetime rank: a Yokozuna can never be demoted down the ladder due to losses.',
              'Supreme standard of Hinkaku; when skills deteriorate, the only honorable option is voluntary retirement.',
              'Girded with the colossal white hemp rope (shimenawa) during the solemn ring-entering ceremony.'
            ]
          },
          concept: {
            pt: '“O Yokozuna não luta por si mesmo: ele carrega sobre os ombros a alma sagrada do Japão.”',
            en: '“The Yokozuna battles not for himself: upon his shoulders rests the sacred soul of Japan.”'
          }
        }
      ]
    },
    {
      id: 'kimarite',
      badgeId: { pt: 'Catálogo Técnico', en: 'Technical Catalog' },
      kanji: '決まり手',
      title: { pt: 'Kimarite (Técnicas)', en: 'Kimarite (Techniques)' },
      subtitle: { pt: 'Técnicas Oficiais de Vitória do Ozumo', en: 'Official Winning Techniques of Ozumo' },
      description: {
        pt: 'As 82 kimarite homologadas pela Nihon Sumo Kyokai (日本相撲協会) definem a biomecânica precisa que decide cada confronto no dohyō. Explore o catálogo interativo abaixo por busca em tempo real ou pelas categorias cinéticas fundamentais.',
        en: 'The 82 official winning kimarite approved by the Nihon Sumo Kyokai define the exact biomechanics deciding each bout. Explore the interactive catalog below with instant search and kinetic categories.'
      },
      isKimariteModule: true
    }
  ];

  // =========================================================================
  // 3. CATEGORIAS E TÉCNICAS DE KIMARITE (BILÍNGUES)
  // =========================================================================
  const kimariteCategories = [
    { id: 'todas', label: { pt: 'Todas', en: 'All' }, sub: { pt: '', en: '' }, kanji: '全て' },
    { id: 'kihonwaza', label: { pt: 'Kihonwaza', en: 'Kihonwaza' }, sub: { pt: '(Básicas de Empurrão)', en: '(Basic Push/Grapple)' }, kanji: '基本技' },
    { id: 'nagete', label: { pt: 'Nagete', en: 'Nagete' }, sub: { pt: '(Arremessos)', en: '(Throws)' }, kanji: '投げ手' },
    { id: 'kakete', label: { pt: 'Kakete', en: 'Kakete' }, sub: { pt: '(Ganchos de Perna)', en: '(Leg Trips)' }, kanji: '掛け手' },
    { id: 'sorite', label: { pt: 'Sorite', en: 'Sorite' }, sub: { pt: '(Flexão do Tronco)', en: '(Backward Bends)' }, kanji: '反り手' },
    { id: 'hinerite', label: { pt: 'Hinerite', en: 'Hinerite' }, sub: { pt: '(Torções)', en: '(Twists)' }, kanji: '捻り手' }
  ];

  const kimariteData = [
    {
      id: 'yorikiri',
      name: 'Yorikiri',
      kanji: '寄り切り',
      category: 'kihonwaza',
      categoryLabel: { pt: 'Kihonwaza (Técnica Básica)', en: 'Kihonwaza (Basic Technique)' },
      meaning: {
        pt: 'Condução para Fora Segurando o Cinto (Mawashi)',
        en: 'Frontal Force-Out with Belt Grip'
      },
      mechanics: {
        pt: 'Pegada firme no cinto (mawashi) com ambos avançando até conduzir o oponente para fora.',
        en: 'Firm grip on the belt (mawashi) while driving forward until forcing the opponent out of the ring.'
      },
      leverage: {
        pt: 'O rikishi encaixa uma pegada dupla ou simples no tecido do mawashi, mantém os joelhos flexionados para travar a base e empurra continuamente com as pernas em passada sincronizada até cruzar o tawara.',
        en: 'The wrestler secures a firm mawashi grip, drops his center of gravity with bent knees, and drives forward with powerful synchronized strides across the straw bales.'
      },
      frequency: {
        pt: 'Técnica mais frequente do sumô profissional (~30% de todas as vitórias no Ozumo).',
        en: 'Most frequent technique in pro sumo (~30% of all victories in Ozumo).'
      }
    },
    {
      id: 'oshidashi',
      name: 'Oshidashi',
      kanji: '押し出し',
      category: 'kihonwaza',
      categoryLabel: { pt: 'Kihonwaza (Técnica Básica)', en: 'Kihonwaza (Basic Technique)' },
      meaning: {
        pt: 'Empurrão Frontal sem Pegada no Cinto',
        en: 'Frontal Push-Out without Belt Grip'
      },
      mechanics: {
        pt: 'Empurrão frontal mantendo as mãos conectadas ao tronco do oponente sem segurar o tecido.',
        en: 'Frontal push-out keeping open hands pressed against the opponent’s torso without gripping the belt.'
      },
      leverage: {
        pt: 'As mãos permanecem em contato firme contínuo sob as axilas ou peito do adversário, aproveitando a aceleração do centro de gravidade para empurrá-lo para fora dos limites da argila.',
        en: 'Continuous pressure with open palms beneath the armpits or chest, using leg drive to propel the adversary across the ring perimeter.'
      },
      frequency: {
        pt: 'Segunda técnica mais comum no sumô de elite, pilar indiscutível do estilo Oshi-zumo.',
        en: 'Second most common technique in elite sumo, cornerstone of Oshi-zumo.'
      }
    },
    {
      id: 'tsukidashi',
      name: 'Tsukidashi',
      kanji: '突き出し',
      category: 'kihonwaza',
      categoryLabel: { pt: 'Kihonwaza (Técnica Básica)', en: 'Kihonwaza (Basic Technique)' },
      meaning: {
        pt: 'Estocadas Rápidas com Palmas Abertas',
        en: 'Rapid Frontal Thrust-Out'
      },
      mechanics: {
        pt: 'Série repetida de golpes e estocadas rápidas com as palmas abertas até forçar o oponente para fora.',
        en: 'Repeated barrage of rapid open-palm thrusts until forcing the opponent out of the ring.'
      },
      leverage: {
        pt: 'Disparo ritmado de estocadas alternadas (tsuppari) miradas no queixo e peitoral superior do oponente, quebrando seu equilíbrio e postura até empurrá-lo para fora do círculo.',
        en: 'Piston-like alternate hand strikes (tsuppari) to the jaw and upper chest, destroying posture and driving the rival backward.'
      },
      frequency: {
        pt: 'Golpe característico de lutadores agressivos que impõem distância desde o tachi-ai.',
        en: 'Trademark attack of aggressive fighters dominating from the opening clash.'
      }
    },
    {
      id: 'uwatenage',
      name: 'Uwatenage',
      kanji: '上手投げ',
      category: 'nagete',
      categoryLabel: { pt: 'Nagete (Técnica de Arremesso)', en: 'Nagete (Throwing Technique)' },
      meaning: {
        pt: 'Arremesso por Cima do Ombro (Pegada Externa)',
        en: 'Overarm Throw with Outside Belt Grip'
      },
      mechanics: {
        pt: 'O famoso arremesso por cima do ombro com a pegada na parte externa do cinto.',
        en: 'The famous overarm throw gripping the outside of the opponent’s belt over his arm.'
      },
      leverage: {
        pt: 'O lutador passa o braço por cima do braço do rival para cravar a mão na parte posterior do mawashi; ao girar os ombros e quadris vigorosamente, projeta o oponente em um arco descendente espetacular.',
        en: 'The rikishi loops an overarm grip deep onto the rear of the mawashi, pivoting hips violently to hoist and slam the rival downward in a sweeping arc.'
      },
      frequency: {
        pt: 'Um dos arremessos mais emblemáticos e cinematográficos da história do Ozumo.',
        en: 'One of the most iconic and dramatic throws in sumo history.'
      }
    },
    {
      id: 'shitatenage',
      name: 'Shitatenage',
      kanji: '下手投げ',
      category: 'nagete',
      categoryLabel: { pt: 'Nagete (Técnica de Arremesso)', en: 'Nagete (Throwing Technique)' },
      meaning: {
        pt: 'Arremesso por Baixo do Braço (Pegada Interna)',
        en: 'Underarm Throw with Inside Belt Grip'
      },
      mechanics: {
        pt: 'Arremesso por baixo do braço utilizando o cinto e alavancagem com a rotação do quadril.',
        en: 'Underarm throw gripping the belt inside and leveraging with full hip rotation.'
      },
      leverage: {
        pt: 'Passa o braço por baixo da axila do adversário até alcançar o cinto, flexiona a base e executa um giro em pivô com o quadril, convertendo a massa do adversário em rotação descendente contra a terra.',
        en: 'Threading an underhook under the armpit to seize the belt, lowering hips, and executing a pivotal turn that hurls the foe to the clay.'
      },
      frequency: {
        pt: 'Clássico confronto corporal nos combates de pegada profunda (Yotsu-zumo).',
        en: 'A bedrock maneuver in close belt-grappling bouts (Yotsu-zumo).'
      }
    },
    {
      id: 'kotenage',
      name: 'Kotenage',
      kanji: '小手投げ',
      category: 'nagete',
      categoryLabel: { pt: 'Nagete (Técnica de Arremesso)', en: 'Nagete (Throwing Technique)' },
      meaning: {
        pt: 'Arremesso Travando o Braço sem Cinto',
        en: 'Armlock Throw without Belt Grip'
      },
      mechanics: {
        pt: 'Arremesso sem pegada no cinto, travando e imobilizando o braço do oponente na altura do cotovelo.',
        en: 'Beltless throw executed by locking and controlling the opponent’s extended arm at the elbow.'
      },
      leverage: {
        pt: 'Enlaça e aperta o braço do oponente na articulação do cotovelo com pressão firme descendente; em seguida, gira todo o tronco em espiral, forçando o rival a cair para não deslocar o braço.',
        en: 'Clamping the opponent’s triceps and elbow joint downwards with severe torque, spinning the core to throw him down without needing the mawashi.'
      },
      frequency: {
        pt: 'Recurso técnico devastador quando a pegada no mawashi é neutralizada.',
        en: 'Devastating counter-throw when belt grips are denied.'
      }
    },
    {
      id: 'hikiotoshi',
      name: 'Hikiotoshi',
      kanji: '引き落とし',
      category: 'kihonwaza',
      categoryLabel: { pt: 'Kihonwaza (Técnica Básica)', en: 'Kihonwaza (Basic Technique)' },
      meaning: {
        pt: 'Esquiva com Tração Súbita para Baixo',
        en: 'Hand Downward Pull-Down'
      },
      mechanics: {
        pt: 'Esquiva com tração súbita para baixo no ombro ou braço após o choque inicial, fazendo o adversário cair de cara na argila.',
        en: 'Sudden sidestep pulling down on the opponent’s shoulder or arm, sending him face-first to the clay.'
      },
      leverage: {
        pt: 'Explora o excesso de ímpeto frontal do oponente: ao fingir resistência no impacto, o rikishi recua um passo rápido e puxa o ombro ou braço dele violentamente para o chão.',
        en: 'Exploiting the foe’s aggressive forward rush: stepping back swiftly while yanking down on his shoulder to accelerate his forward fall.'
      },
      frequency: {
        pt: 'Golpe decisivo de esquiva e aproveitamento supremo da inércia do rival.',
        en: 'Decisive counter capitalizing on the opponent’s excessive forward momentum.'
      }
    },
    {
      id: 'hatakiomi',
      name: 'Hatakiomi',
      kanji: '叩き込み',
      category: 'kihonwaza',
      categoryLabel: { pt: 'Kihonwaza (Técnica Básica)', en: 'Kihonwaza (Basic Technique)' },
      meaning: {
        pt: 'Tapa Rápido Descendente no Ombro ou Nuca',
        en: 'Downward Slap-Down on Shoulder/Nape'
      },
      mechanics: {
        pt: 'Tapa rápido descendente na cabeça ou ombros no momento em que o oponente avança desequilibrado.',
        en: 'Quick downward slap to the head or shoulders as the opponent charges off-balance.'
      },
      leverage: {
        pt: 'No instante em que o adversário avança com o tronco excessivamente inclinado, o lutador desvia ligeiramente e aplica uma palmada rápida e seca para baixo, provocando a queda imediata.',
        en: 'As the opponent lunges with lowered head, a sharp downward swat to the nape or shoulders sends him tumbling forward.'
      },
      frequency: {
        pt: 'Comum contra ataques precipitados e descompensados no tachi-ai.',
        en: 'Common opportunist victory against overextended tachi-ai charges.'
      }
    },
    {
      id: 'sotogake',
      name: 'Sotogake',
      kanji: '外掛け',
      category: 'kakete',
      categoryLabel: { pt: 'Kakete (Gancho de Perna)', en: 'Kakete (Leg Trip)' },
      meaning: {
        pt: 'Gancho com a Perna por Fora (Kawatakomi / Sotogake)',
        en: 'Outer Leg Trip'
      },
      mechanics: {
        pt: 'Gancho com a perna por fora da perna do oponente enquanto empurra o tronco dele para trás.',
        en: 'Hooking a leg around the outside of the opponent’s calf while driving his upper body backward.'
      },
      leverage: {
        pt: 'Envolve a parte exterior da panturrilha ou coxa do oponente com a própria perna, anulando seu ponto de apoio enquanto empurra firmemente o tórax dele na direção oposta para derrubá-lo de costas.',
        en: 'Entwining the rival’s outer calf with one’s own leg, stripping his base of support while pushing the chest firmly in reverse.'
      },
      frequency: {
        pt: 'A técnica de gancho mais clássica e refinada do sumô tradicional.',
        en: 'The most classic and respected leg-trip technique in traditional sumo.'
      }
    },
    {
      id: 'uchikake',
      name: 'Uchikake',
      kanji: '内掛け',
      category: 'kakete',
      categoryLabel: { pt: 'Kakete (Gancho de Perna)', en: 'Kakete (Leg Trip)' },
      meaning: {
        pt: 'Gancho com a Perna por Dentro',
        en: 'Inner Leg Trip'
      },
      mechanics: {
        pt: 'Gancho por dentro da perna do rival para tirar sua base de sustentação.',
        en: 'Hooking one’s leg from the inside of the opponent’s leg to sweep his balance.'
      },
      leverage: {
        pt: 'Engancha o tornozelo ou panturrilha por dentro da perna do rival e ergue seu membro inferior, empurrando o peito do oponente para trás com as mãos para desmantelar sua gravidade.',
        en: 'Hooking the inner calf and lifting upward while driving the opponent’s chest backward to collapse his center of balance.'
      },
      frequency: {
        pt: 'Golpe que exige timing milimétrico para evitar o contragolpe imediato.',
        en: 'Requires millimetric timing to prevent getting countered over the edge.'
      }
    },
    {
      id: 'kekaeshi',
      name: 'Kekaeshi',
      kanji: '蹴返し',
      category: 'kakete',
      categoryLabel: { pt: 'Kakete (Gancho/Rasteira)', en: 'Kakete (Ankle Kick Trip)' },
      meaning: {
        pt: 'Rasteira no Tornozelo com Tração Frontal',
        en: 'Minor Inner Ankle Foot Sweep'
      },
      mechanics: {
        pt: 'Rasteira precisa no tornozelo do oponente enquanto o puxa para frente.',
        en: 'Kicking the inside of the opponent’s ankle with the sole while pulling him forward.'
      },
      leverage: {
        pt: 'Desfere um toque de chute preciso com a sola do pé no lado de dentro do tornozelo do oponente no instante de sua passada, puxando seu tronco simultaneamente com as duas mãos.',
        en: 'Delivering a crisp foot tap against the inside of the opponent’s ankle as he steps, hauling his mawashi forward simultaneously.'
      },
      frequency: {
        pt: 'A mais pura expressão de Gi (habilidade técnica e aproveitamento de momento).',
        en: 'Pure expression of Gi (technical finesse and instant opportunistic timing).'
      }
    },
    {
      id: 'tottari',
      name: 'Tottari',
      kanji: 'とったり',
      category: 'hinerite',
      categoryLabel: { pt: 'Hinerite (Técnica de Torção)', en: 'Hinerite (Arm Twisting)' },
      meaning: {
        pt: 'Torção com Bloqueio de Braço em Giro',
        en: 'Arm Bar Throw with Diagonal Pivot'
      },
      mechanics: {
        pt: 'Bloqueio do braço estendido do rival, puxando-o em giro diagonal para tirá-lo do círculo.',
        en: 'Securing the opponent’s outstretched arm and pivoting diagonally to sling him out.'
      },
      leverage: {
        pt: 'Domina o braço estendido do rival segurando seu punho com uma mão e a parte de trás do cotovelo com a outra; gira o próprio corpo de lado e arrasta o atacante em curva diagonal para fora do dohyō.',
        en: 'Grasping the wrist with one hand and the tricep with the other, spinning sideways to drag the charging adversary out of the ring.'
      },
      frequency: {
        pt: 'Técnica de contra-ataque ágil contra lutadores especializados em empurrões longos.',
        en: 'Agile counter-technique against heavy pushing specialists.'
      }
    },
    {
      id: 'izori',
      name: 'Izori',
      kanji: '居反り',
      category: 'sorite',
      categoryLabel: { pt: 'Sorite (Flexão do Tronco)', en: 'Sorite (Backward Body Bend)' },
      meaning: {
        pt: 'Arqueamento de Tronco sob Agachamento Profundo',
        en: 'Deep Squatting Back-Drop Throw'
      },
      mechanics: {
        pt: 'Mergulho com agachamento profundo sob a investida do oponente, arqueando o tronco para trás e projetando-o por cima das costas.',
        en: 'Deep squat ducking beneath the opponent’s charge, arching the back backward to hoist him overhead.'
      },
      leverage: {
        pt: 'O rikishi afunda repentinamente sob o peito do adversário quase encostando os joelhos na terra, segura suas pernas ou cintura e arqueia as costas para trás em ponte acrobática, projetando o oponente por cima.',
        en: 'Dropping to near-knee level beneath the opponent’s thrust, seizing thighs or waist, and bridging backwards in an acrobatic arc.'
      },
      frequency: {
        pt: 'Uma das técnicas mais raras, lendárias e aclamadas do repertório clássico de Sorite.',
        en: 'One of the rarest, most legendary and celebrated techniques in the Sorite repertoire.'
      }
    }
  ];

  // =========================================================================
  // 4. ELEMENTOS DO DOM
  // =========================================================================
  const tabsContainer = document.getElementById('tabs-container');
  const cardsGrid = document.getElementById('cards-grid');
  const moduleBadge = document.getElementById('module-badge');
  const moduleKanjiBig = document.getElementById('module-kanji-big');
  const moduleTitle = document.getElementById('module-title');
  const moduleDesc = document.getElementById('module-desc');
  const moduleInfoBox = document.getElementById('module-info-box');
  const currentYearSpan = document.getElementById('current-year');

  // Módulo de Kimarite
  const kimariteControls = document.getElementById('kimarite-controls');
  const searchInput = document.getElementById('kimarite-search-input');
  const clearSearchBtn = document.getElementById('kimarite-clear-search');
  const filterChipsList = document.getElementById('filter-chips-list');
  const counterText = document.getElementById('kimarite-counter-text');

  // Botões de Idioma (Bandeiras Nacionais)
  const langButtons = document.querySelectorAll('.flag-btn');

  // Estado das Abas e Filtros
  let activeTabId = sumoData[0].id;
  let activeKimariteCategory = 'todas';
  let kimariteSearchQuery = '';

  // Ano dinâmico no footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 5. MOTOR DE INTERNACIONALIZAÇÃO (i18n)
  // =========================================================================
  function setLanguage(lang) {
    if (!uiTranslations[lang]) return;
    currentLang = lang;
    localStorage.setItem('caminho_rikishi_lang', lang);

    // Atualiza tag html lang
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

    // Atualiza botões do seletor
    langButtons.forEach(btn => {
      const isCurrent = btn.dataset.lang === lang;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    // Atualiza todos os elementos estáticos [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      const translation = uiTranslations[lang][key];
      if (translation !== undefined) {
        el.innerHTML = translation;
      }
    });

    // Atualiza placeholder do campo de busca
    if (searchInput) {
      searchInput.placeholder = uiTranslations[lang]['kimarite.searchPlaceholder'];
      searchInput.setAttribute('aria-label', lang === 'pt' ? 'Buscar técnica de vitória (Kimarite)' : 'Search winning technique (Kimarite)');
    }

    // Re-renderiza abas e conteúdos dinâmicos com novo idioma
    renderTabs();
    renderActiveTabContent(activeTabId);

    // Se estiver em Kimarite, atualiza chips e re-filtra
    if (activeTabId === 'kimarite') {
      renderKimariteCategoryChips();
      filterAndRenderKimarite();
    }
  }

  // Event Listeners dos botões de Idioma
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected && selected !== currentLang) {
        setLanguage(selected);
      }
    });
  });

  // =========================================================================
  // 6. RENDERIZAÇÃO DAS ABAS (TABS)
  // =========================================================================
  function renderTabs() {
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    sumoData.forEach((mod) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `tab-btn ${mod.id === activeTabId ? 'active' : ''}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', mod.id === activeTabId ? 'true' : 'false');
      button.setAttribute('aria-controls', 'cards-grid');
      button.id = `tab-${mod.id}`;

      const title = typeof mod.title === 'object' ? mod.title[currentLang] : mod.title;

      button.innerHTML = `
        <span class="tab-kanji" aria-hidden="true">${mod.kanji}</span>
        <span class="tab-label">${escapeHtml(title)}</span>
      `;

      button.addEventListener('click', () => {
        if (activeTabId !== mod.id) {
          switchTab(mod.id);
        }
      });

      tabsContainer.appendChild(button);
    });
  }

  // =========================================================================
  // 7. ALTERNÂNCIA DE ABAS
  // =========================================================================
  function switchTab(tabId) {
    activeTabId = tabId;

    const allTabs = tabsContainer.querySelectorAll('.tab-btn');
    allTabs.forEach(btn => {
      const isSelected = btn.id === `tab-${tabId}`;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    if (moduleInfoBox) {
      moduleInfoBox.style.opacity = '0';
      moduleInfoBox.style.transform = 'translateY(6px)';
    }

    setTimeout(() => {
      renderActiveTabContent(tabId);

      if (moduleInfoBox) {
        moduleInfoBox.style.opacity = '1';
        moduleInfoBox.style.transform = 'translateY(0)';
      }
    }, 150);
  }

  // =========================================================================
  // 8. RENDERIZAÇÃO DO CONTEÚDO ATIVO DA ABA
  // =========================================================================
  function renderActiveTabContent(tabId) {
    const activeModule = sumoData.find(mod => mod.id === tabId);
    if (!activeModule) return;

    const badge = typeof activeModule.badgeId === 'object' ? activeModule.badgeId[currentLang] : activeModule.badgeId;
    const title = typeof activeModule.title === 'object' ? activeModule.title[currentLang] : activeModule.title;
    const subtitle = typeof activeModule.subtitle === 'object' ? activeModule.subtitle[currentLang] : activeModule.subtitle;
    const description = typeof activeModule.description === 'object' ? activeModule.description[currentLang] : activeModule.description;

    moduleBadge.textContent = badge;
    moduleKanjiBig.textContent = activeModule.kanji;
    moduleTitle.textContent = `${title} — ${subtitle}`;
    moduleDesc.textContent = description;

    if (activeModule.isKimariteModule) {
      if (kimariteControls) {
        kimariteControls.style.display = 'flex';
      }
      renderKimariteCategoryChips();
      filterAndRenderKimarite();
    } else {
      if (kimariteControls) {
        kimariteControls.style.display = 'none';
      }
      renderStandardModuleCards(activeModule);
    }
  }

  // =========================================================================
  // 9. MÓDULOS PEDAGÓGICOS PADRÃO (SHIN-GI-TAI, KEIKO, ETC.)
  // =========================================================================
  function renderStandardModuleCards(mod) {
    cardsGrid.innerHTML = '';

    mod.items.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'rikishi-card animate-card';
      card.style.animationDelay = `${index * 0.1}s`;

      const tag = typeof item.tag === 'object' ? item.tag[currentLang] : item.tag;
      const subtitle = typeof item.subtitle === 'object' ? item.subtitle[currentLang] : item.subtitle;
      const summary = typeof item.summary === 'object' ? item.summary[currentLang] : item.summary;
      const concept = typeof item.concept === 'object' ? item.concept[currentLang] : item.concept;
      const detailsList = item.details[currentLang] || item.details['pt'] || [];

      const detailsHtml = detailsList.map(detail => `
        <li class="card-detail-item">${escapeHtml(detail)}</li>
      `).join('');

      card.innerHTML = `
        <div class="card-kanji-watermark" aria-hidden="true">${escapeHtml(item.kanji)}</div>
        
        <header class="card-header">
          <span class="card-tag">${escapeHtml(tag)}</span>
          <div class="card-title-group">
            <h4 class="card-title">${escapeHtml(item.title)}</h4>
            <span class="card-romaji" title="${escapeHtml(item.romaji)}">${escapeHtml(item.kanji)}</span>
          </div>
          <p class="card-subtitle">${escapeHtml(subtitle)}</p>
        </header>

        <div class="card-body">
          <p class="card-summary">${escapeHtml(summary)}</p>
          <ul class="card-details-list">
            ${detailsHtml}
          </ul>
        </div>

        <div class="card-concept-box">
          <span class="concept-icon" aria-hidden="true">箴</span>
          <p>${escapeHtml(concept)}</p>
        </div>
      `;

      cardsGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 10. MÓDULO KIMARITE: RENDERIZAÇÃO DOS CHIPS DE CATEGORIAS
  // =========================================================================
  function renderKimariteCategoryChips() {
    if (!filterChipsList) return;
    filterChipsList.innerHTML = '';

    kimariteCategories.forEach(cat => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `chip-btn ${cat.id === activeKimariteCategory ? 'active' : ''}`;
      chip.setAttribute('role', 'tab');
      chip.setAttribute('aria-selected', cat.id === activeKimariteCategory ? 'true' : 'false');
      chip.dataset.categoryId = cat.id;

      const label = cat.label[currentLang] || cat.label['pt'];
      const sub = cat.sub[currentLang] ? ` ${cat.sub[currentLang]}` : '';

      chip.innerHTML = `
        <span class="chip-kanji" aria-hidden="true">${cat.kanji}</span>
        <span>${escapeHtml(label)}${escapeHtml(sub)}</span>
      `;

      chip.addEventListener('click', () => {
        if (activeKimariteCategory !== cat.id) {
          activeKimariteCategory = cat.id;
          updateChipButtonsActiveState();
          filterAndRenderKimarite();
        }
      });

      filterChipsList.appendChild(chip);
    });
  }

  function updateChipButtonsActiveState() {
    if (!filterChipsList) return;
    const chips = filterChipsList.querySelectorAll('.chip-btn');
    chips.forEach(chip => {
      const isSelected = chip.dataset.categoryId === activeKimariteCategory;
      chip.classList.toggle('active', isSelected);
      chip.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });
  }

  // =========================================================================
  // 11. MÓDULO KIMARITE: FILTRO DINÂMICO & CARDS BILÍNGUES
  // =========================================================================
  function filterAndRenderKimarite() {
    const query = (kimariteSearchQuery || '').trim().toLowerCase();

    const filtered = kimariteData.filter(tech => {
      const matchCategory = (activeKimariteCategory === 'todas') || (tech.category === activeKimariteCategory);
      if (!matchCategory) return false;
      if (!query) return true;

      const nameMatch = tech.name.toLowerCase().includes(query);
      const kanjiMatch = tech.kanji.includes(query);

      const meaningPt = (tech.meaning.pt || '').toLowerCase();
      const meaningEn = (tech.meaning.en || '').toLowerCase();
      const mechanicsPt = (tech.mechanics.pt || '').toLowerCase();
      const mechanicsEn = (tech.mechanics.en || '').toLowerCase();

      return nameMatch || kanjiMatch || meaningPt.includes(query) || meaningEn.includes(query) || mechanicsPt.includes(query) || mechanicsEn.includes(query);
    });

    // Atualização do contador no idioma ativo
    if (counterText) {
      const template = uiTranslations[currentLang]['kimarite.counter'];
      counterText.innerHTML = template
        .replace('{visible}', `<strong>${filtered.length}</strong>`)
        .replace('{total}', `<strong>${kimariteData.length}</strong>`);
    }

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query ? 'flex' : 'none';
    }

    cardsGrid.innerHTML = '';

    // Estado Vazio Traduzido
    if (filtered.length === 0) {
      const emptyState = document.createElement('div');
      emptyState.className = 'kimarite-empty-state animate-card';
      emptyState.setAttribute('role', 'status');

      const title = uiTranslations[currentLang]['kimarite.emptyTitle'];
      const desc = uiTranslations[currentLang]['kimarite.emptyDesc'];
      const resetText = uiTranslations[currentLang]['kimarite.resetBtn'];

      emptyState.innerHTML = `
        <div class="empty-state-kanji" aria-hidden="true">無</div>
        <h4 class="empty-state-title">${escapeHtml(title)}</h4>
        <p class="empty-state-desc">${escapeHtml(desc)}</p>
        <button type="button" class="empty-reset-btn" id="btn-reset-kimarite">
          <span>${escapeHtml(resetText)}</span>
        </button>
      `;

      cardsGrid.appendChild(emptyState);

      const resetBtn = document.getElementById('btn-reset-kimarite');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetKimariteFilters);
      }
      return;
    }

    // Renderiza Cards Especializados
    filtered.forEach((tech, index) => {
      const card = document.createElement('article');
      card.className = 'kimarite-card animate-card';
      card.style.animationDelay = `${index * 0.05}s`;

      const categoryLabel = tech.categoryLabel[currentLang] || tech.categoryLabel['pt'];
      const meaning = tech.meaning[currentLang] || tech.meaning['pt'];
      const mechanics = tech.mechanics[currentLang] || tech.mechanics['pt'];
      const leverage = tech.leverage[currentLang] || tech.leverage['pt'];
      const frequency = tech.frequency[currentLang] || tech.frequency['pt'];
      const mechanicsLabel = uiTranslations[currentLang]['kimarite.mechanicsLabel'];

      card.innerHTML = `
        <div class="card-kanji-watermark" aria-hidden="true">${escapeHtml(tech.kanji)}</div>

        <header class="kimarite-card-header">
          <span class="kimarite-category-tag">${escapeHtml(categoryLabel)}</span>
          <div class="kimarite-title-row">
            <h4 class="kimarite-name">${escapeHtml(tech.name)}</h4>
            <span class="kimarite-kanji" title="${escapeHtml(tech.name)}">${escapeHtml(tech.kanji)}</span>
          </div>
          <p class="kimarite-meaning">${escapeHtml(meaning)}</p>
        </header>

        <div class="kimarite-card-body">
          <div class="mechanics-block">
            <span class="mechanics-label">
              <span class="mechanics-icon" aria-hidden="true">⚙</span>
              ${escapeHtml(mechanicsLabel)}
            </span>
            <p class="mechanics-desc">${escapeHtml(mechanics)}</p>
            <p class="leverage-desc">${escapeHtml(leverage)}</p>
          </div>
        </div>

        <footer class="kimarite-card-footer">
          <div class="kimarite-meta-info">
            <span class="meta-dot">●</span>
            <span>${escapeHtml(frequency)}</span>
          </div>
        </footer>
      `;

      cardsGrid.appendChild(card);
    });
  }

  function resetKimariteFilters() {
    activeKimariteCategory = 'todas';
    kimariteSearchQuery = '';
    if (searchInput) {
      searchInput.value = '';
    }
    updateChipButtonsActiveState();
    filterAndRenderKimarite();
  }

  // Listeners de Busca Instantânea
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      kimariteSearchQuery = e.target.value;
      filterAndRenderKimarite();
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        kimariteSearchQuery = '';
        filterAndRenderKimarite();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      kimariteSearchQuery = '';
      filterAndRenderKimarite();
    });
  }

  // =========================================================================
  // 12. LINHA DO TEMPO HISTÓRICA: INTERATIVIDADE
  // =========================================================================
  function initTimelineInteractivity() {
    const eraButtons = document.querySelectorAll('.timeline-era-btn');
    const eraCards = document.querySelectorAll('.timeline-card-item');

    if (!eraButtons.length || !eraCards.length) return;

    eraButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedEra = btn.dataset.era;
        if (!selectedEra) return;

        eraButtons.forEach(b => {
          const isCurrent = b === btn;
          b.classList.toggle('active', isCurrent);
          b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        });

        eraCards.forEach(card => {
          const isTarget = card.dataset.era === selectedEra;
          card.classList.toggle('active', isTarget);
          if (isTarget) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      });
    });

    eraCards.forEach(card => {
      card.addEventListener('click', () => {
        const era = card.dataset.era;
        if (!era) return;

        eraCards.forEach(c => c.classList.toggle('active', c === card));
        eraButtons.forEach(b => {
          const isMatch = b.dataset.era === era;
          b.classList.toggle('active', isMatch);
          b.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });
      });
    });
  }

  // =========================================================================
  // 13. NAVEGAÇÃO SUAVE DOS LINKS DO HEADER E CAMINHADA NO DOJO
  // =========================================================================
  function initHeaderNav() {
    const smoothLinks = document.querySelectorAll('.header-nav .nav-link, .mobile-drawer-nav .mobile-nav-link, #btn-enter-dojo, .step-forward-btn');
    const mobileBtn = document.getElementById('btn-mobile-menu');
    const closeBtn = document.getElementById('btn-close-drawer');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.add('open');
      backdrop.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    smoothLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            closeDrawer();
            targetElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // =========================================================================
  // 14. EFEITO ATMOSFÉRICO: PARTÍCULAS DO SAL SAGRADO (KIYOME NO SHIO)
  // =========================================================================
  function initSaltParticlesCanvas() {
    const canvas = document.getElementById('salt-particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respeitar usuários com preferências de redução de movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      canvas.style.display = 'none';
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const numParticles = Math.min(48, Math.floor((width * height) / 32000));
    const particles = [];

    class SaltCrystal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -10;
        this.size = Math.random() * 2.8 + 1.2;
        this.speedY = Math.random() * 0.45 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.55 + 0.15;
        this.isGold = Math.random() < 0.22;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotSpeed;

        if (this.y > height + 10 || this.x < -10 || this.x > width + 10) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.isGold) {
          ctx.fillStyle = `rgba(180, 130, 40, ${this.opacity * 0.75})`;
          ctx.shadowColor = 'rgba(180, 130, 40, 0.35)';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(220, 210, 195, ${this.opacity * 0.7})`;
          ctx.shadowColor = 'rgba(120, 100, 80, 0.2)';
          ctx.shadowBlur = 2;
        }

        // Desenha cristal em formato de prisma de sal
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size * 0.85, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(-this.size * 0.85, 0);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new SaltCrystal());
    }

    let isVisible = true;
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (isVisible) requestAnimationFrame(render);
    });

    function render() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      requestAnimationFrame(render);
    }

    render();
  }

  // =========================================================================
  // 15. UTILITÁRIOS
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // =========================================================================
  // 16. INICIALIZAÇÃO DA APLICAÇÃO
  // =========================================================================
  setLanguage(currentLang);
  initTimelineInteractivity();
  initHeaderNav();
  initSaltParticlesCanvas();
});
