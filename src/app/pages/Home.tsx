import {
  ChevronRight,
  Star,
  Stethoscope,
  Bone,
  Wind,
  Zap,
  Activity,
  Heart,
  User,
} from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-gray-900" style={{ fontSize: '3rem', lineHeight: '1.1', fontWeight: 700 }}>
                Votre santé, entre des mains expertes
              </h1>
              <p className="text-xl text-gray-600">
                Cabinet de Kinésithérapie Physio-spam – Agadir. Consultations sur rendez-vous du lundi au samedi.
              </p>
              <Link
                to="/rendez-vous"
                className="inline-flex bg-[#0057B8] hover:bg-[#004494] text-white px-8 py-4 rounded-lg transition-colors items-center gap-2 group"
              >
                Prendre rendez-vous
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1645005513751-e22717a66ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaHlzaW90aGVyYXB5JTIwY2xpbmljJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDA3NDg1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cabinet de kinésithérapie moderne"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>8+</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Ce que nous faisons pour vous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des soins adaptés à vos besoins, dispensés avec expertise et bienveillance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Bone className="w-7 h-7 text-[#0057B8]" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Rééducation orthopédique
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prise en charge post-opératoire, traumatismes, entorses, fractures.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Kinésithérapie respiratoire
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traitement des pathologies respiratoires chroniques et désencombrement.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                Traitement des douleurs chroniques
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lombalgie, cervicalgie, tendinites, sciatique.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/soins"
              className="inline-flex items-center gap-2 text-[#0057B8] hover:text-[#004494] transition-colors"
              style={{ fontWeight: 600 }}
            >
              Voir tous nos soins
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Ils nous font confiance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Après une opération du genou, Dr. Mansouri m'a accompagné avec professionnalisme et patience.
                Grâce à elle, j'ai retrouvé ma mobilité bien plus vite que prévu."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0057B8] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                  KB
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>Karim B.</div>
                  <div className="text-sm text-gray-600">52 ans</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Un cabinet chaleureux et une kinésithérapeute à l'écoute. Les séances de rééducation post-natale
                ont été essentielles pour moi."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0057B8] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                  NE
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>Nadia E.</div>
                  <div className="text-sm text-gray-600">38 ans</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "Souffrant de lombalgies chroniques depuis des années, j'ai enfin trouvé un soulagement durable.
                Cabinet très professionnel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0057B8] rounded-full flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                  AM
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>Ahmed M.</div>
                  <div className="text-sm text-gray-600">45 ans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0057B8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-6" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Prêt à prendre soin de votre santé ?
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Prenez rendez-vous dès aujourd'hui et commencez votre parcours vers le bien-être
          </p>
          <Link
            to="/rendez-vous"
            className="inline-flex bg-white hover:bg-gray-100 text-[#0057B8] px-8 py-4 rounded-lg transition-colors items-center gap-2 group"
            style={{ fontWeight: 600 }}
          >
            Prendre rendez-vous
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
