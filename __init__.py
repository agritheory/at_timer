import eel

options = {'mode': 'chrome-app',
    'host': 'localhost',
    'port': 8000,
    'chromeFlags': ["--start-fullscreen"]
    }


eel.init('web')
eel.start('main.html', size=(500, 400))

# call back to
@eel.expose
def login(domain, username, password):
    print(domain, username, password)
