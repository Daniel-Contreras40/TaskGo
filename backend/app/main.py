from fastapi import FastAPI
from .database import engine
from . import models
from .routers import tasks

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TaskGo API",
    description="API REST para la aplicación móvil TaskGo",
    version="1.0.0"
)

app.include_router(tasks.router)

@app.get("/")
def inicio():
    return {
        "mensaje": "Bienvenido a TaskGo API"
    }