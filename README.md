# Diabetic Foot Care Center Website

A responsive Next.js website for a Diabetic Foot Care Center with a professional and clean design. The website uses vanilla CSS for styling and React components for modularity.

## Features

- **Responsive Design**: Fully responsive across desktops, tablets, and mobile devices
- **Modern UI**: Clean and professional design suitable for a medical practice
- **Component-Based Architecture**: Modular React components for easy maintenance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Focused**: Optimized images and lazy loading

## Pages

- **Home**: Introduction to the clinic with sections on services and doctor information
- **About Us**: Information about the clinic, mission, and history
- **Team**: Details about the medical team
- **Dr. Prayas Kumar**: Dedicated page for the lead doctor
- **Services**:
  - Diabetic Foot Surgery
  - Diabetic Foot Conditions
  - Nonsurgical Management
  - Footwear Services
  - Nondiabetic Ulcers
- **Patient Resources**:
  - Before & After
  - Patient Area
  - Testimonials
  - Videos
  - What's New
- **Contact Us**: Contact information and form

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: For type safety and better developer experience
- **CSS Modules**: For component-scoped styling
- **React**: For building user interfaces

## Recent Updates

- **Theme Update**: Enhanced the website with a new color scheme and improved visual elements
- **Mobile Navigation**: Fixed the mobile navbar closing issue by adding a close button and improved functionality
- **Diabetic Foot Surgery Page**: Added a dedicated page with comprehensive information about surgical procedures
- **Contact Form**: Implemented a contact form that collects user information and sends it to the specified email address
- **Book an Appointment**: Added functionality to direct users to the Contact Us page when they click on "Book an Appointment"

## Email Configuration

To enable the contact form email functionality:

1. Rename `env.sample` to `.env.local`
2. Update the email configuration values in `.env.local`:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=website@diabeticfootcare.com
   ```
3. For Gmail, you'll need to generate an "App Password" in your Google Account settings

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Next.js team for the amazing framework
- All the open-source contributors whose libraries made this project possible
