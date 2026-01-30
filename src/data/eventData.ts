export interface Hall {
  id: number;
  name: string;
  college_allocation: string;
  available: number;
  total: number;
  map_url: string;
}

export interface Session {
  id: number;
  time: string;
  title: string;
  desc: string;
  venue: string;
  venue_map: string;
}

export interface EventDay {
  day: number;
  sessions: Session[];
}

// export const halls: Hall[] = [
//   {
//     id: 1,
//     name: "LBS Hall",
//     college_allocation: "IIT Delhi",
//     available: 15,
//     total: 50,
//     map_url: "https://maps.app.goo.gl/9P8yJzK7Fp8rWp2d6"
//   },
//   {
//     id: 2,
//     name: "Nehru Hall",
//     college_allocation: "BITS Pilani",
//     available: 8,
//     total: 30,
//     map_url: "https://maps.app.goo.gl/6v5M8yJzK7Fp8rWp2"
//   },
//   {
//     id: 3,
//     name: "Azad Hall",
//     college_allocation: "NIT Trichy",
//     available: 22,
//     total: 40,
//     map_url: "https://maps.app.goo.gl/3Q8yJzK7Fp8rWp2z1"
//   },
//   {
//     id: 4,
//     name: "Patel Hall",
//     college_allocation: "IIT Bombay",
//     available: 5,
//     total: 45,
//     map_url: "https://maps.app.goo.gl/PatelHallURL"
//   },
//   {
//     id: 5,
//     name: "RK Hall",
//     college_allocation: "IIT Madras",
//     available: 18,
//     total: 35,
//     map_url: "https://maps.app.goo.gl/RKHallURL"
//   },
//   {
//     id: 6,
//     name: "MMM Hall",
//     college_allocation: "NIT Warangal",
//     available: 12,
//     total: 40,
//     map_url: "https://maps.app.goo.gl/MMMHallURL"
//   }
// ];
export const halls = [
  {
    id: 1,
    name: "Sir Ashutosh Mukherjee Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/pK8K2NosQHz3j4Hs9"
  },
  {
    id: 2,
    name: "Azad Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/CLvu1GMPRVLEfy2Y8"
  },
  {
    id: 3,
    name: "B C Roy Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/BCRoyHall"
  },
  {
    id: 4,
    name: "B R Ambedkar Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/LhJAxDaJj68XHANc6"
  },
  {
    id: 5,
    name: "Gokhale Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/apEj6oggwCh4cdE98"
  },
  {
    id: 6,
    name: "Homi Bhabha Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/A9MByhV4VhN6QFBD7"
  },
  {
    id: 7,
    name: "J C Bose Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/Mf2s4DrvqRSFxPAeA"
  },
  {
    id: 8,
    name: "Lala Lajpat Rai Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/5xU5RPAgoCTyox9x9"
  },
  {
    id: 9,
    name: "Lal Bahadur Shastri Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/DLVtAyqZPz8iwGKi8"
  },
  {
    id: 10,
    name: "Madan Mohan Malviya Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/hMXt5VWpna8Qm4rK6"
  },
  {
    id: 11,
    name: "Meghnad Saha Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/tsJGmxXpDAFFevJb8"
  },
  {
    id: 12,
    name: "Mother Teresa Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/mVUdtMmmPNSQGYmXA"
  },
  {
    id: 13,
    name: "Nehru Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/AeVZivE6MWRNhGdZ8"
  },
  {
    id: 14,
    name: "Patel Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/yzeJrami7416b4Ew9"
  },
  {
    id: 15,
    name: "Radha Krishnan Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/tY3if6cs1oBmVPQP7"
  },
  {
    id: 16,
    name: "Rajendra Prasad Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/3yp5Ss194CQ9MZYk6"
  },
  {
    id: 17,
    name: "Rani Laxmibai Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/87MK1UizENdd4kQr7"
  },
  {
    id: 18,
    name: "Sister Nivedita Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/ikxyVQNhZkMtoyBW8"
  },
  {
    id: 19,
    name: "Sarojini Naidu / Indira Gandhi Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/9yyc3euGeUHsaD7P8"
  },
  {
    id: 20,
    name: "Vidyasagar Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/axoZHFaWzXx6P7Jr7"
  },
  {
    id: 21,
    name: "Zakir Hussain Hall",
    college_allocation: "IIT KGP",
    map_url: "https://maps.app.goo.gl/mB1WRkNwTwqqfcqr9"
  }
];




