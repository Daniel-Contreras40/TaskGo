from sqlalchemy.orm import Session
from . import models, schemas

def get_tasks(db: Session):
    return db.query(models.Task).all()

def create_task(db: Session, task: schemas.TaskCreate):
    nueva_tarea = models.Task(
        titulo=task.titulo,
        descripcion=task.descripcion,
        estado=task.estado
    )

    db.add(nueva_tarea)
    db.commit()
    db.refresh(nueva_tarea)

    return nueva_tarea

def update_task(db: Session, task_id: int, task: schemas.TaskCreate):
    tarea = db.query(models.Task).filter(models.Task.id == task_id).first()

    if tarea:
        tarea.titulo = task.titulo
        tarea.descripcion = task.descripcion
        tarea.estado = task.estado

        db.commit()
        db.refresh(tarea)

    return tarea

def delete_task(db: Session, task_id: int):
    tarea = db.query(models.Task).filter(models.Task.id == task_id).first()

    if tarea:
        db.delete(tarea)
        db.commit()

    return tarea