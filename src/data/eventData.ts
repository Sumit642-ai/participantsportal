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

export const halls: Hall[] = [
  {
    id: 1,
    name: "LBS Hall",
    college_allocation: "IIT Delhi",
    available: 15,
    total: 50,
    map_url: "https://maps.app.goo.gl/9P8yJzK7Fp8rWp2d6"
  },
  {
    id: 2,
    name: "Nehru Hall",
    college_allocation: "BITS Pilani",
    available: 8,
    total: 30,
    map_url: "https://maps.app.goo.gl/6v5M8yJzK7Fp8rWp2"
  },
  {
    id: 3,
    name: "Azad Hall",
    college_allocation: "NIT Trichy",
    available: 22,
    total: 40,
    map_url: "https://maps.app.goo.gl/3Q8yJzK7Fp8rWp2z1"
  },
  {
    id: 4,
    name: "Patel Hall",
    college_allocation: "IIT Bombay",
    available: 5,
    total: 45,
    map_url: "https://maps.app.goo.gl/PatelHallURL"
  },
  {
    id: 5,
    name: "RK Hall",
    college_allocation: "IIT Madras",
    available: 18,
    total: 35,
    map_url: "https://maps.app.goo.gl/RKHallURL"
  },
  {
    id: 6,
    name: "MMM Hall",
    college_allocation: "NIT Warangal",
    available: 12,
    total: 40,
    map_url: "https://maps.app.goo.gl/MMMHallURL"
  }
];

export const events: EventDay[] = [
  {
    day: 1,
    sessions: [
      {
        id: 101,
        time: "09:00 AM",
        title: "Opening Ceremony",
        desc: "Inaugural session with keynote speakers including industry leaders and academic pioneers. Join us as we kick off the Global Entrepreneurship Summit with an inspiring opening address.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 102,
        time: "11:30 AM",
        title: "Fintech Revolution",
        desc: "Exploring the future of digital payments, blockchain technology, and how financial innovation is reshaping the global economy.",
        venue: "Kalidas Auditorium",
        venue_map: "https://maps.app.goo.gl/KalidasURL"
      },
      {
        id: 103,
        time: "02:00 PM",
        title: "Startup Funding 101",
        desc: "Learn the essentials of securing funding for your startup, from seed rounds to Series A and beyond.",
        venue: "Vikramshila Hall",
        venue_map: "https://maps.app.goo.gl/VikramshilaURL"
      },
      {
        id: 104,
        time: "04:00 PM",
        title: "AI in Business",
        desc: "Discover how artificial intelligence is transforming business operations and creating new opportunities.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 105,
        time: "06:00 PM",
        title: "Networking Dinner",
        desc: "Connect with fellow entrepreneurs, investors, and mentors over dinner.",
        venue: "Technology Guest House",
        venue_map: "https://maps.app.goo.gl/TGHouseURL"
      }
    ]
  },
  {
    day: 2,
    sessions: [
      {
        id: 201,
        time: "09:00 AM",
        title: "Sustainable Startups",
        desc: "Building businesses that prioritize environmental and social impact without compromising profitability.",
        venue: "Kalidas Auditorium",
        venue_map: "https://maps.app.goo.gl/KalidasURL"
      },
      {
        id: 202,
        time: "10:30 AM",
        title: "Product Design Workshop",
        desc: "Hands-on workshop on user-centered product design and rapid prototyping.",
        venue: "Vikramshila Hall",
        venue_map: "https://maps.app.goo.gl/VikramshilaURL"
      },
      {
        id: 203,
        time: "01:00 PM",
        title: "Venture Capital Panel",
        desc: "Top VCs discuss what they look for in promising startups and share investment insights.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 204,
        time: "03:00 PM",
        title: "Marketing Masterclass",
        desc: "Digital marketing strategies for startups on a budget.",
        venue: "Kalidas Auditorium",
        venue_map: "https://maps.app.goo.gl/KalidasURL"
      },
      {
        id: 205,
        time: "05:00 PM",
        title: "Pitch Competition - Round 1",
        desc: "First round of the startup pitch competition with 20 teams competing.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 206,
        time: "07:30 PM",
        title: "Founders' Fireside Chat",
        desc: "Intimate conversation with successful founders sharing their journey.",
        venue: "Technology Guest House",
        venue_map: "https://maps.app.goo.gl/TGHouseURL"
      }
    ]
  },
  {
    day: 3,
    sessions: [
      {
        id: 301,
        time: "09:00 AM",
        title: "Global Market Expansion",
        desc: "Strategies for taking your startup global and navigating international markets.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 302,
        time: "10:30 AM",
        title: "Legal Essentials",
        desc: "Understanding intellectual property, contracts, and compliance for startups.",
        venue: "Vikramshila Hall",
        venue_map: "https://maps.app.goo.gl/VikramshilaURL"
      },
      {
        id: 303,
        time: "12:00 PM",
        title: "Tech Trends 2025",
        desc: "Emerging technologies that will shape the next decade of innovation.",
        venue: "Kalidas Auditorium",
        venue_map: "https://maps.app.goo.gl/KalidasURL"
      },
      {
        id: 304,
        time: "02:00 PM",
        title: "Pitch Competition - Finals",
        desc: "Top 10 teams compete for the grand prize in the final round.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 305,
        time: "04:30 PM",
        title: "Award Ceremony",
        desc: "Celebrating the winners and outstanding participants of GES.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      },
      {
        id: 306,
        time: "06:00 PM",
        title: "Closing Ceremony",
        desc: "Wrapping up an incredible summit with closing remarks and future announcements.",
        venue: "Netaji Auditorium",
        venue_map: "https://maps.app.goo.gl/NetajiAuditoriumURL"
      }
    ]
  }
];
