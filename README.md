# Solara Partners Website

A modern, professional recruitment website built with Next.js 13, TypeScript, and Tailwind CSS. Features a comprehensive job portal, candidate profiles, and company information.

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive layout
- **Job Portal**: Browse and apply for positions with detailed job descriptions
- **Candidate Profiles**: Submit professional profiles for consideration
- **Company Information**: About, services, and case studies
- **Blog Section**: Company news and industry insights
- **Contact System**: Easy communication with the recruitment team
- **Static Export**: Optimized for fast loading and deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Package Manager**: Bun
- **Deployment**: Static export compatible

## 🏃‍♂️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/naufalnug/solara-partners-website.git
   cd solara-partners-website
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Run the development server**:
   ```bash
   bun dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

This project is configured for static export and can be deployed to any static hosting service:

1. **Build the project**:
   ```bash
   bun run build
   ```

2. **The static files will be generated in the `out` directory**

3. **Deploy the `out` directory to your hosting service**

### Netlify Deployment
The project includes a `netlify.toml` configuration file for easy Netlify deployment.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── jobs/              # Job portal
│   ├── contact/           # Contact page
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── hero-section.tsx  # Homepage hero
│   ├── header.tsx        # Navigation
│   └── ...
└── lib/                  # Utilities and configurations
```

## 🎨 Key Components

- **Hero Section**: Eye-catching landing with company stats
- **Services Section**: Recruitment services overview
- **Testimonials**: Client feedback and success stories
- **Job Portal**: Dynamic job listings and application system
- **Contact Forms**: Multiple contact and application forms

## 📄 License

This project is proprietary software for Solara Partners.

## 🤝 Contributing

This is a private project. Please contact the development team for contribution guidelines.
