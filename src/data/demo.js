export const demoUser = {
  firstName: 'Sofia',
  lastName: 'Havertz',
  displayName: 'Sofia Havertz',
  email: 'sofia.havertz@example.com',
  billingAddress: { name: 'Sofia Havertz', phone: '(+1) 234 567 890', address: '345 Long Island, New York, United States' },
  shippingAddress: { name: 'Sofia Havertz', phone: '(+1) 234 567 890', address: '345 Long Island, New York, United States' }
};

export const demoCategories = [
  { id: 'living-room', name: 'Living Room', image: '/gallery/1.jpg' },
  { id: 'bedroom', name: 'Bedroom', image: '/gallery/2.jpg' },
  { id: 'kitchen', name: 'Kitchen', image: '/gallery/3.jpg' },
  { id: 'bathroom', name: 'Bathroom', image: '/gallery/4.jpg' },
  { id: 'dinning', name: 'Dinning', image: '/gallery/1.jpg' },
  { id: 'outdoor', name: 'Outdoor', image: '/gallery/2.jpg' }
];

export const demoProducts = [
  {
    id: 'tray-table',
    name: 'Tray Table',
    categoryId: 'living-room',
    price: 199,
    oldPrice: 400,
    rating: 5,
    isNew: true,
    image: '/gallery/1.jpg',
    images: ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg'],
    description: 'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
    measurements: '17 1/2 x 20 5/8 "',
    sku: '1117',
    categories: 'Living Room, Bedroom',
    colors: [
      { id: 'black', label: 'Black', hex: '#141718' },
      { id: 'tan', label: 'Tan', hex: '#A8927B' },
      { id: 'red', label: 'Red', hex: '#B33636' },
      { id: 'white', label: 'White', hex: '#F3F5F7' }
    ],
    details: 'You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.',
    packaging: { width: '20 "', height: '1 1/2 "', length: '21 1/2 "', weight: '7 lb 8 oz', packages: 1 }
  },
  { id: 'loveseat-sofa', name: 'Loveseat Sofa', categoryId: 'living-room', price: 199, oldPrice: 400, rating: 5, isNew: true, image: '/gallery/1.jpg' },
  { id: 'luxury-sofa', name: 'Luxury Sofa', categoryId: 'living-room', price: 299, oldPrice: 500, rating: 5, isNew: true, image: '/gallery/2.jpg' },
  { id: 'table-lamp', name: 'Table Lamp', categoryId: 'living-room', price: 19, rating: 5, isNew: true, image: '/gallery/3.jpg' },
  { id: 'white-drawer-unit', name: 'White Drawer unit', categoryId: 'bedroom', price: 89.99, rating: 5, isNew: true, image: '/gallery/4.jpg' },
  { id: 'black-tray-table', name: 'Black Tray table', categoryId: 'living-room', price: 19.19, rating: 5, isNew: true, image: '/gallery/1.jpg' },
  { id: 'lamp', name: 'Lamp', categoryId: 'bedroom', price: 39, rating: 5, isNew: true, image: '/gallery/2.jpg' },
  { id: 'light-beige-pillow', name: 'Light Beige Pillow', categoryId: 'bedroom', price: 3.99, rating: 5, isNew: true, image: '/gallery/3.jpg' },
  { id: 'table-lamp-2', name: 'Table Lamp', categoryId: 'kitchen', price: 39.99, rating: 5, isNew: true, image: '/gallery/4.jpg' },
  { id: 'bamboo-basket', name: 'Bamboo Basket', categoryId: 'kitchen', price: 9.99, rating: 5, isNew: true, image: '/gallery/1.jpg' }
];

export const demoReviews = [
  { id: 1, name: 'Sofia Havertz', rating: 5, date: '2 weeks ago', text: 'I bought it 2 weeks ago and now can’t back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos.' },
  { id: 2, name: 'Nicolas Jensen', rating: 5, date: '3 weeks ago', text: 'I bought it 3 weeks ago and now can’t back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos.' },
  { id: 3, name: 'Nicolas Jensen', rating: 4, date: '2 weeks ago', text: 'I bought it 2 weeks ago and now can’t back just to say "Awesome Product". I really enjoy it. At vero eos et accusamus et iusto odio dignissimos.' }
];

export const demoBlogPosts = [
  {
    id: 'busy-bathroom-relax',
    title: 'How to make a busy bathroom a place to relax',
    excerpt: '7 ways to decor your home like a professional',
    tag: 'Home & decor',
    author: 'Hunter Fowler',
    date: 'October 16, 2023',
    image: '/blog/1.jpg'
  },
  {
    id: 'kitchen-organization',
    title: 'Kitchen organization ideas that actually work',
    excerpt: 'Simple systems for a kitchen that stays tidy',
    tag: 'Home & decor',
    author: 'Hunter Fowler',
    date: 'October 11, 2023',
    image: '/blog/2.jpg'
  },
  {
    id: 'decor-your-bedroom',
    title: 'Decor your bedroom into a cozy retreat',
    excerpt: 'Layer textures and soft light for a calmer room',
    tag: 'Home & decor',
    author: 'Hunter Fowler',
    date: 'October 4, 2023',
    image: '/blog/3.jpg'
  }
];

export const demoOrders = [
  { id: '#3456_768', date: 'October 17, 2023', status: 'Delivered', total: 1234 },
  { id: '#3456_980', date: 'October 11, 2023', status: 'Delivered', total: 345 },
  { id: '#3456_120', date: 'August 24, 2023', status: 'Delivered', total: 2345 },
  { id: '#3456_030', date: 'August 12, 2023', status: 'Delivered', total: 845 }
];

export const priceRanges = [
  { label: 'All Price', min: null, max: null },
  { label: '$0.00 - 99.99', min: 0, max: 99.99 },
  { label: '$100.00 - 199.99', min: 100, max: 199.99 },
  { label: '$200.00 - 299.99', min: 200, max: 299.99 },
  { label: '$300.00 - 399.99', min: 300, max: 399.99 },
  { label: '$400.00+', min: 400, max: null }
];

export const shippingOptions = [
  { id: 'free', label: 'Free shipping', price: 0, note: '$0.00' },
  { id: 'express', label: 'Express shipping', price: 15, note: '+$15.00' },
  { id: 'pickup', label: 'Pick Up', price: 0, note: '%21.00' }
];
