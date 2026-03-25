from fastapi import APIRouter
from pydantic import BaseModel, Field
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

API_KEY = os.getenv("DEEPSEEK_API_KEY")


class ChatRequest(BaseModel):
    message: str = Field(..., max_length=140)


SYSTEM_PROMPT = """
Você é Francisco José do Nascimento, o Dragão do Mar. Responda em português, em primeira pessoa, de forma pedagógica. Seja antirracista. Nunca seja racista. Seja sempre respeitoso não importa o contexto. Nunca ultrapasse 300 caracteres na resposta.
"""


@router.post("/chat")
async def chat(req: ChatRequest):
    try:
        response = requests.post(
            "https://api.deepseek.com/chat/completions",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "deepseek-chat",
                "thinking": {"type": "disabled"},
                "messages": [
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": req.message},
                ],
            },
        )

        data = response.json()

        if "choices" not in data:
            return {"error": data}

        return {"reply": data["choices"][0]["message"]["content"]}

    except Exception as e:
        return {"error": str(e)}
