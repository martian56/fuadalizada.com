import type { Resources } from './en'

export const az: Resources = {
  nav: {
    work: 'İşlər',
    about: 'Haqqımda',
    experience: 'Təcrübə',
    contact: 'Əlaqə',
    getInTouch: 'Əlaqə saxla',
  },
  hero: {
    eyebrow: 'Proqram təminatı mühəndisi',
    desc: 'Bir layihəni əvvəldən sonuna qədər qurmağı sevirəm: istifadəçinin gördüyü tətbiqdən tutmuş, arxa planda işi görən sistemlərə qədər. Hazırda Alievs Space-də kiçik bir komandaya rəhbərlik edirəm.',
    viewWork: 'İşlərə bax',
  },
  about: {
    label: 'Haqqımda',
    h1: 'Saytlar, daxili sistemlər,',
    h2: 'ERP və CRM sistemləri,',
    h3: 'eləcə də mobil və masaüstü tətbiqlər qururam.',
    paragraph:
      'Son bir neçə ildir hər cür proqram təminatı qururam: saytlar, daxili alətlər, ERP və CRM sistemləri, mobil və masaüstü tətbiqlər. Əsasən Python, TypeScript, Java və Go ilə işləyirəm; iş daha aşağı səviyyə tələb edəndə Rust və ya C-yə keçirəm. Bunlarla yanaşı, öz hostinq və tələbə platformam olan Ufazien-i idarə edirəm və özüm sıfırdan Raven adlı proqramlaşdırma dili yaratmışam. Həmçinin UFAZ-da Kompüter Elmləri üzrə təhsil alıram.',
  },
  work: {
    h1: 'Qurduğum bəzi işlər.',
    h2: 'Hazırladığım layihələr və alətlər.',
  },
  raven: {
    eyebrow: 'Şəxsi layihəm',
    heading: 'Öz proqramlaşdırma dilim',
    desc: 'Rust ilə sıfırdan qurduğum proqramlaşdırma dili. İstədiyim xüsusiyyətlər heç bir dildə bir yerə yığışmırdı: C++ kimi sürətli, Rust kimi təhlükəsiz, amma yenə də asan oxunan. Ona görə də özüm yaratdım. Sonra da dayanmadım və onun ətrafında bütöv bir ekosistem qurdum: kod agenti (rook), GUI alətlər dəsti (quill), terminal UI framework-u (plumage), paket meneceri (rvpm) və birbaşa Raven-in özündə yazılmış verilənlər bazası klientləri.',
    visit: 'Raven-ə bax',
    source: 'Github',
  },
  projects: {
    ufazien:
      'Ən böyük layihəm. Tələbə platforması kimi başladı, sonra böyüdükcə böyüdü: GPA hesablayıcıları, pulsuz hostinq, bloqlar, süni intellektlə dərs köməyi, icmalar. Digər işlərimin çoxu da elə bu brend altındadır.',
    redcell:
      'LLM agentlərinin bütöv bir penetrasiya testini Kali konteynerinin içində aparıb sonunda hesabatı da özlərinin yazdığı red team platforması. Gedişatı canlı izləyir, çatdan yönləndirir, istədiyin an terminalı və ya brauzeri öz əlinə alırsan.',
    lumnicode:
      'Kod yazarkən köməyə gələn süni intellekt aləti: özü kod yazır və təkliflər verir ki, daha tez irəliləyəsən. Təkbaşına da, komanda ilə eyni layihədə işləyəndə də eyni dərəcədə yaxşı işləyir.',
    orgmem:
      'Həm insanların, həm də süni intellekt agentlərinin yazdığı komanda vikisi. İclaslarına qoşulur, hər cümlənin altına onu deyənin adını yazır və komandanın nəyi qərara aldığını soruşanda cavab verir.',
    devlane:
      'Tapşırıqlar, sprintlər, sənədlər və məsələlərin idarə olunması üçün Jira və Linear-ə açıq mənbəli alternativ. Onu ona görə qurdum ki, istifadə etdiyimiz alətlər həmişə işin özündən daha ağır gəlirdi.',
    alievsLms:
      'Tədris bizneslərinin idarə olunması üçün platforma: qruplar, cədvəl, davamiyyət, ev tapşırığı, imtahanlar, brauzerdə canlı dərslər və abunə ödənişləri. Sahib, müəllim və şagird eyni məlumatın üstündə işləyir.',
    rook:
      'Terminalın içində yaşayan, Raven ilə yazılmış kod agenti. Fayllarını oxuyub redaktə edir, əmrləri sən təsdiqlədikdən sonra işə salır və hansı modeli göstərsən onunla danışır.',
    epointSandbox:
      'epoint.az ödəniş gateway-inin lokal versiyası: merchant hesabı olmadan inteqrasiyanı qurub sınaqdan keçirə bilirsən. Bir konteynerin içində API, ödəniş səhifəsi, callback-lər və dashboard var.',
    cleat:
      'GitHub hesabları və orqanizasiyaları üçün təhlükəsizlik, baxım və audit aləti. Gözdən qaçan riskli tənzimləmələri və unudulmuş girişləri üzə çıxarır.',
    chatops:
      'Bütün serverlərini idarə etmək üçün tək bir panel: canlı göstəricilər, Docker idarəetməsi, bildirişlər və terminal. Beləcə beş ayrı alət arasında ora-bura qaçmağa son qoyursan.',
    sempublishing:
      'SEM Beynəlxalq Yayın Evinin saytı: kitab və müəllif kataloqu, hamının pulsuz yükləyə bildiyi açıq giriş nəşrləri, üstündə də mağaza. API-ni, ictimai saytı və işçi panelini mən qurdum.',
    quantadb:
      'Real yük altında da sürətli və sabit qalsın deyə qurduğum verilənlər bazası idarəetmə sistemi.',
    rustfuzz:
      'Saytları sınağa çəkmək və ən gözlənilməz, nadir xətaları üzə çıxarmaq üçün Rust-da yazdığım veb fuzzer.',
    epointPython:
      'epoint.az üçün Python klienti: hər 30 endpoint, sync və async, baştan-ayağa tipli. İmzalamanı və callback yoxlamasını özü aparır, inteqrasiyaların çoxu elə orada uğursuz olur.',
    payriff:
      'Payriff ödəniş gateway-i üçün Python klienti. Sync və async, baştan-ayağa tipli, yeganə asılılığı isə httpx-dir.',
    onesms:
      '1sms.az SMS API-si üçün Python klienti. OTP və bildiriş göndərir, uğursuz sorğuları özü təkrarlayır, webhook imzalarını yoxlayır; hər şeyin async variantı da var.',
  },
  experience: {
    h1: 'İndiyə qədər keçdiyim yol.',
    h2: 'İş yerləri, bir az frilans və oxuduğum universitet.',
    education: 'Təhsil',
    items: [
      {
        period: '2026 – İndi',
        role: 'Süni İntellekt Mühəndisi',
        company: 'Apercura',
        desc: 'LLM-lər ilə işləyirəm, onların ətrafında agentlər, harness-lər və pipeline-lar qururam, DSPy və GEPA kimi alətlərlə onları optimizasiya edirəm. Digər vaxtlarda isə RL data, RL environment mövzularında araşdırmalar edir, OrgMem məhsulunu başdan sona develop edirəm.',
      },
      {
        period: '2025 – İndi',
        role: 'İnkişaf Rəhbəri',
        company: 'Alievs Space',
        desc: 'Eyni anda bir neçə layihədə developer komandalarına rəhbərlik edirəm.',
      },
      {
        period: '2025',
        role: 'Python Developer',
        company: 'SEM Beynəlxalq Yayın Evi',
        desc: 'Onların onlayn kitab mağazasını Django, PostgreSQL, Docker və Nginx ilə sıfırdan qurdum.',
      },
      {
        period: '2024 – 2025',
        role: 'Proqram təminatı developeri',
        company: 'Neuron Technologies',
        desc: 'Korporativ proqram təminatı üzərində işlədim; əsas diqqətim işlərin etibarlı və sürətli qalması idi.',
      },
      {
        period: '2023 – 2025',
        role: 'Bug Bounty ovçusu',
        company: 'HackerOne',
        desc: 'Təhlükəsizlik boşluqları tapıb onları OWASP prinsiplərinə uyğun, düzgün şəkildə bildirirdim; işin böyük hissəsi şəbəkə təhlili idi.',
      },
      {
        period: '2022 – 2023',
        role: 'Full-stack Developer',
        company: 'Freelancer.com',
        desc: 'Müştərilər üçün React, Django və ya Flask, həmçinin PostgreSQL ilə full-stack tətbiqlər qurdum; bir xeyli də üçüncü tərəf API-ları ilə işlədim.',
      },
    ],
    edu: [
      {
        period: '2023 – 2027',
        role: 'Bakalavr, Kompüter Elmləri',
        company: 'Fransa-Azərbaycan Universiteti (UFAZ)',
        desc: 'Proqram mühəndisliyinin əsasları, C proqramlaşdırması və xeyli komanda işi.',
      },
    ],
  },
  skills: {
    h1: 'İşlətdiyim Texnologiyalar',
    groups: {
      languages: 'Dillər',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Verilənlər bazaları',
      cloud: 'Bulud',
      devops: 'DevOps',
      security: 'Təhlükəsizlik',
      systems: 'Sistemlər və kompilyatorlar',
    },
  },
  contact: {
    label: 'Əlaqə',
    h1: 'Ağlında bir fikir var?',
    h2: 'Gəl birlikdə quraq.',
    whatsapp: 'Salam Fuad! Portfolio saytından yazıram və əlaqə saxlamaq istəyirəm.',
    socials: { github: 'GitHub', website: 'Sayt', email: 'E-poçt' },
    footer: '© {{year}} Fuad Alizada',
  },
}
