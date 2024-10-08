const Listings = [
  //random generated data for listings
  {
    id: 1,
    imageUrl: "https://placehold.co/400",
    title: "1 Kanal House for sale",
    address: "DHA Phase 6, Lahore",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 2350,
    propertyType: "house",
    isCommercial: false,
    price: 65000000,
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/400",
    title: "2 Kanal Villa for sale",
    address: "Bahria Town, Lahore",
    beds: 7,
    bath: 8,
    coveredAreaSQFT: 4500,
    propertyType: "villa",
    isCommercial: false,
    price: 150000000,
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/400",
    title: "5 Marla House for sale",
    address: "Johar Town, Lahore",
    beds: 3,
    bath: 4,
    coveredAreaSQFT: 1300,
    propertyType: "house",
    isCommercial: false,
    price: 20000000,
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/400",
    title: "10 Marla House for rent",
    address: "Wapda Town, Lahore",
    beds: 4,
    bath: 5,
    coveredAreaSQFT: 1800,
    propertyType: "house",
    isCommercial: false,
    price: 60000,
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/400",
    title: "12 Marla Commercial Plaza for sale",
    address: "Mall Road, Lahore",
    beds: 0,
    bath: 2,
    coveredAreaSQFT: 3200,
    propertyType: "commercial",
    isCommercial: true,
    price: 300000000,
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/400",
    title: "7 Marla House for sale",
    address: "Model Town, Lahore",
    beds: 4,
    bath: 4,
    coveredAreaSQFT: 1500,
    propertyType: "house",
    isCommercial: false,
    price: 35000000,
  },
  {
    id: 7,
    imageUrl: "https://placehold.co/400",
    title: "1 Kanal Plot for sale",
    address: "DHA Phase 7, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 4500,
    propertyType: "plot",
    isCommercial: false,
    price: 80000000,
  },
  {
    id: 8,
    imageUrl: "https://placehold.co/400",
    title: "3 Marla House for sale",
    address: "Iqbal Town, Lahore",
    beds: 2,
    bath: 3,
    coveredAreaSQFT: 1000,
    propertyType: "house",
    isCommercial: false,
    price: 13000000,
  },
  {
    id: 9,
    imageUrl: "https://placehold.co/400",
    title: "5 Kanal Farmhouse for sale",
    address: "Bedian Road, Lahore",
    beds: 6,
    bath: 7,
    coveredAreaSQFT: 5000,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 250000000,
  },
  {
    id: 10,
    imageUrl: "https://placehold.co/400",
    title: "8 Marla Office Space for rent",
    address: "Gulberg, Lahore",
    beds: 0,
    bath: 2,
    coveredAreaSQFT: 1200,
    propertyType: "commercial",
    isCommercial: true,
    price: 80000,
  },
  {
    id: 11,
    imageUrl: "https://placehold.co/400",
    title: "4 Marla House for sale",
    address: "Shadman, Lahore",
    beds: 3,
    bath: 3,
    coveredAreaSQFT: 1100,
    propertyType: "house",
    isCommercial: false,
    price: 18000000,
  },
  {
    id: 12,
    imageUrl: "https://placehold.co/400",
    title: "6 Marla Shop for sale",
    address: "Mall Road, Lahore",
    beds: 0,
    bath: 1,
    coveredAreaSQFT: 1600,
    propertyType: "commercial",
    isCommercial: true,
    price: 60000000,
  },
  {
    id: 13,
    imageUrl: "https://placehold.co/400",
    title: "15 Marla House for sale",
    address: "Cantt, Lahore",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 2800,
    propertyType: "house",
    isCommercial: false,
    price: 90000000,
  },
  {
    id: 14,
    imageUrl: "https://placehold.co/400",
    title: "2 Marla Shop for rent",
    address: "Liberty Market, Lahore",
    beds: 0,
    bath: 1,
    coveredAreaSQFT: 600,
    propertyType: "commercial",
    isCommercial: true,
    price: 40000,
  },
  {
    id: 15,
    imageUrl: "https://placehold.co/400",
    title: "10 Kanal Agricultural Land for sale",
    address: "Raiwind, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 0,
    propertyType: "land",
    isCommercial: false,
    price: 120000000,
  },
  {
    id: 16,
    imageUrl: "https://placehold.co/400",
    title: "12 Marla House for sale",
    address: "Bahria Orchard, Lahore",
    beds: 4,
    bath: 5,
    coveredAreaSQFT: 2100,
    propertyType: "house",
    isCommercial: false,
    price: 45000000,
  },
  {
    id: 17,
    imageUrl: "https://placehold.co/400",
    title: "1 Kanal Residential Plot for sale",
    address: "DHA Phase 8, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 4000,
    propertyType: "plot",
    isCommercial: false,
    price: 90000000,
  },
  {
    id: 18,
    imageUrl: "https://placehold.co/400",
    title: "20 Marla House for sale",
    address: "Model Town, Lahore",
    beds: 6,
    bath: 7,
    coveredAreaSQFT: 3200,
    propertyType: "house",
    isCommercial: false,
    price: 120000000,
  },
  {
    id: 19,
    imageUrl: "https://placehold.co/400",
    title: "5 Marla Office Space for rent",
    address: "DHA Phase 3, Lahore",
    beds: 3,
    bath: 2,
    coveredAreaSQFT: 1400,
    propertyType: "commercial",
    isCommercial: true,
    price: 70000,
  },
  {
    id: 20,
    imageUrl: "https://placehold.co/400",
    title: "3 Kanal Farmhouse for sale",
    address: "Barki Road, Lahore",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 3600,
    propertyType: "farmhouse",
    isCommercial: false,
    price: 200000000,
  },
  {
    id: 21,
    imageUrl: "https://placehold.co/400",
    title: "7 Marla House for sale",
    address: "Johar Town, Lahore",
    beds: 4,
    bath: 5,
    coveredAreaSQFT: 1700,
    propertyType: "house",
    isCommercial: false,
    price: 32000000,
  },
  {
    id: 22,
    imageUrl: "https://placehold.co/400",
    title: "4 Marla Shop for sale",
    address: "Gulberg, Lahore",
    beds: 0,
    bath: 1,
    coveredAreaSQFT: 800,
    propertyType: "commercial",
    isCommercial: true,
    price: 45000000,
  },
  {
    id: 23,
    imageUrl: "https://placehold.co/400",
    title: "2 Kanal House for rent",
    address: "Cavalry Ground, Lahore",
    beds: 6,
    bath: 7,
    coveredAreaSQFT: 3500,
    propertyType: "house",
    isCommercial: false,
    price: 250000,
  },
  {
    id: 24,
    imageUrl: "https://placehold.co/400",
    title: "Office for sale",
    address: "MM Alam Road, Lahore",
    beds: 6,
    bath: 7,
    coveredAreaSQFT: 3500,
    propertyType: "office",
    isCommercial: true,
    price: 250000,
  },
  {
    id: 25,
    imageUrl: "https://placehold.co/400",
    title: "Apartment for rent",
    address: "Lahore Cantt, Lahore",
    beds: 3,
    bath: 4,
    coveredAreaSQFT: 1500,
    propertyType: "apartment",
    isCommercial: false,
    price: 60000,
  },
  {
    id: 26,
    imageUrl: "https://placehold.co/400",
    title: "Plot for sale",
    address: "DHA Phase 13, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 0,
    propertyType: "plot",
    isCommercial: false,
    price: 4500000,
  },
  {
    id: 27,
    imageUrl: "https://placehold.co/400",
    title: "House for sale",
    address: "Johar Town, Lahore",
    beds: 5,
    bath: 6,
    coveredAreaSQFT: 2500,
    propertyType: "house",
    isCommercial: false,
    price: 1100000,
  },
  {
    id: 28,
    imageUrl: "https://placehold.co/400",
    title: "Office for rent",
    address: "Lahore Cantt, Lahore",
    beds: 4,
    bath: 1,
    coveredAreaSQFT: 1000,
    propertyType: "office",
    isCommercial: true,
    price: 70000,
  },
  {
    id: 29,
    imageUrl: "https://placehold.co/400",
    title: "Plot for sale",
    address: "DHA Phase 12, Lahore",
    beds: 0,
    bath: 0,
    coveredAreaSQFT: 0,
    propertyType: "office",
    isCommercial: false,
    price: 400000,
  },
  {
    id: 30,
    imageUrl: "https://placehold.co/400",
    title: "House for sale",
    address: "Johar Town, Lahore",
    beds: 6,
    bath: 2,
    coveredAreaSQFT: 2500,
    propertyType: "house",
    isCommercial: false,
    price: 90000,
  },
];
export default Listings;
