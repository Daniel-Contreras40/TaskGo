from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import SessionLocal
from .. import crud, schemas

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[schemas.Task])
def obtener_tareas(db: Session = Depends(get_db)):
    return crud.get_tasks(db)

@router.post("/", response_model=schemas.Task, status_code=201)
def crear_tarea(task: schemas.TaskCreate, db: Session = Depends(get_db)):
    return crud.create_task(db, task)

@router.put("/{task_id}", response_model=schemas.Task)
def actualizar_tarea(task_id: int, task: schemas.TaskCreate, db: Session = Depends(get_db)):
    tarea = crud.update_task(db, task_id, task)

    if tarea is None:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")

    return tarea

@router.delete("/{task_id}")
def eliminar_tarea(task_id: int, db: Session = Depends(get_db)):
    tarea = crud.delete_task(db, task_id)

    if tarea is None:
        raise HTTPException(status_code=404, detail="Tarea no encontrada")

    return {"mensaje": "Tarea eliminada correctamente"}