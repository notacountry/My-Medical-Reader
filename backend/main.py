from fastapi import FastAPI, UploadFile, File, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import uvicorn
from pathlib import Path
import os
from dotenv import load_dotenv
from app.processors.document_processor import DocumentProcessor
from app.database import get_db
from sqlalchemy.orm import Session

# Load environment variables
load_dotenv()

app = FastAPI(title="Medical Document Processor API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create uploads directory if it doesn't exist
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

# Initialize document processor
document_processor = DocumentProcessor()

@app.get("/")
async def root():
    return {"message": "Welcome to Medical Document Processor API"}

@app.post("/upload/")
async def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    """
    Upload a medical document for processing
    """
    try:
        # Save the uploaded file
        file_path = UPLOAD_DIR / file.filename
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
        
        # Process the document
        processed_data = await document_processor.process_document(file_path)
        
        # TODO: Save to database
        
        return {
            "message": "Document processed successfully",
            "filename": file.filename,
            "processed_data": processed_data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/documents/")
async def list_documents(db: Session = Depends(get_db)):
    """
    List all processed documents
    """
    # TODO: Implement document listing from database
    return {"documents": []}

@app.get("/documents/{document_id}")
async def get_document(document_id: str, db: Session = Depends(get_db)):
    """
    Get a specific document's details, summary, and resources
    """
    # TODO: Implement document retrieval from database
    return {"document_id": document_id, "status": "not implemented"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 