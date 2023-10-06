from flask import Flask, request, jsonify
from PIL import Image
import cv2
from yolov7 import YOLOv7
from config import inference, label
import numpy as np
import os
import json

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(__file__), 'uploads')

@app.route('/api/predict', methods=['POST'])
def predict():
    region = 33

    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    
    # # Ouvrez l'image avec PIL
    pil_image = Image.open(os.path.join(app.config['UPLOAD_FOLDER'])+'\\'+file.filename)

    # # Convertissez l'image PIL en tableau NumPy pour OpenCV
    img = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)
    
    # Initialisez le modèle YOLOv7 et effectuez la détection
    model_path = os.path.dirname(__file__)+"\workshop.onnx"
    yolov7_detector = YOLOv7(model_path, conf_thres=0.05, iou_thres=0.3)


    # Detect Objects
    boxes, scores, class_ids = yolov7_detector(img)
    
    if len(class_ids) == 0 :
        return "none"
    id = class_ids[0]

    detection = label(id)
    reponse = inference(region, detection)

    print(reponse)
    
    return reponse

if __name__ == '__main__':
    app.run(host='0.0.0.0')