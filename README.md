![Node.js](https://img.shields.io/badge/Node.js-v18-green) 
![Python](https://img.shields.io/badge/Python-3.9%2B-blue) 
![Vercel](https://img.shields.io/badge/Vercel-Frontend-black) 
![Render](https://img.shields.io/badge/Render-Backend-orange) 
![License](https://img.shields.io/badge/License-CC%20BY--NC-lightgrey) <br>

# Dragão em Liberdade 🌊⛵

🌐 **Live Demo:** [dragao-em-liberdade.vercel.app](https://dragao-em-liberdade.vercel.app/)

**Dragão em Liberdade** (Dragon in Freedom) is an interactive educational platform that allows users to converse with **Francisco José do Nascimento**, also known as **Dragão do Mar** (Dragon of the Sea). 

He was a key figure in the abolitionist movement in Ceará, Brazil—the first province to abolish slavery in 1884, four years before the rest of the country. This project leverages the **DeepSeek API** to provide an immersive, first-person historical experience.

---

## 📖 Historical Context

On **March 25, 1884**, Ceará earned the title *"Terra da Luz"* (Land of Light). This achievement was sparked by the heroic actions of the *Jangadeiros* (traditional fisherman) led by "Chico da Matilde" (Dragão do Mar). In 1881, they went on strike, refusing to transport enslaved people to the ships in the port of Fortaleza, effectively paralyzing the slave trade in the region.

## 🛠️ Tech Stack

### Frontend
* **React**: The core library used for building the dynamic user interface.
* **TypeScript**: Implemented to ensure type safety and more robust, maintainable code.
* **Framer Motion**: Powering the smooth, high-quality animations (such as the message "bounce" and the scroll-into-view effects).
* **Tailwind CSS**: Used for modern, utility-first styling and a fully responsive layout across all devices.
* **React Markdown**: Integrated to format and render the AI’s historical responses correctly.

### Backend
* **FastAPI (Python)**: A high-performance asynchronous framework for the chat logic.
* **DeepSeek API**: The engine behind the "historical persona" (using the `deepseek-chat` model).
* **Pydantic**: Used for strict data validation and schema enforcement on API requests.

### Infrastructure
* **Vercel**: Frontend hosting and automated deployment.
* **Render**: Backend deployment for the Python API.

---

## 🚀 Features

- **Interactive AI Chat**: Real-time conversation with a custom system prompt that ensures historical accuracy, pedagogical tone, and anti-racist discourse.
- **Historical Timeline**: A visual journey through the life of Francisco José do Nascimento, from his birth in 1839 to his eternal legacy.
- **Responsive Design**: Fully optimized for mobile and desktop experiences.
- **Security & Constraints**: Backend validation limiting input length (140 characters) and AI response length (300 characters) to ensure concise and safe interactions.

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (for Frontend)
- Python 3.9+ (for Backend)
- DeepSeek API Key

### 1. Backend Setup
```bash
# Navigate to backend folder
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn requests python-dotenv pydantic

# Set up environment variables (.env)
echo "DEEPSEEK_API_KEY=your_key_here" > .env

# Run the API
uvicorn app.main:app --reload
```

### 2. Frontend Setup
```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run the development server
npm run dev
```

🧠 System Prompt Engineering
The core of the interaction is driven by a specialized system prompt:

```text
You are Francisco José do Nascimento, the Dragão do Mar. 
Respond in Portuguese, in the first person, in a pedagogical way. 
Be anti-racist. Always be respectful regardless of the context.
```

📄 License  
This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. See the [LICENSE](./LICENSE) file for details.

Developed with 💙 by Letícia Bezerra Software Developer
