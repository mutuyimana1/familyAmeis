import type { Icon } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ToothIcon, DentalImplantIcon, RootCanalIcon, WhiteningIcon, DentalCrownIcon, DentalBracesIcon } from '@/components/icons';

export const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Relationship & Family Problems", href: "/services/relationship-family-problems" },
      { name: "Life and Relationship Mentorship", href: "/services/life-relationship-mentorship" },
      { name: "Separation and Divorce Adjustment", href: "/services/separation-divorce-adjustment" },
      { name: "Premarital Education", href: "/services/premarital-education" },
      { name: "Sexual Difficulties", href: "/services/sexual-difficulties" },
      { name: "Romantic relationship skills", href: "/services/romantic-skills" },
      { name: "Parenting skills", href: "/services/parenting-skills" },
      { name: "Psychotherapy", href: "/services/psychotherapy" },
    ],
  },

  {
    name: "News",
    href: "/news",
    submenu: [
      { name: "In Rwanda", href: "/news/rwanda" },
      { name: "Abroad", href: "/news/abroad" },
      { name: "Family", href: "/news/family" },
      { name: "Entertainment news updates", href: "/news/entertainment" },
      { name: "Innovation", href: "/news/innovation" },
      { name: "Communications", href: "/news/communications" },
    ],
  },

  {
    name: "Blog",
    href: "/blog",
    submenu: [
      { name: "Topic of the day", href: "/blog/topic-of-the-day" },
      { name: "Family counseling", href: "/blog/family-counseling" },
      { name: "Conclusion for the topic", href: "/blog/conclusion" },
    ],
  },

  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];


export const services = [
  {
    icon: ToothIcon,
    title: 'Counseling Services',
    description: 'Personalized mental health support tailored to meet your unique needs and goal.',
    slug: 'general-family',
  },
  {
    icon: WhiteningIcon,
    title: 'Marriage and Family Therapy',
    description: 'Therapy sessions aimed at improving family dynamics and resolving conflicts within relationships.',
    slug: 'teeth-whitening',
  },
  {
    icon: DentalImplantIcon,
    title: 'Psychoeducation',
    description: 'Learn to affirm Each other in the family, Lear to encourage family.',
    slug: 'family-implants',
  },
];


