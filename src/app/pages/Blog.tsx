import { useState } from 'react';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';


type Article = {
  title: string;
  excerpt: string;
  content: string;
  videoUrl: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

export function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);


  // 1. Zdna hna links dial YouTube (te9der tbedelhom b l-videos dialk)
  const articles = [
    {
      title: "5 exercices pour soulager les douleurs lombaires",
      excerpt: "Découvrez des exercices simples et efficaces pour prévenir et soulager les douleurs du bas du dos au quotidien.",
      content: "Ici vous pouvez mettre le texte complet de l'article. Par exemple, détaillez les 5 exercices spécifiques...",
      videoUrl: "https://www.youtube.com/watch?v=XHJuSzuTy2Q&t=17s", // Exemple video
      date: "15 Mai 2026",
      readTime: "5 min",
      category: "Douleurs chroniques",
      image: "https://images.unsplash.com/photo-1706353399656-210cca727a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    },
    {
      title: "L'importance de la rééducation post-opératoire",
      excerpt: "Comprendre pourquoi la kinésithérapie est essentielle après une chirurgie orthopédique pour une récupération optimale.",
      content: "Le contenu complet de l'article sur la rééducation post-opératoire...",
      videoUrl: "https://www.youtube.com/watch?v=Y0OBenuWKsc", 
      date: "10 Mai 2026",
      readTime: "7 min",
      category: "Rééducation",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "Kinésithérapie respiratoire : qui peut en bénéficier ?",
      excerpt: "La kinésithérapie respiratoire ne concerne pas que les maladies chroniques. Découvrez tous ses bénéfices.",
      content: "Détails complets sur la kinésithérapie respiratoire...",
      videoUrl: "https://www.youtube.com/watch?v=CEY6PE8BxT8",
      date: "5 Mai 2026",
      readTime: "6 min",
      category: "Respiratoire",
      image: "https://cabinetkanzaizarane.com/storage/2023/08/kine_respiratoire_1.jpg.webp"
    },
    {
      title: "Prévention des blessures sportives : nos conseils",
      excerpt: "Des conseils pratiques pour les sportifs amateurs et confirmés afin d'éviter les blessures courantes.",
      content: "Le guide complet pour éviter les blessures...",
      videoUrl: "https://www.youtube.com/watch?v=fpqlWTkmCtk",
      date: "28 Avril 2026",
      readTime: "5 min",
      category: "Sport",
      image: "https://cdn3.institut-kinesitherapie.paris/wp-content/uploads/2022/04/eviter-les-blessures-sportives-cover-kinesitherapie-paris.jpg.webp"
    },
    {
      title: "Rééducation périnéale : briser les tabous",
      excerpt: "Tout ce qu'il faut savoir sur la rééducation périnéale, ses bienfaits et son déroulement en toute confidentialité.",
      content: "Explications détaillées sur les motifs de consultation...",
      videoUrl: "https://www.youtube.com/watch?v=tg-TBJruK5c",
      date: "20 Avril 2026",
      readTime: "8 min",
      category: "Périnée",
      image: "https://www.bernard-bruno-masseur-kinesitherapeute.fr/wp-content/uploads/2026/01/Exercices-de-relachement-du-perinee-reeducation-perineale-a-montpellier.jpg"
    },
    {
      title: "Maintenir son autonomie après 60 ans",
      excerpt: "L'importance de la kinésithérapie dans le maintien de l'autonomie et la prévention des chutes chez les seniors.",
      content: "Analyse approfondie des exercices d'équilibre...",
      videoUrl: "https://www.youtube.com/watch?v=Q_14eZ_kR8g",
      date: "12 Avril 2026",
      readTime: "6 min",
      category: "Gériatrie",
      image: "https://sf1.topsante.com/wp-content/uploads/topsante/2026/04/apres-60-ans-la-marche-ne-suffit-plus-ce-deuxieme-exercice-recommande-par-les-medecins-evite-la-perte-dautonomie.jpeg"
    }
  ];

  // 2. Fonction sghira li katakhod link d YouTube o katjbed meno ghir l-ID dyal video
  const getYouTubeEmbedUrl = (url:string) => {
    if (!url) return null;
    let videoId = '';
    
    // Katched standard link, short link (youtu.be), awla embed link
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      videoId = match[2];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // L-affichage dyal DETAIL
  if (selectedArticle) {
    const embedUrl = getYouTubeEmbedUrl(selectedArticle.videoUrl);

    return (
      <>
        {/* Detail Header */}
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-12">
          <div className="max-w-4xl mx-auto px-6">
            <button 
              onClick={() => setSelectedArticle(null)} 
              className="inline-flex items-center gap-2 text-[#0057B8] hover:text-[#004494] mb-6 transition-colors" 
              style={{ fontWeight: 600 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </button>
            <div className="inline-block bg-blue-100 text-[#0057B8] px-3 py-1 rounded-full text-sm mb-4" style={{ fontWeight: 600 }}>
              {selectedArticle.category}
            </div>
            <h1 className="text-gray-900 mb-4 leading-tight" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              {selectedArticle.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedArticle.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedArticle.readTime} de lecture
              </span>
            </div>
          </div>
        </section>

        {/* Detail Content */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 rounded-2xl mb-8">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6 mb-12">
              <p className="font-semibold text-xl text-gray-900">{selectedArticle.excerpt}</p>
              <p>{selectedArticle.content}</p>
            </div>

            {/* 3. Hna fin ghadi nbiyno l-video dial YouTube ila l9inah */}
            {embedUrl && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  Explication en vidéo
                </h3>
                {/* Had l-divs dyal Tailwind bach yji responsive exact (16:9 ratio) */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={embedUrl}
                    title={selectedArticle.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
  }

  // L-affichage l-3adi dial LISTE des articles
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-gray-900 mb-4" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Blog Santé
          </h1>
          <p className="text-xl text-gray-600">
            Conseils, astuces et informations pour prendre soin de votre santé
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="inline-block bg-blue-100 text-[#0057B8] px-3 py-1 rounded-full text-sm mb-3" style={{ fontWeight: 600 }}>
                    {article.category}
                  </div>
                  <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button 
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-2 text-[#0057B8] hover:text-[#004494] transition-colors" 
                    style={{ fontWeight: 600 }}
                  >
                    Lire l'article
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Restez informé
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Recevez nos derniers articles et conseils santé directement dans votre boîte mail
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#0057B8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg transition-colors whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </>
  );
}