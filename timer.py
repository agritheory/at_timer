import eel
from requests import request
import validators

options = {'mode': 'chrome-app',
    'host': 'localhost',
    'port': 8000,
    'chromeFlags': ["--start-fullscreen"]
    }


class ATTimer():
    username = None
    password = None
    domain = None

    # call back to
    @eel.expose
    def login(self, domain, username, password):
        self.username = username
        self.domain = domain
        self.password = password
        url = "https://" + domain
        if not validators.url(url):
            print("Malformed Domain: " + url)
            return "login-section"
        if not validators.email(username):
            print("Malformed Email: " + username)
            return "login-section"
        r = request("POST", "https://" + domain + "/api/method/login?usr=" +
            username + "&pwd=" + password)
        print(r.status_code)
        if r.status_code == 200:
            return "timer-section"

    @eel.expose
    def get_projects(self):
        r = request("GET", "https://" + self.domain + "/api/method/frappe.get_list?Project")
        print(r.content)


at_timer = ATTimer()
# goes last on page
eel.init('web')
eel.start('main.html', size=(500, 400))