export const doctors = [
  {
    id: 1,
    name: 'Dr. Jessica Taylor',
    specialty: 'General family',
    image: 'doctor-1',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Kevin Martin',
    specialty: 'Orthodontist',
    image: 'doctor-2',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Amanda Bell',
    specialty: 'Pediatric family',
    image: 'doctor-3',
    social: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Fidens',
    location: 'Kagali',
    image: 'testimonial-1',
    rating: 5,
    comment: 'Mugisha ndagushimira ko wagize uruhare mugushinga umuryango ufasha abashakanye kubaka urugo ruhamye!Inama mwampaye zaranyubatse kuburyo ubu urugo rwacu rutakirangwamo amakimbirane pe!Komerezaho kubaka imiryango yacu.',
  },
  {
    id: 2,
    name: 'Immaculate',
    location: 'Musanze',
    image: 'testimonial-2',
    rating: 5,
    comment: 'Gusa nabaye ahantu henshi ariko FAAR yarampumuye ndashimira Mugisha wampaye link nta gihombo pe,Imana izamwijyanire🙏🏽',
  },
  {
    id: 3,
    name: 'Aimable',
    location: 'Musanze',
    image: 'testimonial-2',
    rating: 5,
    comment: 'Mugisha ndagira ngo mbashimire ubufasha mwampaye.Nyuma yo kubasaba inama yuko nakakira kuba narasanze umugabo ansha inyuma kumuturanyi wacu rwose inama nagiriwe Nakuyemo byinshi ndetse ngerageza kubishyira mubikorwa pe kandi ubu bya gender neza!umugabo Namusabye Ikiganiro turaganira ntuje rwose ansaba imbabazi ndamwumva ubu ntakibazo!Mugisha ndagushimira cyaneeeee kukumenya ni Ibyagaciro kuko wambaye hafi pe ndashimira nabavandimwe tubana muri FAAR gusa nkasaba ngo niba umuntu asabye inama aba ababaye Kandi asaba inama kuko byamurenze,tumufashe Tutamuhutaje cg ngo tumurimireho amasinde kuko uyu munsi niwe ejo ni wowe!Kubabarira rwose Biraruhura. Warakoze cyanee Mugisha uri Umuhanga pee!',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "🌽𝐓𝐞𝐤𝐞𝐫𝐞𝐳𝐚 𝐮𝐛𝐮𝐫𝐲𝐨  𝐰𝐚𝐛𝐲𝐚𝐳𝐚 𝐮𝐦𝐮𝐬𝐚𝐫𝐮𝐫𝐨 𝐮𝐦𝐮𝐧𝐬𝐢 𝐰𝐚𝐫𝐮𝐡𝐮𝐭𝐬𝐞𝐡𝐨 𝐦𝐮𝐧𝐲𝐮𝐧𝐠𝐮 𝐳'𝐮𝐦𝐮𝐫𝐲𝐚𝐧𝐠𝐨🌽",
    slug: 'regular-family-check-ups',
    date: '2024-07-22',
    category: 'family Health',
    excerpt: "🌺Abashakanye benshi ubona badafite umwanya wo gukora bimwe mu by'ingenzi kumunsi wabo w'ikiruhuko: kuganira nk'abashakanye,gutoza abanauburere bukwiye...!",
    fullContent: "🌺Abashakanye benshi ubona badafite umwanya wo gukora bimwe mu by'ingenzi kumunsi wabo w'ikiruhuko: kuganira nk'abashakanye,gutoza abanauburere bukwiye...! Ntibobona igihe cyo kugira inamay'urugo ngo bahe abana inshingano bitewen'ibyo bashoboye gukora! 🌺Burya akenshi bipfira mumikoreshereze y'igihe! Kuruhuka bikaba kuryama igihe kinini,igihe babyukiye ugasanga buri wese mubashakanye agiye muri gahunda zebwite,gusura abandi bantu, kujya kuri telefone,gutembera...,Wasobanura gute ukuntu umuntu agira amasaha 16 ari maso,ariko ntacyo yapanze ayakoramo? 🌺Burya ikintu cy'agaciro umubyeyi aha umwana ni uburere bumufasha kuba ku isi yishakamo ibisubizo we ubwe ndetse no kubandi bantu bazamukenera! Fata akanya uganire n'abana, buri wese abone ko umwitayeho mu buryo bwihariye! Mukore inama y'urugo nk'umuryango, mubereke ko na bo bafite uruhare   mu kurema umunezero w'urugo!Mubahe ubwisanzure bagaragaze impano zabo!mutoze abana gukora uturimo two murugo.Abajijutse batumwe guhaha, bibafashe kumenya agaciro k'amafaranga n'uko akoreshwa!",
    image: 'blog-1',
  },
  {
    id: 2,
    title: "Itoze kubaha amahitamo y'uwo mwashakanye mumirire/muminywere, umuremere ibyishimo.",
    slug: 'about-teeth-whitening',
    date: '2024-07-15',
    category: 'Cosmetic family',
    excerpt: "Ku isi buri muntu wese agira ibintu akunda kurya cg akunda kunywa,bitewe n'amahitamo y'ibyiyumvo bye.",
    fullContent: "Ku isi buri muntu wese agira ibintu akunda kurya cg akunda kunywa,bitewe n'amahitamo y'ibyiyumvo bye.Mumibanire y'abashakanye bibaho ko mudahuza mubyo murya cg munywa kandi si ikibazo. Kuba uwo mwashakanye hari ikintu akunda,Sibyiza gusebya ibyo akunda kurya cg kunywa:Inzoga ziranuka,indagara ziranuka ntimukaziteke,sinkunda ibiraha bikorwa nabi,ntimugateke igitoki sinkikunda,lsombe sinyirya ntimukayiteke,... Niba abikunda utabikunda,nibyiza kubivuga, ukamuha n'igihe cyo kubirya cg kubinywa,kuba udakunda kubirya,ntibikwiye kuba ihame ko n'uwo mwashakanye atabirya kandi we abikunda.Iyo buri wese yishyira akizana kumahitamo y'ibyo umwe arya cg anywa mumuryango bizana ibyishimo kandi bigatera ubwisanzure hagati y'abashakanye kumeza.Buri wese mumahitamo ye, akwiriye kubaha n'amahitamo y'abandi,ndetse byaba byiza ugafasha uwo mwashakanye kubona icyo akunda kurya nubwo wowe waba utagikunda.Guhitamo ibyo murya/munywa si ikimenyetso cyo kudahuza,ahubwo bishobora kuba umurunga w'urukundo rwanyu!",
    image: 'blog-2',
  },
  {
    id: 3,
    title: "🌹𝐀𝐛𝐚𝐬𝐡𝐚𝐤𝐚𝐧𝐲𝐞 𝐛𝐮𝐫𝐢 𝐰𝐞𝐬𝐞 𝐚𝐛𝐚 𝐚𝐟𝐢𝐭𝐞 𝐢𝐬𝐡𝐢𝐧𝐠𝐚𝐧𝐨 𝐳𝐢𝐦𝐮𝐫𝐞𝐛𝐚,𝐢𝐡𝐚𝐭𝐢𝐫𝐞 𝐤𝐮𝐳𝐮𝐳𝐚 𝐢𝐧𝐬𝐡𝐢𝐧𝐠𝐚𝐧𝐨 𝐳𝐚𝐰𝐞 𝐧𝐤'𝐮𝐦𝐮𝐠𝐨𝐫𝐞/𝐮𝐦𝐮𝐠𝐚𝐛𝐨!🌹",
    slug: 'childs-first-family-visit',
    date: '2024-07-08',
    category: 'Pediatric family',
    excerpt: '💐Mubikwiye kuranga urugo rwiza,abashakanye bakwiye Kugabana inshingano no kuzuzuza,mugashishoza neza ibyo.....',
    fullContent: "💐Mubikwiye kuranga urugo rwiza,abashakanye bakwiye Kugabana inshingano no kuzuzuza,mugashishoza neza ibyo mwakoresha amaboko yanyu,mugendeye kumpano buri wese yifitemo ndetse n'ubushobozi bw'icyo buri wese ashobora kwinjiza mu rugo rwanyu!💐Kuzuza inshingano, bigomba gukorwa mu rukundo rwinshi,ntamirimo yagenewe igitsina runaka,mugafatanya byose kandi mwubahana nibwo urugo rwanyu ruzagira umudendezo! Birashoboka ko buri wese yunganira uwo bashakanye igihe atihagije mu byo yasabwaga gukora,gusa jya wirinda kubigira ihame,kuburyo wabigira itegeko bitazavamo ikindi kintu gisa no kubahuka!💐Bikore mu bwitange, wirinda agasigane nokuvunishanya,bizagenda neza kandi bibatere kunga ubumwe mumuryango wangu.",
    image: 'blog-3',
  },
];
