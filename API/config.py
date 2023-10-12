import json
import os

def inference(region_number, detections):
    relPath = os.getcwd()
    
    path = relPath+"\\config\\"

    json_filename = f'{path}{region_number}_config.json'
    try :
        with open(json_filename, 'r') as config_file:
            config_data = json.load(config_file)
    except :
        try :
            json_filename = f'{path}0_config.json'
            with open(json_filename, 'r') as config_file:
                config_data = json.load(config_file)
        except :
            path = relPath+"/config/"
            json_filename = f'{path}{region_number}_config.json'
            try :
                with open(json_filename, 'r') as config_file:
                    config_data = json.load(config_file)
            except :
                json_filename = f'{path}0_config.json'
                with open(json_filename, 'r') as config_file:
                    config_data = json.load(config_file)
    matching_results = {}
    if detections in config_data:
        matching_results[detections] = config_data[detections]
    else :
        return "jaune"
    for detections, value in matching_results.items():
        return value

def label(id):
    path = os.getcwd()

    config_file_path = path+"\\config\\config.json"
    try:
        with open(config_file_path, 'r') as config_file:
            config_data = json.load(config_file)
            if str(id) in config_data:
                return config_data[str(id)]
            else:
                print("Chiffre non trouvÃ© dans la configuration")
                return("carton")
    except :
        config_file_path = path+"/config/config.json"
        with open(config_file_path, 'r') as config_file:
            config_data = json.load(config_file)
            if str(id) in config_data:
                return config_data[str(id)]
            else:
                print("Chiffre non trouvÃ© dans la configuration")
                return("carton")
