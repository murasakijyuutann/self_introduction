# 🌸 Developer Portfolio — Sunmyung Woo# 🌸 Self Introduction / Developer Portfolio — *Fishyboyxx*



<div align="center">A personal developer portfolio built with **React + Vite + TypeScript + Styled Components**, featuring smooth animations, bilingual-friendly sections, and a clean, modern UI inspired by **Hatsune Miku’s mint–pink color palette**.  

This site introduces my journey, skills, and projects while showcasing the ability to design, build, and deploy production-ready React applications.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-667eea?style=for-the-badge)](https://self-introduction-i11.vercel.app/)

[![GitHub](https://img.shields.io/badge/GitHub-murasakijyuutann-181717?style=for-the-badge&logo=github)](https://github.com/murasakijyuutann)---

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunmyung-woo-44b175221/)

## 🌐 Live Demo

**A modern, full-stack developer portfolio showcasing 3+ years of experience in React, Spring Boot, and cloud technologies.**> [https://self-introduction-nu.vercel.app/](https://self-introduction-nu.vercel.app/)



[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Roadmap](#-roadmap)---



</div>## 🧭 Overview



---This portfolio serves as both a **self-introduction** and **interactive resume**, demonstrating practical use of modern frontend tools.  

Each section represents a part of my growth as a developer, from backend integration to UI design.

## 📋 About

### ✨ Features

This portfolio represents a **production-ready React application** built with modern web technologies, demonstrating expertise in:- 🎨 **Miku-themed gradient** aesthetic with responsive layouts  

- Frontend architecture with TypeScript and component-based design- 🪶 **Framer Motion animations** for smooth visual transitions  

- Advanced UI/UX with animations and responsive layouts- 🧠 **Reusable styled components** for scalability and clean design  

- Integration with third-party services (EmailJS)- 🧩 **Interactive Chinchirorin Game** built in React (mini-project showcase)  

- Cloud deployment and CI/CD practices- 💬 **EmailJS contact form** for direct communication  

- 🌎 **Bilingual-ready layout** (English with room for Japanese expansion)  

The site serves as both a **professional resume** and **technical showcase**, highlighting my journey from Systems Administration studies in Australia to full-stack development roles, and my current preparation for a software engineering career in Japan.- 🔗 **Active navigation highlights** and accessibility-friendly markup



------



## ✨ Features## 🧱 Tech Stack



### 🎨 **Modern UI/UX**| Category | Tools & Frameworks |

- Animated gradient backgrounds with glassmorphic design elements|-----------|--------------------|

- Smooth page transitions using Framer Motion| **Frontend** | React (Vite), TypeScript, Styled Components, Framer Motion |

- Responsive layouts optimized for mobile, tablet, and desktop| **Backend (for future expansion)** | Spring Boot · MyBatis · Node.js · Express |

- Accessibility-friendly navigation with active link highlighting| **Utilities** | EmailJS, Axios, Postman, Swagger |

| **Cloud / Deployment** | AWS EC2, Vercel |

### 🚀 **Interactive Sections**| **Design** | Tailwind (legacy sections), custom gradients |

- **Hero Section**: Dynamic typewriter effect with social media integration| **Version Control** | Git, GitHub |

- **Journey Timeline**: Alternating card layout showcasing career progression

- **Skills Showcase**: Categorized technology grid with 80+ skills---

- **Project Portfolio**: Professional project cards with descriptions and links

- **Contact Form**: EmailJS-powered contact system with validation## 🗂️ Project Structure



### 🎮 **Bonus Features**```

- **Chinchirorin Game**: Interactive Japanese dice game built with React, featuring:src/

  - Real-time game logic and scoring system┣ components/

  - Sound effects using Howler.js┃ ┣ Navbar.tsx # Responsive navigation bar with active link highlighting

  - Smooth animations and state management┃ ┣ Home.tsx # Hero section with typewriter intro

  - Mobile-responsive controls┃ ┣ About.tsx # Self introduction and career goals

┃ ┣ Journey.tsx # Timeline of studies and career progress

---┃ ┣ Skills.tsx # Categorized skill badges with motion effects

┃ ┣ Projects.tsx # Portfolio showcase with GitHub links

## 🛠 Tech Stack┃ ┣ Chinchiro.tsx # Mini React dice game (文化×技術 concept)

┃ ┣ Contact.tsx # Email form integrated with EmailJS

### **Frontend**┃ ┗ Footer.tsx # Social icons + tagline

![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)┣ styles/

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)┃ ┗ AnimatedBackground.ts # Shared gradient animation

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)┣ App.tsx

![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white)┗ main.tsx

```

### **Libraries & Tools**

![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)yaml

![EmailJS](https://img.shields.io/badge/EmailJS-4285F4?style=flat&logo=gmail&logoColor=white)Copy code

![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white)

---

### **Deployment & CI/CD**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)# 🚀 Getting Started

![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)## 💻 Setup & Run Locally



---### 🧩 Step 1. Clone the Repository



## 🗂 Project Structure```bash

git clone https://github.com/murasakijyuutann/self-intro-portfolio.git

```cd self-intro-portfolio

my/```

├── public/

│   └── images/              # Static assets (profile photos, project images)### ⚙️ Step 2. Install Dependencies

├── src/

│   ├── components/```bash

│   │   ├── Navbar.tsx       # Responsive navigation with hamburger menunpm install

│   │   └── Footer.tsx       # Social links and copyright```

│   ├── pages/

│   │   ├── Home.tsx         # Hero section with stats and highlights### 🔐 Step 3. Configure EmailJS Environment Variables

│   │   ├── About.tsx        # Personal background and story

│   │   ├── Journey.tsx      # Career timeline with icons and locationsCreate a .env file in your project root and add the following:

│   │   ├── Skills.tsx       # Technology grid with categories

│   │   ├── Projects.tsx     # Portfolio showcase```bash

│   │   ├── Chinchiro.tsx    # Interactive dice gameVITE_EMAILJS_SERVICE_ID=your_service_id

│   │   └── Contact.tsx      # EmailJS contact formVITE_EMAILJS_TEMPLATE_ID=your_template_id

│   ├── styles/VITE_EMAILJS_PUBLIC_KEY=your_public_key

│   │   └── AnimatedBackground.ts  # Shared gradient animations```

│   ├── App.tsx              # Main router and layout

│   ├── main.tsx             # Application entry point### 🚀 Step 4. Run the Development Server

│   └── index.css            # Global styles```bash

├── package.jsonnpm run dev

├── tsconfig.json```

├── vite.config.ts

└── vercel.json              # Deployment configurationThen open 👉 http://localhost:5173

``` in your browser.



---### 💼 Featured Projects



## 🚀 Getting Started| Project | Description | Tech Stack |

|----------|--------------|------------|

### Prerequisites| 🎬 Movie Explorer | TMDB API-powered React app with infinite scroll & responsive UI | React · Tailwind CSS · TMDB API |

- **Node.js** 18+ and **npm** 9+| 📋 Spring Boot Board | Token-authenticated backend with DTOs, Swagger UI & role access control | Spring Boot · MyBatis · JWT |

- **Git** for version control| 🛍 JSP Shopping Mall | JSP/Servlet-based e-commerce prototype with login & cart system | JSP · JSTL · Tomcat |

| ☁️ EC2 Todo App | Full-stack app deployed on AWS EC2 with Supabase OAuth login | React · NestJS · Prisma |

### Installation| 🎧 Vocaloid DAO Simulator | Java OOP collection project themed around Vocaloid characters | Java · DAO Pattern |

| 🎲 Chinchirorin Game | Traditional Japanese dice game remake with sound & motion | React · Framer Motion · Howler.js |

1. **Clone the repository**

   ```bash

   git clone https://github.com/murasakijyuutann/self_introduction.git---

   cd self_introduction/my

   ```### 📫 Contact



2. **Install dependencies**If you’d like to get in touch or collaborate:

   ```bash

   npm install| Platform | Link |

   ```|-----------|------|

| 💌 **Email** | [fishyboyxx@protonmail.com](mailto:fishyboyxx@protonmail.com) |

3. **Configure environment variables** (optional, for contact form)| 🐙 **GitHub** | [github.com/murasakijyuutann](https://github.com/murasakijyuutann) |

   | 💼 **LinkedIn** | [linkedin.com/in/sunmyung-woo-44b175221/](https://www.linkedin.com/in/sunmyung-woo-44b175221/e) |

   Create a `.env` file in the root directory:| 🧠 **Qiita** | [qiita.com/murasakijyuutann](https://qiita.com/murasakijyuutann) |

   ```env

   VITE_EMAILJS_SERVICE_ID=your_service_id---

   VITE_EMAILJS_TEMPLATE_ID=your_template_id

   VITE_EMAILJS_PUBLIC_KEY=your_public_key### 🧩 Philosophy

   ```

   > “**Code is my language. Culture is my bridge.**”  

   > Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)> This portfolio reflects my mission to combine technical skill, creativity,  

> and cross-cultural understanding in every project I build.

4. **Run development server**

   ```bash---

   npm run dev

   ```### 🛠️ Future Plans

   

   Open [http://localhost:5173](http://localhost:5173) in your browser- 🇯🇵 Add **日本語版ページ (Japanese version)** toggle  

- 🔗 Integrate **Spring Boot API backend** for dynamic project updates  

5. **Build for production**- 🌗 Add **Dark Mode** toggle for accessibility  

   ```bash- ☁️ Deploy via **Vercel + AWS Route 53** custom domain  

   npm run build

   npm run preview  # Preview production build locally---

   ```

### 🧾 License

---

This project is open-source under the **MIT License**.  

## 📦 Key DependenciesFeel free to **fork**, **modify**, and **adapt** it for your own use.



| Package | Version | Purpose |---

|---------|---------|---------|

| `react` | ^19.1.1 | UI framework |### 💬 Final Words

| `typescript` | ~5.9.3 | Type safety |

| `vite` | ^7.1.7 | Build tool and dev server |> This portfolio was designed and built by **Farah Sinclair (Fishyboyxx)**  

| `styled-components` | ^6.1.19 | CSS-in-JS styling |> to represent a *3-year-experience-level developer’s* full-stack skill set.  

| `framer-motion` | ^12.23.24 | Animation library |> Thank you for visiting! 🌸

| `react-router-dom` | ^7.9.4 | Client-side routing |

| `@emailjs/browser` | ^4.4.1 | Contact form backend |
| `react-simple-typewriter` | ^5.0.1 | Typewriter effect |
| `howler` | ^2.2.4 | Audio playback |
| `react-icons` | ^5.5.0 | Icon library |

---

## 🎯 Featured Projects

| Project | Description | Technologies |
|---------|-------------|--------------|
| **🎬 Movie Explorer** | TMDB-powered search app with infinite scroll and responsive design | React, Tailwind CSS, TMDB API |
| **📋 Spring Boot Board** | Token-authenticated backend with role-based access control and Swagger docs | Spring Boot, MyBatis, JWT, Swagger |
| **🎧 Vocaloid Shopping Mall** | Full-stack e-commerce with product catalog, cart, and order processing | React, TypeScript, Spring Boot, MySQL |
| **🚌 Public Transport System** | Payment system API with card management and fare calculation | Spring Boot, Thymeleaf, Bootstrap, AWS RDS |
| **🎲 Chinchirorin Game** | Traditional Japanese dice game with animations and sound effects | React, Framer Motion, Howler.js |

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
- Chinchirorin game rules from traditional Japanese gambling culture
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Deployment powered by [Vercel](https://vercel.com/)

---

<div align="center">

**⭐ If you find this portfolio helpful, please consider giving it a star!**

Made with ❤️ by Sunmyung Woo | 2025

</div>
