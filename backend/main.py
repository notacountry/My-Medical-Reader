from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from PIL import Image
import io
import easyocr
import base64

app = FastAPI(title="Medical Document Processor API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'])

def preprocess_image(image: np.ndarray) -> np.ndarray:
    """
    Preprocess the image to make it more uniform and suitable for OCR.
    """
    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply adaptive thresholding instead of global thresholding
    gray = cv2.adaptiveThreshold(
        gray,
        255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY,
        11,  # Block size
        2    # C constant
    )
    
    # Apply slight blur to reduce noise while preserving text
    gray = cv2.GaussianBlur(gray, (3,3), 0)
    
    # Enhance contrast
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    gray = clahe.apply(gray)
    
    return gray

@app.get("/")
async def root():
    return {"message": "Welcome to Medical Document Processor API"}

@app.post("/process-image")
async def process_image(image_data: dict):
    """
    Process an image sent as base64 string.
    """
    try:
        # Decode base64 image
        image_bytes = base64.b64decode(image_data['image_data'])
        image = Image.open(io.BytesIO(image_bytes))
        
        # Convert PIL Image to OpenCV format
        opencv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
        
        # Process the image
        processed_image = preprocess_image(opencv_image)
        
        # Extract text using EasyOCR
        results = reader.readtext(processed_image)
        extracted_text = ' '.join([result[1] for result in results])
        
        # Convert processed image back to base64 for sending back
        _, buffer = cv2.imencode('.png', processed_image)
        processed_image_base64 = base64.b64encode(buffer).decode('utf-8')
        
        return {
            "success": True,
            "processed_image": processed_image_base64,
            "extracted_text": extracted_text
        }
        
    except Exception as e:
        print(f"Error processing image: {str(e)}")  # Add logging
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/health")
async def health_check():
    """
    Health check endpoint.
    """
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    print("Starting server...")  # Add logging
    uvicorn.run(app, host="0.0.0.0", port=8000) 