"""
Abstract::
    - 
History::
    - Ver.      Date            Author        History
    - 
"""
# Internal library
from app.app import create_app

app = create_app()

if __name__ == '__main__' :
    app.run(port=5000 , host='0.0.0.0' , debug= True)