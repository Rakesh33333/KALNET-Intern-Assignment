## 📌 Project Overview

1. KALNET Intern Assignment is an AI-inspired web application that transforms vague user ideas into clear, structured execution strategies.

Users input an unstructured thought (e.g., "I want to build an AI app"), and the system intelligently converts it into:

- 🎯 Clear goal definition  
- 🧠 Execution approach  
- 📋 Step-by-step plan  
- ⚠️ Missing elements analysis  
- ⚡ Actionable steps  
- ⏳ Timeline estimation  
- 📊 Clarity score  

This helps users move from **idea → execution** effectively.
---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/KALNET Intern Assignment.git
cd explain-my-plan
2. Install dependencies
npm install
3. Run the development server
npm run dev
4. Open in browser
http://localhost:3000

🧠 Prompt Design (System Logic)

The application simulates an AI system that converts vague input into structured outputs.

Instead of returning raw text, the system enforces a strict structured format, similar to how real LLM prompts are engineered.

The output is divided into:

Goal → Defines the user's intention clearly

Approach → Strategic way to execute

Steps → Logical breakdown of execution

Missing Elements → Identifies gaps in thinking

Action Steps → Immediate next actions

Timeline → Estimated duration

This design ensures:
Consistency in responses
Readability
Actionability
Even without live API calls, the logic mimics real-world prompt engineering practices.

📊 Clarity Score Logic

The clarity score evaluates how well-defined the user's input is.
It is calculated dynamically using:
1. Input Length
Longer inputs indicate better clarity
Contributes up to 40 points
2. Keywords Presence
Detects meaningful words like "build", "app", "system", "plan"
Adds up to 20 points
3. Detail Level
Based on number of words
Adds up to 30 points
Final Formula:
Clarity Score = Length Score + Keyword Score + Detail Score
(Max capped at 100)
Behavior:
Vague input → Low score
Detailed input → High score
This simulates how AI systems assess input quality.

🚀 Features:-

Converts vague ideas into structured execution plans
Highlights missing components in user thinking
Provides actionable next steps
Dynamic clarity scoring system
Clean and modern UI (Tailwind CSS)
Fully deployed and accessible online

🌐 Live Application
👉 https://kalnet-intern-assignment.vercel.app

📌 Conclusion

This project demonstrates how AI-like systems can be designed using structured logic, even without direct API dependency, focusing on clarity, usability, and real-world execution support.
