/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Database, 
  Bell, 
  ShieldCheck, 
  Stethoscope, 
  Building2, 
  Users,
  ArrowRight,
  ExternalLink,
  Info,
  Activity,
  FlaskConical,
  AlertTriangle,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
  children?: {
    title: string;
    items: { label: string; href: string }[];
  }[];
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  {
    label: "À propos de l'AMMPS",
    href: "#",
    children: [
      {
        title: "Présentation",
        items: [
          { label: "Mot du Directeur Général", href: "#" },
          { label: "Missions et Vision", href: "#" },
          { label: "Valeurs Institutionnelles", href: "#" },
        ]
      },
      {
        title: "Gouvernance",
        items: [
          { label: "Conseil d'Administration", href: "#" },
          { label: "Organigramme", href: "#" },
        ]
      },
      {
        title: "Performance",
        items: [
          { label: "Plan Stratégique", href: "#" },
          { label: "Rapports Annuels", href: "#" },
          { label: "Indicateurs de Qualité", href: "#" },
        ]
      }
    ]
  },
  {
    label: "Médicaments",
    href: "#",
    children: [
      {
        title: "Autorisations",
        items: [
          { label: "Déposer une demande AMM", href: "#" },
          { label: "Renouvellement & Variations", href: "#" },
          { label: "Rapports d'Évaluation", href: "#" },
        ]
      },
      {
        title: "Contrôle & Qualité",
        items: [
          { label: "Rôle du LNCM", href: "#" },
          { label: "Contrôle pré/post AMM", href: "#" },
          { label: "Libération des lots", href: "#" },
        ]
      },
      {
        title: "Recherche",
        items: [
          { label: "Essais Cliniques", href: "#" },
          { label: "Base nationale des recherches", href: "#" },
        ]
      }
    ]
  },
  {
    label: "Vigilance",
    href: "#",
    children: [
      {
        title: "Sécurité Sanitaire",
        items: [
          { label: "Pharmacovigilance", href: "#" },
          { label: "Matériovigilance", href: "#" },
          { label: "Réactovigilance", href: "#" },
          { label: "Cosmétovigilance", href: "#" },
        ]
      },
      {
        title: "Déclaration",
        items: [
          { label: "Déclarer un effet indésirable", href: "#" },
          { label: "Signalement produit suspect", href: "#" },
        ]
      }
    ]
  },
  {
    label: "Réglementation",
    href: "#",
    children: [
      {
        title: "Textes Légaux",
        items: [
          { label: "Lois & Décrets", href: "#" },
          { label: "Arrêtés", href: "#" },
        ]
      },
      {
        title: "Référentiels",
        items: [
          { label: "Lignes directrices", href: "#" },
          { label: "Bonnes pratiques", href: "#" },
          { label: "Actes Administratifs", href: "#" },
        ]
      }
    ]
  },
  {
    label: "E-Services",
    href: "#",
    children: [
      {
        title: "Plateformes",
        items: [
          { label: "TARKHISS", href: "#" },
          { label: "Portail des Opérateurs", href: "#" },
        ]
      },
      {
        title: "Ressources",
        items: [
          { label: "Formulaires Administratifs", href: "#" },
          { label: "Publications Officielles", href: "#" },
          { label: "FAQ", href: "#" },
        ]
      }
    ]
  }
];

// --- Components ---

