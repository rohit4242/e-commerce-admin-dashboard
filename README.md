# E-commerce Admin Dashboard

A modern, full-featured admin dashboard for managing e-commerce stores. Built with Next.js 14, featuring a beautiful UI with Tailwind CSS, authentication with Clerk, and complete store management capabilities.

![Dashboard Preview](https://e-commerce-admin-dashboard-smoky.vercel.app/)

## Overview

This admin dashboard provides a comprehensive solution for managing multiple e-commerce stores. It includes features for product management, category organization, order tracking, and analytics. The dashboard supports multiple themes (light/dark mode) and provides a responsive interface for both desktop and mobile devices.

## Key Features

### Store Management
- 🏪 Create and manage multiple stores
- ⚙️ Store-specific settings and configurations
- 🔑 Individual API routes for each store
- 📊 Store-specific analytics and reporting

### Product Management
- 📦 Create, edit, and delete products
- 🖼️ Multiple image upload with Cloudinary
- 🎨 Color and size variants
- 📂 Category organization
- ⭐ Featured product highlighting
- 🗄️ Product archiving

### Order Processing
- 💳 Stripe payment integration
- 📋 Order tracking and management
- 💰 Payment status monitoring
- 🔄 Webhook integration for real-time updates

### Content Management
- 🎯 Billboard creation and management
- 📑 Category management
- 📏 Size options configuration
- 🎨 Color variants management

### Analytics & Reporting
- 📈 Revenue tracking
- 📊 Sales analytics
- 📦 Stock monitoring
- 📉 Interactive charts and graphs

### UI/UX Features
- 🌓 Dark/Light mode
- 📱 Responsive design
- ✨ Modern UI components
- 🔄 Real-time updates

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn
- PostgreSQL database
- Git

And accounts for the following services:
- Clerk (Authentication)
- Stripe (Payments)
- Cloudinary (Image hosting)
- Vercel (Deployment - optional)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rohit4242/e-commerce-admin-dashboard
cd e-commerce-admin-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
# Database
DATABASE_URL="your-postgresql-url"

# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Images
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

# Payment
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

# URLs
FRONTEND_STORE_URL=
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Seed the database (optional):
```bash
npm run seed
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your project to Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Alternative Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## API Routes

The application provides the following API endpoints:

### Store Management
- `GET /api/[storeId]` - Get store details
- `POST /api/stores` - Create a new store
- `PATCH /api/stores` - Update store details
- `DELETE /api/stores` - Delete a store

### Product Management
- `GET /api/[storeId]/products` - List all products
- `POST /api/[storeId]/products` - Create a new product
- `GET /api/[storeId]/products/[productId]` - Get product details
- `PATCH /api/[storeId]/products/[productId]` - Update product
- `DELETE /api/[storeId]/products/[productId]` - Delete product

### Order Management
- `GET /api/[storeId]/orders` - List all orders
- `GET /api/[storeId]/orders/[orderId]` - Get order details

## Technologies Used

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **date-fns** - Date formatting
- **recharts** - Charts and graphs

### Backend & Database
- **Prisma** - ORM
- **PostgreSQL** - Database
- **Clerk** - Authentication
- **Stripe** - Payment processing
- **Cloudinary** - Image storage
- **Axios** - HTTP client

### State Management
- **Zustand** - State management
- **React Query** - Server state management

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Prisma Studio** - Database management

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── (root)/
│   ├── api/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── modals/
├── hooks/
├── lib/
├── providers/
└── types/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:
- Open an issue in the repository
- Contact the development team
- Check the documentation

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://www.prisma.io)
- [Clerk](https://clerk.dev)
- [Stripe](https://stripe.com)
- [Vercel](https://vercel.com)

---

Built with ❤️ using Next.js and TypeScript
