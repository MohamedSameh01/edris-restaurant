// Menu Data
export const menuCategories = [
  { id: 'meat', name: 'مشويات' },
  { id: 'flafel', name: 'فلافل' },
  { id: 'drinks', name: 'مشروبات' },
];

export const menuItems = [
  {
    id: 1,
    category: "meat",
    name: "كباب لحم",
    description: "كباب لحم بقري طازج مع صلصة خاصة",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2075",
  },
  {
    id: 2,
    category: "meat",
    name: "شقف مشوي",
    description: "قطع لحم مشوية مع البهارات السودانية",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
  },
  {
    id: 3,
    category: "flafel",
    name: "فول مدمس",
    description: " فول مدمس ساده ",
    price: 35,
    image:
      "https://media.istockphoto.com/id/2182844887/photo/fava-beans-salad-with-tomatoes-parsley-lemon-and-mint.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fo6ttxlu56AlDBTYXVAm3HN2IlJkstrF3n0HP3p-kdE=",
  },
  {
    id: 4,
    category: "flafel",
    name: "طعميه ",
    description: "طعميه ساده",
    price: 30,
    image:
      "https://media.istockphoto.com/id/1446697978/photo/two-falafels-and-a-broken-half-on-a-white-background-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=roLLX76afX6NiXeyvqGtg1vot4cArrqzLluwvV5y3JU=",
  },
  {
    id: 5,
    category: "drinks",
    name: "عصير مانجو",
    description: "عصير مانجو طازج",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=2087",
  },
  {
    id: 6,
    category: "drinks",
    name: "شاي سوداني",
    description: "شاي سوداني أصيل بالهيل",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=2071",
  },
];

// Testimonials Data
export const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    comment: 'أفضل مطعم سوداني في المنطقة، الطعم رائع والخدمة ممتازة',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787',
    rating: 5,
  },
  {
    id: 2,
    name: 'عبدالله علي',
    comment: 'الكباب عندهم لا يُعلى عليه، والأسعار معقولة جداً',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940',
    rating: 5,
  },
  {
    id: 3,
    name: 'سارة أحمد',
    comment: 'جربت البرجر السوداني وكان لذيذ جداً، أنصح الجميع بتجربته',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940',
    rating: 4,
  },
];

// Restaurant Info
export const restaurantInfo = {
  name: "مطعم حوش ادريس سيريه",
  description:
    "نقدم أشهى المأكولات السودانية الأصيلة في المملكة العربية السعودية منذ عام ٢٠١٠. نحن نفخر بتقديم أطباق تجمع بين الأصالة والجودة العالية.",
  about:
    "مطعم حوش ادريس سيريه هو وجهتك المثالية لتذوق أشهى وألذ المأكولات السودانية الأصيلة. نحن نقدم تجربة طعام فريدة تجمع بين النكهات التقليدية والجودة العالية في أجواء مريحة وودية.",
  location: {
    address: "شارع الملك فهد، حي العليا، الرياض",
    coordinates: {
      lat: 24.7136,
      lng: 46.6753,
    },
  },
  contact: {
    phone: "+966 50 123 4567",
    whatsapp: "+966 50 123 4567",
    email: "edris@mail.com",
  },
  hours: {
    weekdays: "١٢:٠٠ م - ١٢:٠٠ ص",
    weekends: "١:٠٠ م - ١:٠٠ ص",
  },
  owner: {
    name: "محمد عبدالله",
    position: "المؤسس والمدير التنفيذي",
    image:
      "https://media.istockphoto.com/id/183025822/photo/ethiopian-man-in-traditional-wear.jpg?s=1024x1024&w=is&k=20&c=Wv21aNDjoRCJhwEFbTgwYxoElywZd_SH-bM6BuK-AEc=",
    quote: "نسعى دائماً لتقديم أفضل تجربة طعام سودانية أصيلة لضيوفنا الكرام",
  },
};