const TopBar = () => (
  <div className="bg-slate-900 text-white py-2 px-6 hidden md:flex justify-between items-center text-xs">
    <div className="flex gap-6">
      <div className="flex items-center gap-2">
        <Phone size={14} className="text-blue-400" />
        <span>+212 (0) 537 77 00 00</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail size={14} className="text-blue-400" />
        <span>contact@ammps.ma</span>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
        <Globe size={14} />
        <span>Français</span>
        <ChevronDown size={12} />
      </div>
      <span className="text-slate-500">|</span>
      <a href="#" className="hover:text-blue-400 transition-colors">Espace Professionnel</a>
      <a href="#" className="hover:text-blue-400 transition-colors">Espace Citoyen</a>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4 md:mt-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-blue-900 leading-tight tracking-tight">AMMPS</span>
            <span className="text-[10px] uppercase text-slate-500 font-semibold tracking-widest hidden sm:block">
              Agence Marocaine du Médicament
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group nav-item px-3 py-2">
              <a href={item.href} className="text-sm font-medium text-slate-700 hover:text-blue-700 flex items-center gap-1 transition-colors">
                {item.label}
                {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </a>
              
              {item.children && (
                <div className="mega-menu p-8">
                  <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
                    {item.children.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-blue-700 font-bold text-xs uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                          {section.title}
                        </h4>
                        <ul className="space-y-3">
                          {section.items.map((subItem) => (
                            <li key={subItem.label}>
                              <a href={subItem.href} className="text-sm text-slate-600 hover:text-blue-600 flex items-center gap-2 group/link">
                                <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="ml-4 p-2 text-slate-500 hover:text-blue-700 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="font-bold text-slate-900">{item.label}</div>
                  <div className="pl-4 space-y-2">
                    {item.children?.map(section => (
                      <div key={section.title} className="space-y-1">
                        <div className="text-xs font-semibold text-blue-600 uppercase">{section.title}</div>
                        {section.items.map(sub => (
                          <a key={sub.label} href={sub.href} className="block text-sm text-slate-600 py-1">{sub.label}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck size={14} />
          Portail Officiel de la Santé Publique
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Garantir la <span className="text-blue-700">Qualité</span> et la <span className="text-blue-700">Sécurité</span> des Produits de Santé
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl">
          L'Agence Marocaine du Médicament et des Produits de Santé veille à la protection de la santé publique à travers une régulation rigoureuse et transparente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all flex items-center justify-center gap-2">
            Rechercher un médicament
            <Search size={18} />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            E-Services TARKHISS
            <ExternalLink size={18} />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
            alt="Laboratoire AMMPS" 
            className="w-full h-[500px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
        </div>
        
        {/* Floating Stats Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 max-w-[240px]"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Activity size={20} />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">12,450+</div>
              <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Médicaments Autorisés</div>
            </div>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-green-500" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const QuickActions = () => {
  const actions = [
    { icon: <Database />, title: "Base de données", desc: "Consultez la liste des médicaments autorisés au Maroc.", color: "bg-blue-500" },
    { icon: <FileText />, title: "Démarches AMM", desc: "Guide complet pour les demandes d'autorisation de mise sur le marché.", color: "bg-indigo-500" },
    { icon: <AlertTriangle />, title: "Vigilance", desc: "Signaler un effet indésirable ou un défaut de qualité.", color: "bg-red-500" },
    { icon: <FlaskConical />, title: "Essais Cliniques", desc: "Réglementation et suivi des recherches biomédicales.", color: "bg-emerald-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all group cursor-pointer"
            >
              <div className={`w-14 h-14 ${action.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100`}>
                {React.cloneElement(action.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{action.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {action.desc}
              </p>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                En savoir plus
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Actualités & Communiqués</h2>
          <p className="text-slate-500 max-w-xl">
            Restez informé des dernières décisions réglementaires, alertes sanitaires et activités de l'Agence.
          </p>
        </div>
        <button className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2">
          Voir toutes les actualités
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            date: "15 Mars 2024",
            tag: "Alerte",
            title: "Alerte de sécurité : Rappel de lots pour un médicament pédiatrique",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"
          },
          {
            date: "12 Mars 2024",
            tag: "Réglementation",
            title: "Publication des nouvelles lignes directrices sur les dispositifs médicaux",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
          },
          {
            date: "10 Mars 2024",
            tag: "Événement",
            title: "L'AMMPS participe au congrès international de pharmacovigilance",
            image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80&w=800"
          }
        ].map((news, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer hover:shadow-md transition-all">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-700">
                {news.tag}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                <Bell size={14} />
                {news.date}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-snug">
                {news.title}
              </h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                L'Agence Marocaine du Médicament et des Produits de Santé informe les professionnels de santé et le public de...
              </p>
              <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-blue-700 font-bold text-sm">Lire la suite</span>
                <Download size={18} className="text-slate-300 group-hover:text-blue-700 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SearchDatabase = () => (
  <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/30 skew-x-12 translate-x-1/2" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Accès aux Bases de Données</h2>
        <p className="text-blue-100 mb-10 text-lg">
          Recherchez en temps réel les médicaments autorisés, les établissements pharmaceutiques agréés et les essais cliniques en cours au Maroc.
        </p>
        
        <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-2xl">
          <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100">
            <Search className="text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Nom du médicament, DCI ou code..." 
              className="w-full py-4 text-slate-900 focus:outline-none"
            />
          </div>
          <div className="md:w-48 flex items-center px-4 gap-2">
            <Database className="text-slate-400" size={20} />
            <select className="w-full py-4 text-slate-600 bg-transparent focus:outline-none text-sm font-medium">
              <option>Médicaments</option>
              <option>Établissements</option>
              <option>Dispositifs</option>
            </select>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold transition-all">
            Rechercher
          </button>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm text-blue-200">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Mise à jour : Aujourd'hui à 09:00
          </div>
          <a href="#" className="text-sm text-white underline underline-offset-4 hover:text-blue-200 transition-colors">
            Consulter le répertoire complet (PDF)
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center font-bold text-lg">A</div>
            <span className="font-bold text-xl tracking-tight">AMMPS</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Établissement public doté de la personnalité morale et de l'autonomie financière, chargé de la régulation du secteur pharmaceutique au Maroc.
          </p>
          <div className="flex gap-4">
            {['facebook', 'twitter', 'linkedin', 'youtube'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-all">
                <div className="w-5 h-5 bg-slate-400" /> {/* Placeholder for social icons */}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-blue-400 uppercase text-xs tracking-widest">Liens Utiles</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Ministère de la Santé</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Secrétariat Général du Gouvernement</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Portail National des Réclamations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Marchés Publics</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-blue-400 uppercase text-xs tracking-widest">E-Services</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Plateforme TARKHISS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Annuaire des Pharmacies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Téléchargement de Formulaires</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ & Assistance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-blue-400 uppercase text-xs tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0" />
              <span>Avenue Mohamed V, Quartier Administratif, Rabat, Maroc</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>+212 (0) 537 77 00 00</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>contact@ammps.ma</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-medium">
        <p>© 2024 AMMPS. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickActions />
        <NewsSection />
        <SearchDatabase />
        
        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
                    <Building2 className="text-blue-700 mb-4" size={32} />
                    <h4 className="font-bold text-slate-900 mb-2">Institutionnel</h4>
                    <p className="text-xs text-slate-500">Structure de gouvernance moderne et transparente.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    <Users className="text-slate-700 mb-4" size={32} />
                    <h4 className="font-bold text-slate-900 mb-2">Capital Humain</h4>
                    <p className="text-xs text-slate-500">Experts dédiés à la sécurité sanitaire nationale.</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                    <Stethoscope className="text-slate-700 mb-4" size={32} />
                    <h4 className="font-bold text-slate-900 mb-2">Santé Publique</h4>
                    <p className="text-xs text-slate-500">Protection des citoyens contre les risques sanitaires.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
                    <ShieldCheck className="text-blue-700 mb-4" size={32} />
                    <h4 className="font-bold text-slate-900 mb-2">Régulation</h4>
                    <p className="text-xs text-slate-500">Contrôle rigoureux de la chaîne du médicament.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Une Vision Stratégique pour l'Avenir de la Santé</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                L'Agence Marocaine du Médicament et des Produits de Santé s'inscrit dans la dynamique de réforme du système national de santé. Notre mission est d'assurer la souveraineté sanitaire du Royaume à travers une régulation d'excellence.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Modernisation des processus d'autorisation",
                  "Renforcement de la surveillance du marché",
                  "Promotion de l'innovation pharmaceutique",
                  "Digitalisation complète des services"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                      <ArrowRight size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-blue-700 font-bold flex items-center gap-2 group">
                Découvrir notre plan stratégique 2024-2028
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Besoin d'assistance ?</h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
              Nos équipes sont à votre disposition pour répondre à vos questions réglementaires ou techniques. Contactez-nous via notre formulaire en ligne.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all">
                Nous contacter
              </button>
              <button className="px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Consulter la FAQ
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
