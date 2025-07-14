# WebTick Landing Page

A modern, responsive landing page for WebTick - a powerful analytics and insights platform that helps businesses understand their users better than ever.

![WebTick Landing Page](public/weblogo.png)

## 🚀 Features

- **Modern Design**: Clean, professional landing page with modern UI/UX
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and interactive elements
- **SEO Optimized**: Built with SEO best practices in mind
- **Fast Performance**: Optimized for speed and performance
- **Accessible**: WCAG compliant accessibility features

## 📋 Sections

- **Hero Section**: Compelling headline with clear value proposition
- **Dashboard Preview**: Visual showcase of the analytics dashboard
- **Features**: Key features and capabilities of WebTick
- **Solutions**: Industry-specific solutions and use cases
- **Pricing**: Transparent pricing plans with feature comparison
- **Testimonials**: Customer testimonials and success stories
- **Call-to-Action**: Clear conversion-focused CTAs
- **About & Contact**: Additional pages for company information

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Beautiful icons

### Routing & State Management
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation

### Styling & Animation
- **Tailwind CSS** - Utility-first styling
- **Tailwind CSS Animate** - Smooth animations
- **CSS Variables** - Custom design tokens

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or bun package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd webtick-landing-craft-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
webtick-landing-craft-main/
├── public/                 # Static assets
│   ├── weblogo.png        # Logo file
│   ├── favicon.ico        # Favicon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features section
│   │   ├── Pricing.tsx   # Pricing section
│   │   └── ...           # Other components
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── About.tsx     # About page
│   │   └── Contact.tsx   # Contact page
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── assets/           # Images and other assets
│   ├── App.tsx           # Main app component
│   └── main.tsx          # App entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors & Theme
The project uses CSS custom properties for theming. You can customize colors in `src/index.css`:

```css
:root {
  --primary: 222.2 84% 4.9%;
  --primary-foreground: 210 40% 98%;
  /* ... other color variables */
}
```

### Components
All UI components are built with Shadcn/ui and can be customized by modifying the component files in `src/components/ui/`.

### Content
Update the content by editing the respective component files:
- `src/components/Hero.tsx` - Hero section content
- `src/components/Features.tsx` - Features content
- `src/components/Pricing.tsx` - Pricing plans
- `src/components/Testimonials.tsx` - Customer testimonials

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@webtick.com or create an issue in this repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