// export const events: EventDay[] = [
//   {
//     day: 1,
//     sessions: [
//       {
//         id: 101,
//         time: "09:00 AM",
//         title: "Opening Ceremony",
//         desc: "Inaugural session with keynote speakers including industry leaders and academic pioneers. Join us as we kick off the Global Entrepreneurship Summit with an inspiring opening address.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 102,
//         time: "11:30 AM",
//         title: "Fintech Revolution",
//         desc: "Exploring the future of digital payments, blockchain technology, and how financial innovation is reshaping the global economy.",
//         venue: "Kalidas Auditorium",
//         venue_map: "https://maps.app.goo.gl/KalidasURL"
//       },
//       {
//         id: 103,
//         time: "02:00 PM",
//         title: "Startup Funding 101",
//         desc: "Learn the essentials of securing funding for your startup, from seed rounds to Series A and beyond.",
//         venue: "Vikramshila Hall",
//         venue_map: "https://maps.app.goo.gl/VikramshilaURL"
//       },
//       {
//         id: 104,
//         time: "04:00 PM",
//         title: "AI in Business",
//         desc: "Discover how artificial intelligence is transforming business operations and creating new opportunities.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 105,
//         time: "06:00 PM",
//         title: "Networking Dinner",
//         desc: "Connect with fellow entrepreneurs, investors, and mentors over dinner.",
//         venue: "Technology Guest House",
//         venue_map: "https://maps.app.goo.gl/TGHouseURL"
//       }
//     ]
//   },
//   {
//     day: 2,
//     sessions: [
//       {
//         id: 201,
//         time: "09:00 AM",
//         title: "Sustainable Startups",
//         desc: "Building businesses that prioritize environmental and social impact without compromising profitability.",
//         venue: "Kalidas Auditorium",
//         venue_map: "https://maps.app.goo.gl/KalidasURL"
//       },
//       {
//         id: 202,
//         time: "10:30 AM",
//         title: "Product Design Workshop",
//         desc: "Hands-on workshop on user-centered product design and rapid prototyping.",
//         venue: "Vikramshila Hall",
//         venue_map: "https://maps.app.goo.gl/VikramshilaURL"
//       },
//       {
//         id: 203,
//         time: "01:00 PM",
//         title: "Venture Capital Panel",
//         desc: "Top VCs discuss what they look for in promising startups and share investment insights.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 204,
//         time: "03:00 PM",
//         title: "Marketing Masterclass",
//         desc: "Digital marketing strategies for startups on a budget.",
//         venue: "Kalidas Auditorium",
//         venue_map: "https://maps.app.goo.gl/KalidasURL"
//       },
//       {
//         id: 205,
//         time: "05:00 PM",
//         title: "Pitch Competition - Round 1",
//         desc: "First round of the startup pitch competition with 20 teams competing.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 206,
//         time: "07:30 PM",
//         title: "Founders' Fireside Chat",
//         desc: "Intimate conversation with successful founders sharing their journey.",
//         venue: "Technology Guest House",
//         venue_map: "https://maps.app.goo.gl/TGHouseURL"
//       }
//     ]
//   },
//   {
//     day: 3,
//     sessions: [
//       {
//         id: 301,
//         time: "09:00 AM",
//         title: "Global Market Expansion",
//         desc: "Strategies for taking your startup global and navigating international markets.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 302,
//         time: "10:30 AM",
//         title: "Legal Essentials",
//         desc: "Understanding intellectual property, contracts, and compliance for startups.",
//         venue: "Vikramshila Hall",
//         venue_map: "https://maps.app.goo.gl/VikramshilaURL"
//       },
//       {
//         id: 303,
//         time: "12:00 PM",
//         title: "Tech Trends 2025",
//         desc: "Emerging technologies that will shape the next decade of innovation.",
//         venue: "Kalidas Auditorium",
//         venue_map: "https://maps.app.goo.gl/KalidasURL"
//       },
//       {
//         id: 304,
//         time: "02:00 PM",
//         title: "Pitch Competition - Finals",
//         desc: "Top 10 teams compete for the grand prize in the final round.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 305,
//         time: "04:30 PM",
//         title: "Award Ceremony",
//         desc: "Celebrating the winners and outstanding participants of GES.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 306,
//         time: "06:00 PM",
//         title: "Closing Ceremony",
//         desc: "Wrapping up an incredible summit with closing remarks and future announcements.",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       }
//     ]
//   }
// ];
// export const events: EventDay[] = [
//   {
//     day: 1,
//     sessions: [
//       {
//         id: 101,
//         time: "05:30 PM",
//         title: "Opening Ceremony",
//         desc: "Opening address by Director IIT Kharagpur, Dean Innovation & Entrepreneurship, Head RMSoEE, E-Cell Team",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 102,
//         time: "06:30 PM",
//         title: "Keynote Session",
//         desc: "Mr. Vikas Lacchwani, Co-founder of Mcaffiene and Hyphen",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 103,
//         time: "05:30 PM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Netaji Auditorium",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       }
//     ]
//   },
//   {
//     day: 2,
//     sessions: [
//       {
//         id: 201,
//         time: "10:00 AM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Multiple Venues",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 202,
//         time: "10:00 AM",
//         title: "Finance Keynote",
//         desc: "Mr. Mayank Gupta, CFO of CarDekho",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 203,
//         time: "10:50 AM",
//         title: "Technology Keynote",
//         desc: "Mr. Murali Swaminathan, CTO of Freshworks",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 204,
//         time: "12:00 PM",
//         title: "The Delhivery Way",
//         desc: "Competitive event at Nalanda venue",
//         venue: "Nalanda",
//         venue_map: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9"
//       },
//       {
//         id: 205,
//         time: "11:00 AM",
//         title: "Startup Pitch",
//         desc: "Startup pitch for shortlisted teams",
//         venue: "V4",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 206,
//         time: "11:40 AM",
//         title: "Technology Panel",
//         desc: "Amar Bura, Abhishek Trigunait, Chandi Prasad Ojha, Ajit Kumar discussing technology trends",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 207,
//         time: "12:30 PM",
//         title: "Corporate Fireside",
//         desc: "Mr. Sunil Mantri and Mr. Kapish Jain in conversation",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 208,
//         time: "12:30 PM",
//         title: "CXOs Panel",
//         desc: "CFOs and business leaders panel discussion",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 209,
//         time: "01:00 PM",
//         title: "Business Game ",
//         desc: "Business simulation game competition",
//         venue: "Nalanda",
//         venue_map: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9"
//       },
//       {
//         id: 210,
//         time: "01:00 PM",
//         title: "Professors Meetup",
//         desc: "IIT KGP faculty meetup session",
//         venue: "RMOSEE",
//         venue_map: "https://maps.app.goo.gl/RMOSEEURL"
//       },
//       {
//         id: 211,
//         time: "01:20 PM",
//         title: "Product Panel Discussion",
//         desc: "CPOs discussing product strategies",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 212,
//         time: "02:10 PM",
//         title: "Co-founders Conclave",
//         desc: "Co-founders of Next Toppers sharing their journey",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 213,
//         time: "03:00 PM",
//         title: "Product Oriented Thesis Projects",
//         desc: "IIT KGP Faculty Team workshop on product ideation to launch",
//         venue: "V3",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 214,
//         time: "03:00 PM",
//         title: "Technology Workshop",
//         desc: "Mr. Amar Bura from Samsara leading workshop",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 215,
//         time: "03:00 PM",
//         title: "Keynote Session",
//         desc: "Ms. Shruti Gat, Founder of Recla",
//         venue: "V3",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 216,
//         time: "03:50 PM",
//         title: "Keynote Session",
//         desc: "Mrs. Aditi Agrawal, Head of Product at Cult.sport",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 217,
//         time: "04:00 PM",
//         title: "CXO's Roundtable Micro Competition",
//         desc: "Executive roundtable competition",
//         venue: "V4",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 218,
//         time: "05:00 PM",
//         title: "Campus Connect Elevation capital Fireside",
//         desc: "Fireside chat with Aniket Shah from Swish",
//         venue: "Bhatnagar",
//         venue_map: "https://maps.app.goo.gl/bBPeTyRAAUEHyqWz9"
//       },
//       {
//         id: 219,
//         time: "05:30 PM",
//         title: "Finance Keynote Session",
//         desc: "Mr. Shresta Sahani, National Lead Trainer at SVP HDFC Mutual Fund",
//         venue: "Multiple Venues",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       }
//     ]
//   },
//   {
//     day: 3,
//     sessions: [
//       {
//         id: 301,
//         time: "10:00 AM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Multiple Venues",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 302,
//         time: "10:00 AM",
//         title: "Intern Carnival",
//         desc: "Providing internship opportunities",
//         venue: "Multiple Venues",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 303,
//         time: "10:00 AM",
//         title: "MAS",
//         desc: "Meet with investors including Vivek Bajoria, Rathnakar Samavedam, and angel investors",
//         venue: "AI.4.ICPS",
//         venue_map: "https://maps.app.goo.gl/yUaPBmr8TQd3ZukS8"
//       },
//       {
//         id: 304,
//         time: "10:00 AM",
//         title: "Keynote",
//         desc: "Mr. Ajay Kashyap, CPTO of LeadSchool",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 305,
//         time: "10:50 AM",
//         title: "Soonicorn Panel",
//         desc: "Founders of Freedom app, Recyclekaro, and ESDS Software Solution",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 306,
//         time: "11:00 AM",
//         title: "Bid 2 Win Micro Competition",
//         desc: "Competitive bidding game",
//         venue: "V4",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 307,
//         time: "11:00 AM",
//         title: "Startup Pitch",
//         desc: "Startup pitch for selected teams",
//         venue: "V3",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 308,
//         time: "11:40 AM",
//         title: "CXOs Panel",
//         desc: "Leaders from CoinDCX, Navan, JM Financials, and Aurobindo Pharma",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 309,
//         time: "12:00 PM",
//         title: "Invest-o-spective ",
//         desc: "Investment simulation competition",
//         venue: "Nalanda",
//         venue_map: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9"
//       },
//       {
//         id: 310,
//         time: "12:00 PM",
//         title: "Connect the dots Networking Session",
//         desc: "Networking event for participants",
//         venue: "Multiple Venues",
//         venue_map: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA"
//       },
//       {
//         id: 311,
//         time: "12:30 PM",
//         title: "Workshop",
//         desc: "Blockchain and Web3 workshop by Monad Foundation",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 312,
//         time: "01:00 PM",
//         title: "Investor Startup Connect Networking Session",
//         desc: "Networking between investors and startups",
//         venue: "AI.4.ICPS",
//         venue_map: "https://maps.app.goo.gl/yUaPBmr8TQd3ZukS8"
//       },
//       {
//         id: 313,
//         time: "01:15 PM",
//         title: "Workshop",
//         desc: "Mr. Umesh, CTO of Pocket fm",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 314,
//         time: "02:00 PM",
//         title: "Venture Vault Micro Competition",
//         desc: "Venture capital game competition",
//         venue: "V3",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 315,
//         time: "02:15 PM",
//         title: "Finance Keynote",
//         desc: "Ms. Madhuri, Director Legal and Investment at Ivycap",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 316,
//         time: "02:05 PM",
//         title: "Shark Tank Panel",
//         desc: "Founders pitching to panel: Aishwarya, Sourav Gupta, Gurnandan Singh, Debjani Mukherjee",
//         venue: "V2",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 317,
//         time: "02:55 PM",
//         title: "Founders Panel",
//         desc: "Vasanth Rajaram, Abhishek Choudhary, Harshvardhan Chauhan, Ajay Warrier",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 318,
//         time: "03:00 PM",
//         title: "Product Oriented Thesis Projects",
//         desc: "IIT KGP Faculty Team workshop on product ideation to launch",
//         venue: "V3",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 319,
//         time: "04:00 PM",
//         title: "ProdEdge ",
//         desc: "Product edge competition",
//         venue: "Nalanda",
//         venue_map: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9"
//       },
//       {
//         id: 320,
//         time: "04:35 PM",
//         title: "Workshop on Digital Marketing",
//         desc: "Mr. Pramod Maloo leading workshop",
//         venue: "V1",
//         venue_map: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9"
//       },
//       {
//         id: 321,
//         time: "06:00 PM",
//         title: "Closing Ceremony",
//         desc: "Address by Dean R&D and MD STEP TOAT",
//         venue: "TOAT",
//         venue_map: "https://maps.app.goo.gl/5TPqfVhpXbqCv6rE8"
//       },
//       {
//         id: 322,
//         time: "07:30 PM",
//         title: "Social Night",
//         desc: "Social gathering with Ashish Solanki",
//         venue: "TOAT",
//         venue_map: "https://maps.app.goo.gl/5TPqfVhpXbqCv6rE8"
//       }
//     ]
//   }
// ];

