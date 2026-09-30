export const TRIP_DATA = {
  destination: "London and Paris",
  duration: "10 Days",
  origin: "London",
  budget: "High (Luxury)",
  travel_interests: "landmarks",
  special_requirements: "no",
  group_size: "Couple",
  hotels: [
    {
      hotel_name: "The Savoy",
      hotel_address: "Strand, London WC2R 0EZ, United Kingdom",
      price_per_night: "£1,200",
      hotel_image_url:
        "https://images.unsplash.com/photo-1551882547-ff43c63ebeec?auto=format&fit=crop&w=800&q=80",
      geo_coordinates: {
        latitude: 51.5104,
        longitude: -0.1201,
      },
      rating: 4.8,
      description:
        "An iconic luxury hotel on the Strand, offering world-class service, exquisite dining, and timeless elegance for a romantic stay.",
    },
    {
      hotel_name: "Hôtel Plaza Athénée",
      hotel_address: "25 Avenue Montaigne, 75008 Paris, France",
      price_per_night: "€1,500",
      hotel_image_url:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      geo_coordinates: {
        latitude: 48.8665,
        longitude: 2.3046,
      },
      rating: 4.9,
      description:
        "Located in the heart of Paris, this hotel is famous for its red awnings and unparalleled views of the Eiffel Tower, perfect for a luxury romantic escape.",
    },
  ],
  itinerary: [
    {
      day: 1,
      day_plan: "Arrival in London and exploration of historical Tower Hill",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "Tower of London",
          place_details:
            "A historic castle on the north bank of the River Thames, home to the Crown Jewels.",
          place_image_url:
            "https://images.unsplash.com/photo-1586083445040-029739d945e2?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.5081,
            longitude: -0.0759,
          },
          place_address: "London EC3N 4AB, United Kingdom",
          ticket_pricing: "£34 per adult",
          time_travel_each_location: "30 mins from hotel",
          best_time_to_visit: "10:00 AM",
        },
      ],
    },
    {
      day: 2,
      day_plan: "Exploring the Royal and Political heart of London",
      best_time_to_visit_day: "Mid-day",
      activities: [
        {
          place_name: "Westminster Abbey",
          place_details:
            "A magnificent Gothic abbey and the coronation site of British monarchs.",
          place_image_url:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.4994,
            longitude: -0.1273,
          },
          place_address: "20 Deans Yd, London SW1P 3PA, United Kingdom",
          ticket_pricing: "£29 per adult",
          time_travel_each_location: "15 mins by taxi",
          best_time_to_visit: "11:00 AM",
        },
        {
          place_name: "Big Ben & Palace of Westminster",
          place_details:
            "The iconic clock tower and the seat of the UK Parliament.",
          place_image_url:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.5007,
            longitude: -0.1246,
          },
          place_address: "London SW1A 0AA, United Kingdom",
          ticket_pricing: "Free (Viewing from outside)",
          time_travel_each_location: "5 mins walk",
          best_time_to_visit: "02:00 PM",
        },
      ],
    },
    {
      day: 3,
      day_plan: "Royal traditions and luxury shopping",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "Buckingham Palace",
          place_details:
            "The official London residence of the UK's sovereigns.",
          place_image_url:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.5014,
            longitude: -0.1419,
          },
          place_address: "London SW1A 1AA, United Kingdom",
          ticket_pricing: "£32 (State Rooms)",
          time_travel_each_location: "20 mins by taxi",
          best_time_to_visit: "10:30 AM",
        },
      ],
    },
    {
      day: 4,
      day_plan: "Panoramic views and the Thames riverside",
      best_time_to_visit_day: "Evening",
      activities: [
        {
          place_name: "The London Eye",
          place_details:
            "A giant observation wheel offering incredible views of the London skyline.",
          place_image_url:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.5033,
            longitude: -0.1195,
          },
          place_address:
            "Riverside Building, County Hall, London SE1 7PB, United Kingdom",
          ticket_pricing: "£35 per adult",
          time_travel_each_location: "25 mins by taxi",
          best_time_to_visit: "06:00 PM (Sunset)",
        },
      ],
    },
    {
      day: 5,
      day_plan: "Cultural immersion and travel to Paris",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "British Museum",
          place_details: "Dedicated to human history, art, and culture.",
          place_image_url:
            "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 51.5194,
            longitude: -0.127,
          },
          place_address: "Great Russell St, London WC1B 3DG, United Kingdom",
          ticket_pricing: "Free (Donation recommended)",
          time_travel_each_location: "20 mins by taxi",
          best_time_to_visit: "10:00 AM",
        },
      ],
    },
    {
      day: 6,
      day_plan: "Arrival in Paris and Eiffel Tower magic",
      best_time_to_visit_day: "Evening",
      activities: [
        {
          place_name: "Eiffel Tower",
          place_details: "The most iconic symbol of France and Paris.",
          place_image_url:
            "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 48.8584,
            longitude: 2.2945,
          },
          place_address:
            "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
          ticket_pricing: "€28 (Summit)",
          time_travel_each_location: "45 mins from station",
          best_time_to_visit: "08:00 PM",
        },
      ],
    },
    {
      day: 7,
      day_plan: "Art and History in the heart of Paris",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "Louvre Museum",
          place_details:
            "The world's largest art museum and a historic monument.",
          place_image_url:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 48.8606,
            longitude: 2.3376,
          },
          place_address: "Rue de Rivoli, 75001 Paris, France",
          ticket_pricing: "€22 per adult",
          time_travel_each_location: "20 mins by taxi",
          best_time_to_visit: "09:00 AM",
        },
      ],
    },
    {
      day: 8,
      day_plan: "Gothic landmarks and Seine River romance",
      best_time_to_visit_day: "Afternoon",
      activities: [
        {
          place_name: "Notre Dame Cathedral",
          place_details: "A masterpiece of French Gothic architecture.",
          place_image_url:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 48.853,
            longitude: 2.3499,
          },
          place_address:
            "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
          ticket_pricing: "Free (Exterior viewing)",
          time_travel_each_location: "15 mins by taxi",
          best_time_to_visit: "02:00 PM",
        },
      ],
    },
    {
      day: 9,
      day_plan: "Imperial grandeur and high-end shopping",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "Arc de Triomphe",
          place_details:
            "A monument honoring those who fought and died for France.",
          place_image_url:
            "https://images.unsplash.com/photo-1503917988258-f19782f41041?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 48.8738,
            longitude: 2.295,
          },
          place_address: "Pl. Charles de Gaulle, 75008 Paris, France",
          ticket_pricing: "€16",
          time_travel_each_location: "25 mins by taxi",
          best_time_to_visit: "11:00 AM",
        },
      ],
    },
    {
      day: 10,
      day_plan: "Bohemian Paris and final views",
      best_time_to_visit_day: "Morning",
      activities: [
        {
          place_name: "Sacré-Cœur Basilica",
          place_details:
            "A beautiful white basilica located at the summit of Montmartre.",
          place_image_url:
            "https://images.unsplash.com/photo-1503917988258-f19782f41041?auto=format&fit=crop&w=800&q=80",
          geo_coordinates: {
            latitude: 48.8867,
            longitude: 2.3431,
          },
          place_address: "35 Rue du Chevalier de la Barre, 75018 Paris, France",
          ticket_pricing: "Free",
          time_travel_each_location: "30 mins by taxi",
          best_time_to_visit: "10:00 AM",
        },
      ],
    },
  ],
};
