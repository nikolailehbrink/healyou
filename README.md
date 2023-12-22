# HealYou

A comprehensive self-care and therapy web application built with React, Next.js, and Tailwind CSS. HealYou integrates advanced AI algorithms for personalized health assessments and therapy plans, leveraging a user-centric design approach for optimal user experience.

## 🚑 Features

- **AI-Driven Diagnosis**: Offers an intelligent self-diagnosis tool, utilizing AI algorithms for accurate health assessments.
- **Personalized Therapy Plans**: Users can access customized therapeutic strategies and exercise routines based on their unique health profiles.
- **Interactive User Interface**: Built with React and Next.js, ensuring a seamless and responsive user experience.
- **Modern Design**: Utilizes Tailwind CSS for a clean, accessible, and mobile-friendly design.

## 🌐 Open Source and Contribution

HealYou is an open-source project, aiming to offer a comprehensive platform for self-care and therapy management. It's a valuable resource for those interested in personal health, AI integration in healthcare, and modern web development.

### Contributing to the Project

Contributions are welcome from developers of all backgrounds. To contribute:

1. Fork the repository and create a new feature or fix branch.
2. Submit a pull request with a detailed description of your changes or additions.

### Reporting Bugs

We value your feedback. For any bugs or issues, report them on the GitHub Issues page with detailed descriptions and reproduction steps.

## 🧑‍💻 Running Locally

Before running HealYou locally, ensure you have the latest versions of Node.js and npm installed.

### Setting Up the Environment

1. Clone the repository:

   ```bash
   git clone https://github.com/nikolailehbrink/healyou.git
   ```

2. Navigate to the project directory:

   ```bash
   cd healyou
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Setting up Environment Variables

1. Create a `.env.local` file in the root directory of the project.
2. Paste the following code into the file:

   ```bash
   NEXT_PUBLIC_SUPABASE_URL=YourSupabaseURL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YourSupabaseAnonKey

   OPENAI_API_KEY=YourOpenAIAPIKey
   ```

### Starting the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000` in your browser to view the application.
