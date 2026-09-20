// TODO: replace once domain is purchased
const EMAIL = 'info@domain-pending.com'

export const siteContent = {
  companyName: 'Bahr Al Uloom Passenger Transportation',
  brandName: 'Bahr Al Uloom',
  contactPersonName: 'Mr. Mahboob Khan',
  contactPersonRole: 'Owner / Manager / HR',
  phone: '+971 56 594 7661',
  phoneHref: 'tel:+971565947661',
  phoneNote: 'Call us about current openings.',
  whatsappHref: 'https://wa.me/971565947661',
  whatsappNote: 'Fastest way to reach our recruitment team.',
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  emailNote: 'Send your CV and licence details.',
  address: 'MRA Business Center, Al Garhoud, Dubai, UAE',
  addressNote: 'Office 34, 1st Floor',
  serviceArea: 'Dubai and all seven Emirates',
  availability: 'Placements available across the UAE.',
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1Bv4LqvSoY/' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mahboobdrivingjobsuae' },
    { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@mahboobkhan.hyd786' },
  ],
  feedUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT8Rybdg0ztD2kkM5VC9zQwYlvP2A-aX8AyxTTH2_XjA7PWWeRM9fIsB_klIF1oy9B5XIN67U5xOxWY/pub?gid=66872880&single=true&output=csv',
  // TODO: Replace with real driver testimonials before launch.
  // Deliberately non-realistic: no real names, no pay or satisfaction claims,
  // so nothing reads as a genuine review if this ships before the swap.
  testimonials: [
    { id: 'placeholder-1', name: 'Placeholder Driver 1', role: 'Placeholder role', rating: 5, quote: 'Sample testimonial text — to be replaced with a real driver review.' },
    { id: 'placeholder-2', name: 'Placeholder Driver 2', role: 'Placeholder role', rating: 5, quote: 'Sample testimonial text — to be replaced with a real driver review.' },
    { id: 'placeholder-3', name: 'Placeholder Driver 3', role: 'Placeholder role', rating: 5, quote: 'Sample testimonial text — to be replaced with a real driver review.' },
    { id: 'placeholder-4', name: 'Placeholder Driver 4', role: 'Placeholder role', rating: 5, quote: 'Sample testimonial text — to be replaced with a real driver review.' },
  ],
  servicesIntro: 'We place professional drivers into steady chauffeur roles across the UAE. These are the kinds of positions we recruit for.',
  services: [
    { title: 'Corporate Placements', description: 'Long-term roles driving for companies and executive clients, with regular hours and a consistent monthly income.' },
    { title: 'Airport Transfer Roles', description: 'Scheduled pickup and drop-off work on flight timings, well suited to drivers who prefer predictable routes.' },
    { title: 'Event & Occasion Driving', description: 'Weddings, galas, and private functions, offering flexible shift work that fits alongside a regular placement.' },
  ],
}
