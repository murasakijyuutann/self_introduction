# 🌸 Developer Portfolio — Sunmyung Woo

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-667eea?style=for-the-badge)](https://self-introduction-i11.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-murasakijyuutann-181717?style=for-the-badge&logo=github)](https://github.com/murasakijyuutann)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunmyung-woo-44b175221/)

**A modern, full-stack developer portfolio showcasing 3+ years of experience in React, Spring Boot, and cloud technologies.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Projects](#-featured-projects) • [Contact](#-contact)

---

</div>

## 📋 About

This portfolio represents a **production-ready React application** built with modern web technologies, demonstrating expertise in:

- Frontend architecture with TypeScript and component-based design
- Advanced UI/UX with animations and responsive layouts
- Integration with third-party services (EmailJS)
- Cloud deployment and CI/CD practices

The site serves as both a **professional resume** and **technical showcase**, highlighting my journey from Systems Administration studies in Australia to full-stack development roles, and my current preparation for a software engineering career in Japan.

---

## ✨ Features

### 🎨 **Modern UI/UX**
- Animated gradient backgrounds with glassmorphic design elements
- Smooth page transitions using Framer Motion
- Responsive layouts optimized for mobile, tablet, and desktop
- Accessibility-friendly navigation with active link highlighting

### 🚀 **Interactive Sections**
- **Hero Section**: Dynamic typewriter effect with social media integration
- **Journey Timeline**: Alternating card layout showcasing career progression
- **Skills Showcase**: Categorized technology grid with 80+ skills
- **Project Portfolio**: Professional project cards with descriptions and links
- **Contact Form**: EmailJS-powered contact system with validation

---

## 🛠 Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)

### **Libraries & Tools**
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4285F4?style=flat&logo=gmail&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white)

### **Deployment & CI/CD**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## 🗂 Project Structure

```
my/
├── public/
│   └── images/              # Static assets (profile photos, project images)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Responsive navigation with hamburger menu
│   │   └── Footer.tsx       # Social links and copyright
│   ├── pages/
│   │   ├── Home.tsx         # Hero section with stats and highlights
│   │   ├── About.tsx        # Personal background and story
│   │   ├── Journey.tsx      # Career timeline with icons and locations
│   │   ├── Skills.tsx       # Technology grid with categories
│   │   ├── Projects.tsx     # Portfolio showcase
│   │   └── Contact.tsx      # EmailJS contact form
│   ├── styles/
│   │   └── AnimatedBackground.ts  # Shared gradient animations
│   ├── App.tsx              # Main router and layout
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json              # Deployment configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** 9+
- **Git** for version control

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/murasakijyuutann/self_introduction.git
cd self_introduction/my
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables** (optional, for contact form)

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

**4. Run development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser

**5. Build for production**
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.1 | UI framework |
| `typescript` | ~5.9.3 | Type safety |
| `vite` | ^7.1.7 | Build tool and dev server |
| `styled-components` | ^6.1.19 | CSS-in-JS styling |
| `framer-motion` | ^12.23.24 | Animation library |
| `react-router-dom` | ^7.9.4 | Client-side routing |
| `@emailjs/browser` | ^4.4.1 | Contact form backend |
| `react-simple-typewriter` | ^5.0.1 | Typewriter effect |
| `react-icons` | ^5.5.0 | Icon library |

---

## 🎯 Featured Projects

<table>
  <tr>
    <td width="50%">
      <h3>🎬 Movie Explorer</h3>
      <p><strong>Description:</strong> TMDB-powered search application with infinite scroll pagination and fully responsive design.</p>
      <p><strong>Technologies:</strong> React • Tailwind CSS • TMDB API</p>
      <p><a href="https://github.com/murasakijyuutann/movie-review-project">View Repository →</a></p>
    </td>
    <td width="50%">
      <h3>📋 Spring Boot Board</h3>
      <p><strong>Description:</strong> Token-authenticated backend system with role-based access control and Swagger API documentation.</p>
      <p><strong>Technologies:</strong> Spring Boot • MyBatis • JWT • Swagger</p>
      <p><a href="https://github.com/murasakijyuutann/spring_boot_board">View Repository →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🎧 Vocaloid Shopping Mall</h3>
      <p><strong>Description:</strong> Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and order processing.</p>
      <p><strong>Technologies:</strong> React • TypeScript • Spring Boot • MySQL</p>
      <p><a href="https://github.com/murasakijyuutann/vocaloidshop-fullstack">View Repository →</a></p>
    </td>
    <td width="50%">
      <h3>🚌 Public Transport Payment System</h3>
      <p><strong>Description:</strong> Payment system API featuring card management, fare calculation, and transaction processing with AWS infrastructure.</p>
      <p><strong>Technologies:</strong> Spring Boot • Thymeleaf • Bootstrap • AWS RDS</p>
      <p><a href="https://github.com/murasakijyuutann/public-transport-system">View Repository →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🌐 This Portfolio</h3>
      <p><strong>Description:</strong> Modern portfolio website with responsive design, interactive sections, and professional presentation of skills and experience.</p>
      <p><strong>Technologies:</strong> React • TypeScript • Tailwind CSS • shadcn/ui • Vercel</p>
      <p><a href="https://self-introduction-i11.vercel.app/">View Live Demo →</a></p>
    </td>
  </tr>
</table>

---

## 🌍 Deployment

This project is deployed on **Vercel** with automatic deployments from the main branch.

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Configuration
The `vercel.json` file includes routing configuration to support React Router:
```json
{
  "rewrites": [{
    "source": "/((?!images/).*)",
    "destination": "/index.html"
  }]
}
```

---

## 🗺 Roadmap

### Short-term Goals
- [ ] Add dark mode toggle
- [ ] Implement project filtering by technology
- [ ] Add resume/CV download button
- [ ] Include project screenshots in portfolio cards

### Medium-term Goals
- [ ] Integrate blog section with MDX support
- [ ] Add Japanese language toggle (日本語版)
- [ ] Implement Spring Boot backend for dynamic content
- [ ] Create admin panel for project management

### Long-term Vision
- [ ] Migrate to Next.js for SSR/SSG benefits
- [ ] Add analytics dashboard
- [ ] Implement real-time chat feature
- [ ] Custom domain with SSL (Route 53 + CloudFront)

---

## 📫 Contact

**Sunmyung Woo** — Full-Stack Developer

- 📧 Email: [neneke.emu@gmail.com](mailto:neneke.emu@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/sunmyung-woo-44b175221](https://www.linkedin.com/in/sunmyung-woo-44b175221/)
- 🐙 GitHub: [github.com/murasakijyuutann](https://github.com/murasakijyuutann)
- 📝 Qiita: [qiita.com/murasakijyuutann](https://qiita.com/murasakijyuutann)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Gradient animations inspired by glassmorphism design principles
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Deployment powered by [Vercel](https://vercel.com/)

---

<div align="center">

**⭐ If you find this portfolio helpful, please consider giving it a star!**

Made with ❤️ by Sunmyung Woo | 2025

</div>
