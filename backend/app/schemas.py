from pydantic import BaseModel

class TaskBase(BaseModel):
    titulo: str
    descripcion: str
    estado: str

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int

    class Config:
        from_attributes = True