// const VENUE_MAPS = {
//   NETAJI: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA",
//   V1: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
//   V2: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
//   V3: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
//   V4: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
//   SN_BOSE: "https://maps.app.goo.gl/xRsHnhi3P2EbcVpv7",
//   NALANDA: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9",
//   RMOSEE: "https://maps.app.goo.gl/vdKMRPzErB5AgvUP7",
//   AI_4_ICPS: "https://maps.app.goo.gl/yUaPBmr8TQd3ZukS8",
//   TOAT: "https://maps.app.goo.gl/5TPqfVhpXbqCv6rE8",
//   MULTIPLE: "https://maps.app.goo.gl/rGyfbzSURMmUzsoa9"
// };

// export const events: EventDay[] = [
//   {
//     day: 1,
//     sessions: [
//       {
//         id: 101,
//         time: "5:30 PM - 6:30 PM",
//         title: "Opening Ceremony",
//         desc: "Opening address by Director IIT Kharagpur, Dean Innovation & Entrepreneurship, Head RMSoEE, E-Cell Team",
//         venue: "Netaji Auditorium",
//         venue_map: VENUE_MAPS.NETAJI
//       },
//       {
//         id: 102,
//         time: "6:30 PM - 7:30 PM",
//         title: "Keynote Session",
//         desc: "Mr. Vikas Lacchwani, Co-founder of Mcaffiene and Hyphen",
//         venue: "Netaji Auditorium",
//         venue_map: VENUE_MAPS.NETAJI
//       },
//       {
//         id: 103,
//         time: "5:30 PM - 10:00 PM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Multiple Venues",
//         venue_map: VENUE_MAPS.MULTIPLE
//       }
//     ]
//   },
//   {
//     day: 2,
//     sessions: [
//       {
//         id: 201,
//         time: "10:00 AM - 10:00 PM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Multiple Venues",
//         venue_map: VENUE_MAPS.MULTIPLE
//       },
//       {
//         id: 202,
//         time: "10:00 AM - 10:45 AM",
//         title: "Finance Keynote",
//         desc: "Mr. Mayank Gupta, CFO of CarDekho",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 203,
//         time: "10:50 AM - 11:35 AM",
//         title: "Technology Keynote",
//         desc: "Mr. Murali Swaminathan, CTO of Freshworks",
//         venue: "V2",
//         venue_map: VENUE_MAPS.V2
//       },
//       {
//         id: 204,
//         time: "11:00 AM - 12:00 PM",
//         title: "Career in VC",
//         desc: "Session with Elevation Capital",
//         venue: "V3",
//         venue_map: VENUE_MAPS.V3
//       },
//       {
//         id: 205,
//         time: "12:00 PM - 5:00 PM",
//         title: "The Delhivery Way",
//         desc: "Macro Competition",
//         venue: "SN Bose",
//         venue_map: VENUE_MAPS.SN_BOSE
//       },
//       {
//         id: 206,
//         time: "11:00 AM - 2:00 PM",
//         title: "Startup Quiz",
//         desc: "Quiz competition for startups",
//         venue: "V4",
//         venue_map: VENUE_MAPS.V4
//       },
//       {
//         id: 207,
//         time: "11:40 AM - 12:25 PM",
//         title: "Technology Panel",
//         desc: "Mr. Amar Bura (Head of Business Technology, Samsara), Mr. Abhishek Trigunait (Founder, Improzo), Mr. Chandi Prasad Ojha (CTO, Movate), Mr. Ajit Kumar (CTO, Bharat Pe), Mr. Gautam Chakraborty (AGM Tally Solutions)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 208,
//         time: "12:30 PM - 1:15 PM",
//         title: "CXOs Panel",
//         desc: "Mr. Amit Bhardwaj (CFO, BatterySmart), Mr. Anand Panda (Business Head, BillDesk), Mr. Nitin Gosar (Fund Manager, BOI MF), Mr. Amith Kumar (Senior Director Marketing, Netradyne)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 209,
//         time: "1:00 PM - 5:00 PM",
//         title: "Business Game",
//         desc: "Macro Competition - Business simulation game",
//         venue: "Nalanda",
//         venue_map: VENUE_MAPS.NALANDA
//       },
//       {
//         id: 210,
//         time: "1:00 PM - 2:00 PM",
//         title: "Professors Meetup",
//         desc: "IIT KGP faculty meetup session",
//         venue: "RMSoEE",
//         venue_map: VENUE_MAPS.RMOSEE
//       },
//       {
//         id: 211,
//         time: "1:20 PM - 2:05 PM",
//         title: "Product Panel Discussion",
//         desc: "Mr. Garimella Pavan Teja (CPO, Eclypse), Mr. Gaurav Srivastava (CPTO, FarEye), Mr. Mithil Srivastav (VP-Product, Isprava & Lohono Stays)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 212,
//         time: "1:05 PM - 1:50 PM",
//         title: "Finance Keynote Session",
//         desc: "Mr. Shresta Sahani, National Lead Trainer at SVP HDFC Mutual Fund",
//         venue: "V2",
//         venue_map: VENUE_MAPS.V2
//       },
//       {
//         id: 213,
//         time: "2:10 PM - 2:55 PM",
//         title: "Corporate Fireside",
//         desc: "Mr. Kapish Jain (President, IIFL Finance) and Mr. Sunil Mantri (CEO, WHSmith India) in conversation",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 214,
//         time: "3:00 PM - 5:00 PM",
//         title: "Product Oriented Thesis Projects",
//         desc: "IIT KGP Faculty Team workshop on product ideation to launch",
//         venue: "V3",
//         venue_map: VENUE_MAPS.V3
//       },
//       {
//         id: 215,
//         time: "3:00 PM - 3:45 PM",
//         title: "Panel Discussion",
//         desc: "Mr. Shobhit Nirwan, Mr. Digraj Rajput, and Mr. Prashant, Co-founders of Next Toppers",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 216,
//         time: "3:50 PM - 4:35 PM",
//         title: "Product Keynote",
//         desc: "Mrs. Aditi Agrawal, Head of Product at Cult.sport",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 217,
//         time: "4:00 PM - 6:00 PM",
//         title: "CXO's Roundtable",
//         desc: "Micro Competition - Executive roundtable",
//         venue: "V4",
//         venue_map: VENUE_MAPS.V4
//       },
//       {
//         id: 218,
//         time: "5:00 PM - 6:00 PM",
//         title: "Campus Connect - Elevation Capital Fireside",
//         desc: "Fireside chat with Aniket Shah, Founder of Swish",
//         venue: "Ravindra Muktangan TOAT",
//         venue_map: VENUE_MAPS.TOAT
//       }
//     ]
//   },
//   {
//     day: 3,
//     sessions: [
//       {
//         id: 301,
//         time: "10:00 AM - 10:00 PM",
//         title: "Product Expo",
//         desc: "Showcasing innovative products and prototypes from teams",
//         venue: "Multiple Venues",
//         venue_map: VENUE_MAPS.MULTIPLE
//       },
//       {
//         id: 302,
//         time: "10:00 AM - 10:00 PM",
//         title: "Intern Carnival",
//         desc: "Providing internship opportunities",
//         venue: "Multiple Venues",
//         venue_map: VENUE_MAPS.MULTIPLE
//       },
//       {
//         id: 303,
//         time: "10:00 AM - 1:00 PM",
//         title: "Million At Stake",
//         desc: "Meet with investors including Vivek Bajoria, Madhuri (Director, Investment and Legal at IvyCap Ventures), Deepak Daftari, Arijit Kar, Amit Jain (CEO Ashika Group), Kaushik Guha Thakurta, and Rishab Raj (Unicorn India Ventures)",
//         venue: "AI.4.ICPS",
//         venue_map: VENUE_MAPS.AI_4_ICPS
//       },
//       {
//         id: 304,
//         time: "10:00 AM - 10:45 AM",
//         title: "Keynote",
//         desc: "Mr. Ajay Kashyap, CPTO of LeadSchool",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 305,
//         time: "11:00 AM - 11:45 AM",
//         title: "Soonicorn Panel",
//         desc: "Mr. C S Sudheer (Founder, Freedom app), Mr. Prassann (Founder, Recyclekaro), Mr. Kishore Shah (Founder, ESDS Software Solution Ltd)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 306,
//         time: "11:00 AM - 1:00 PM",
//         title: "Bid 2 Win",
//         desc: "Micro Competition - Competitive bidding game",
//         venue: "V4",
//         venue_map: VENUE_MAPS.V4
//       },
//       {
//         id: 307,
//         time: "11:00 AM - 2:00 PM",
//         title: "Startup Pitch",
//         desc: "Startup pitch for selected teams",
//         venue: "V3",
//         venue_map: VENUE_MAPS.V3
//       },
//       {
//         id: 308,
//         time: "12:00 PM - 12:45 PM",
//         title: "CXOs Panel",
//         desc: "Mr. Sangeeth Aloysius (SVP, CoinDCX), Mr. Thiagarajan Rajagopalan (VP-Product, Navan), Mr. R Kalyanaraman (MD, JM Financials), Mr. Debashis Sarkar (Sr. VP Marketing, Aurobindo Pharma Ltd), Mr. Pratik Rokade (Director, JM Financial)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 309,
//         time: "12:00 PM - 4:00 PM",
//         title: "Invest-o-spective",
//         desc: "Macro Competition - Investment simulation",
//         venue: "SN Bose",
//         venue_map: VENUE_MAPS.SN_BOSE
//       },
//       {
//         id: 310,
//         time: "12:00 PM - 2:00 PM",
//         title: "Connect the Dots",
//         desc: "Networking Session for participants",
//         venue: "Multiple Venues",
//         venue_map: VENUE_MAPS.MULTIPLE
//       },
//       {
//         id: 311,
//         time: "1:00 PM - 1:45 PM",
//         title: "Workshop on Blockchain and Web3",
//         desc: "Workshop by Monad Foundation",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 312,
//         time: "1:00 PM - 2:00 PM",
//         title: "Investor Startup Connect",
//         desc: "Networking Session between investors and startups",
//         venue: "AI.4.ICPS",
//         venue_map: VENUE_MAPS.AI_4_ICPS
//       },
//       {
//         id: 313,
//         time: "2:00 PM - 4:00 PM",
//         title: "Venture Vault",
//         desc: "Micro Competition - Venture capital game",
//         venue: "V3",
//         venue_map: VENUE_MAPS.V3
//       },
//       {
//         id: 314,
//         time: "2:00 PM - 2:30 PM",
//         title: "Finance Keynote",
//         desc: "Ms. Madhuri, Director Legal and Investment at Ivycap",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 315,
//         time: "2:45 PM - 3:30 PM",
//         title: "Founders Panel",
//         desc: "Vasanth Rajaram (Director, Delhivery), Mr. Abhishek Choudhary (Founder, TrueFoundary), Mr. Harshvardhan Chauhan (Founder, Kombucha), Mr. Ajay Warrier (CEO, QWR)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 316,
//         time: "3:00 PM - 5:00 PM",
//         title: "Product Oriented Thesis Projects",
//         desc: "IIT KGP Faculty Team workshop on product ideation to launch",
//         venue: "V3",
//         venue_map: VENUE_MAPS.V3
//       },
//       {
//         id: 317,
//         time: "3:45 PM - 4:30 PM",
//         title: "Workshop on Digital Marketing",
//         desc: "Led by Mr. Pramod Maloo",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 318,
//         time: "4:45 PM - 5:30 PM",
//         title: "Shark Tank Panel",
//         desc: "Ms. Aishwarya (Founder, Auli Lifestyle), Mr. Sourav Gupta (Founder, My GunjanApp Studio), Mr. Gurnandan Singh (Founder, IMBO), Ms. Debjani Mukherjee (Founder, NaniGhar)",
//         venue: "V1",
//         venue_map: VENUE_MAPS.V1
//       },
//       {
//         id: 319,
//         time: "4:00 PM - 7:00 PM",
//         title: "ProdEdge",
//         desc: "Macro Competition - Product edge competition",
//         venue: "SN Bose",
//         venue_map: VENUE_MAPS.SN_BOSE
//       },
//       {
//         id: 320,
//         time: "6:00 PM - 7:30 PM",
//         title: "Closing Ceremony",
//         desc: "Address by Dean R&D, MD STEP, and Mr. Vishal Chaudhary (Co-Founder, Zetwerk) - Tentative",
//         venue: "Ravindra Muktangan TOAT",
//         venue_map: VENUE_MAPS.TOAT
//       },
//       {
//         id: 321,
//         time: "7:30 PM - 9:00 PM",
//         title: "Social Night",
//         desc: "Social gathering with Ashish Solanki",
//         venue: "Ravindra Muktangan TOAT",
//         venue_map: VENUE_MAPS.TOAT
//       }
//     ]
//   }
// ];
const VENUE_MAPS = {
  NETAJI: "https://maps.app.goo.gl/iQLUuzZi59DPnaNQA",
  V1: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
  V2: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
  V3: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
  V4: "https://maps.app.goo.gl/fPcxNKKK4GDTyGKS9",
  SN_BOSE: "https://maps.app.goo.gl/xRsHnhi3P2EbcVpv7",
  NALANDA: "https://maps.app.goo.gl/aYrgt1Vyn8Hj6wrA9",
  RMOSEE: "https://maps.app.goo.gl/vdKMRPzErB5AgvUP7",
  AI_4_ICPS: "https://maps.app.goo.gl/yUaPBmr8TQd3ZukS8",
  TOAT: "https://maps.app.goo.gl/5TPqfVhpXbqCv6rE8",
  MULTIPLE: "https://maps.app.goo.gl/rGyfbzSURMmUzsoa9"
};

