# HealYou

A comprehensive self-care and therapy web application built with `Next.js`, `Tailwind CSS`, `Supabase` and the `AI SDK` from Vercel. HealYou integrates AI for personalized health assessments and therapy plans, leveraging a user-centric design approach for optimal user experience.

> [!Caution]
> This is a demo project, that I build for my portfolio. In their [usage policies](https://openai.com/policies/usage-policies) OpenAI does not allow "Providing tailored legal, medical/health, or financial advice without review by a qualified professional and disclosure of the use of AI assistance and its potential limitations". 

https://github.com/nikolailehbrink/healyou/assets/38915700/5727f14c-3356-4f3e-b33d-c00142904743

## 🚑 Features

- **AI-Driven Diagnosis**: Offers an intelligent self-diagnosis tool, utilizing AI algorithms for health assessments.
- **Personalized Therapy Plan**: Users get access to customized therapeutic strategies based on their diagnosis.

## 🧑‍💻 Running Locally

Before running HealYou locally, ensure you have the latest versions of Node.js and npm installed.

### Preliminary Requirements

Before proceeding with the setup, it's essential to sign up for necessary services:

- **Supabase:** Sign up at [Supabase](https://supabase.io/) and create a new project. This will provide you with the `Supabase URL` and `Supabase Anon Key` required for the environment variables.
  
- **OpenAI:** Register at [OpenAI](https://platform.openai.com/api-keys) to obtain an `OpenAI API Key`. This key is needed to integrate AI functionalities within the HealYou app.

### Setting Up the Environment

1. Clone the repository:

   ```shell
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
