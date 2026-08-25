// Демо-контент з макета Figma. Використовується, поки відповідна
// колекція Firestore порожня (або немає .env), щоб верстка не була пустою.
export const demoCategories = [
  { id: 'living-room', name: 'Living Room', image: '/gallery/1.jpg' },
  { id: 'bedroom', name: 'Bedroom', image: '/gallery/2.jpg' },
  { id: 'kitchen', name: 'Kitchen', image: '/gallery/3.jpg' },
  { id: 'bathroom', name: 'Bathroom', image: '/gallery/4.jpg' },
  { id: 'dinning', name: 'Dinning', image: '/gallery/1.jpg' },
  { id: 'outdoor', name: 'Outdoor', image: '/gallery/2.jpg' }
];

export const demoProducts = [
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