export const events: EventDay[] = [
  {
    day: 1,
    sessions: [
      {
        id: 101,
        time: "5:30 PM - 6:30 PM",
        title: "Opening Ceremony",
        desc: "Opening address by Director, IIT Kharagpur, Dean Innovation & Entrepreneurship, Head, RMSoEE, E-Cell Team",
        venue: "Netaji Auditorium",
        venue_map: VENUE_MAPS.NETAJI
      },
      {
        id: 102,
        time: "6:30 PM - 7:30 PM",
        title: "Keynote Session",
        desc: "Mr. Vikas Lacchwani (Co-founder, Mcaffiene, Hyphen)",
        venue: "Netaji Auditorium",
        venue_map: VENUE_MAPS.NETAJI
      },
      {
        id: 103,
        time: "5:30 PM - 10:00 PM",
        title: "Product Expo",
        desc: "Showcasing innovative products and prototypes from teams",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      }
    ]
  },
  {
    day: 2,
    sessions: [
      {
        id: 201,
        time: "10:00 AM - 10:00 PM",
        title: "Product Expo",
        desc: "Showcasing innovative products and prototypes from teams",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      },
      {
        id: 202,
        time: "10:00 AM - 10:45 AM",
        title: "Finance Keynote",
        desc: "Mr. Mayank Gupta (CFO, CarDekho)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 203,
        time: "10:50 AM - 11:35 AM",
        title: "Technology Keynote",
        desc: "Mr. Murali Swaminathan (CTO, Freshworks)",
        venue: "V2",
        venue_map: VENUE_MAPS.V2
      },
      {
        id: 204,
        time: "11:00 AM - 12:00 PM",
        title: "Career in VC",
        desc: "Session with Elevation Capital",
        venue: "V3",
        venue_map: VENUE_MAPS.V3
      },
      {
        id: 205,
        time: "12:00 PM - 5:00 PM",
        title: "The Delhivery Way",
        desc: "Macro Competition",
        venue: "SN Bose",
        venue_map: VENUE_MAPS.SN_BOSE
      },
      {
        id: 206,
        time: "11:00 AM - 2:00 PM",
        title: "Startup Quiz",
        desc: "Quiz competition for startups",
        venue: "V4",
        venue_map: VENUE_MAPS.V4
      },
      {
        id: 207,
        time: "11:40 AM - 12:25 PM",
        title: "Technology Panel",
        desc: "Mr. Amar Bura (Head of Business Technology, Samsara)\nMr. Abhishek Trigunait (Founder, Improzo)\nMr. Chandi Prasad Ojha (CTO, Movate)\nMr. Ajit Kumar (CTO, Bharat Pe)\nMr. Gautam Chakraborty (AGM Tally Solutions)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 208,
        time: "12:30 PM - 1:15 PM",
        title: "CXOs Panel",
        desc: "Mr. Anand Panda (Business Head, BillDesk)\nMr. Nitin Gosar (Fund Manager, BOI MF)\nMr. Amith Kumar (Senior Director Marketing, Netradyne)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 209,
        time: "1:00 PM - 5:00 PM",
        title: "Business Game",
        desc: "Macro Competition - Business simulation game",
        venue: "Nalanda",
        venue_map: VENUE_MAPS.NALANDA
      },
      {
        id: 210,
        time: "1:00 PM - 2:00 PM",
        title: "Professors Meetup",
        desc: "IIT KGP faculty meetup session",
        venue: "RMSoEE",
        venue_map: VENUE_MAPS.RMOSEE
      },
      {
        id: 211,
        time: "1:20 PM - 2:05 PM",
        title: "Finance Keynote Session",
        desc: "Mr. Shresta Sahani (National Lead Trainer, SVP HDFC Mutual Fund)",
        venue: "V2",
        venue_map: VENUE_MAPS.V2
      },
      {
        id: 212,
        time: "2:10 PM - 2:55 PM",
        title: "Corporate Fireside",
        desc: "Mr. Sunil Mantri (CEO, WHSmith India)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 213,
        time: "3:00 PM - 5:00 PM",
        title: "Product Oriented Thesis Projects",
        desc: "IIT KGP Faculty Team workshop on product ideation to launch",
        venue: "V3",
        venue_map: VENUE_MAPS.V3
      },
      {
        id: 214,
        time: "3:00 PM - 3:45 PM",
        title: "Product Panel Discussion",
        desc: "Mr. Garimella Pavan Teja (CPO, Eclypse)\nMr. Gaurav Srivastava (CPTO, FarEye)\nMr. Mithil Srivastav (VP-Product, Isprava & Lohono Stays)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 215,
        time: "3:50 PM - 4:35 PM",
        title: "Product Keynote",
        desc: "Mrs. Aditi Agrawal (Head of Product, Cult.sport)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 216,
        time: "4:00 PM - 6:00 PM",
        title: "CXO's Roundtable",
        desc: "Micro Competition - Executive roundtable",
        venue: "V4",
        venue_map: VENUE_MAPS.V4
      },
      {
        id: 217,
        time: "5:00 PM - 6:00 PM",
        title: "Campus Connect - Elevation Capital Fireside",
        desc: "Fireside chat with Aniket Shah (Founder, Swish)",
        venue: "Ravindra Muktangan TOAT",
        venue_map: VENUE_MAPS.TOAT
      }
    ]
  },
  {
    day: 3,
    sessions: [
      {
        id: 301,
        time: "10:00 AM - 10:00 PM",
        title: "Product Expo",
        desc: "Showcasing innovative products and prototypes from teams",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      },
      {
        id: 302,
        time: "10:00 AM - 10:00 PM",
        title: "Intern Carnival",
        desc: "Providing internship opportunities",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      },
      {
        id: 303,
        time: "10:00 AM - 1:00 PM",
        title: "Million At Stake",
        desc: "Meet with investors including Vivek Bajoria, Madhuri (Director, Investment and Legal at IvyCap Ventures), Deepak Daftari, Arijit Kar, Amit Jain (CEO Ashika Group), Kaushik Guha Thakurta, and Rishab Raj (Unicorn India Ventures)",
        venue: "AI.4.ICPS",
        venue_map: VENUE_MAPS.AI_4_ICPS
      },
      {
        id: 304,
        time: "10:00 AM - 10:45 AM",
        title: "Keynote",
        desc: "Mr. Ajay Kashyap (CPTO, LeadSchool)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 305,
        time: "11:00 AM - 11:45 AM",
        title: "Soonicorn Panel",
        desc: "Mr. C S Sudheer (Founder, Freedom app)\nMr. Prassann (Founder, Recyclekaro)\nMr. Kishore Shah (Founder, ESDS Software Solution Ltd)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 306,
        time: "11:00 AM - 1:00 PM",
        title: "Bid 2 Win",
        desc: "Micro Competition - Competitive bidding game",
        venue: "V4",
        venue_map: VENUE_MAPS.V4
      },
      {
        id: 307,
        time: "11:00 AM - 2:00 PM",
        title: "Startup Pitch",
        desc: "Startup pitch for selected teams",
        venue: "V3",
        venue_map: VENUE_MAPS.V3
      },
      {
        id: 308,
        time: "12:00 PM - 12:45 PM",
        title: "CXOs Panel",
        desc: "Mr. Sangeeth Aloysius (SVP, CoinDCX)\nMr. Thiagarajan Rajagopalan (VP-Product, Navan)\nMr. R Kalyanaraman (MD, JM Financials)\nMr. Debashis Sarkar (Sr. VP Marketing, Aurobindo Pharma Ltd)\nMr. Pratik Rokade (Director, JM Financial)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 309,
        time: "12:00 PM - 4:00 PM",
        title: "Invest-o-spective",
        desc: "Macro Competition - Investment simulation",
        venue: "SN Bose",
        venue_map: VENUE_MAPS.SN_BOSE
      },
      {
        id: 310,
        time: "12:00 PM - 2:00 PM",
        title: "Connect the Dots",
        desc: "Networking session for participants",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      },
      {
        id: 311,
        time: "1:00 PM - 1:45 PM",
        title: "Workshop on Blockchain and Web3",
        desc: "Workshop by Monad Foundation",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 312,
        time: "1:00 PM - 2:00 PM",
        title: "Investor Startup Connect",
        desc: "Networking session between investors and startups",
        venue: "AI.4.ICPS",
        venue_map: VENUE_MAPS.AI_4_ICPS
      },
      {
        id: 313,
        time: "2:00 PM - 4:00 PM",
        title: "Venture Vault",
        desc: "Micro Competition - Venture capital game",
        venue: "V3",
        venue_map: VENUE_MAPS.V3
      },
      {
        id: 314,
        time: "2:00 PM - 2:30 PM",
        title: "Finance Keynote",
        desc: "Ms. Madhuri (Director, Legal and Investment at Ivycap)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 315,
        time: "2:45 PM - 3:30 PM",
        title: "Founders Panel",
        desc: "Vasanth Rajaram (Director, Delhivery)\nMr. Abhishek Choudhary (Founder, TrueFoundary)\nMr. Harshvardhan Chauhan (Founder, Kombucha)\nMr. Ajay Warrier (CEO, QWR)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 316,
        time: "3:00 PM - 5:00 PM",
        title: "Product Oriented Thesis Projects",
        desc: "IIT KGP Faculty Team workshop on product ideation to launch",
        venue: "Multiple Venues",
        venue_map: VENUE_MAPS.MULTIPLE
      },
      {
        id: 317,
        time: "3:45 PM - 4:30 PM",
        title: "Workshop on Digital Marketing",
        desc: "Led by Mr. Pramod Maloo",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 318,
        time: "4:45 PM - 5:30 PM",
        title: "Shark Tank Panel",
        desc: "Ms. Aishwarya (Founder, Auli Lifestyle)\nMr. Sourav Gupta (Founder, My GunjanApp Studio)\nMr. Gurnandan Singh (Founder, IMBO)\nMs. Debjani Mukherjee (Founder, NaniGhar)",
        venue: "V1",
        venue_map: VENUE_MAPS.V1
      },
      {
        id: 319,
        time: "4:00 PM - 7:00 PM",
        title: "ProdEdge",
        desc: "Macro Competition - Product edge competition",
        venue: "SN Bose",
        venue_map: VENUE_MAPS.SN_BOSE
      },
      {
        id: 320,
        time: "6:00 PM - 7:30 PM",
        title: "Closing Ceremony",
        desc: "Address by Dean R&D, MD STEP, and Mr. Vishal Chaudhary (Co-Founder, Zetwerk) - Tentative",
        venue: "Ravindra Muktangan TOAT",
        venue_map: VENUE_MAPS.TOAT
      },
      {
        id: 321,
        time: "7:30 PM - 9:00 PM",
        title: "Social Night",
        desc: "Social gathering with Ashish Solanki",
        venue: "Ravindra Muktangan TOAT",
        venue_map: VENUE_MAPS.TOAT
      }
    ]
  }
];