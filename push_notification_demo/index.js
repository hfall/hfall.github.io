// CONSTANTS/DATA
const titles = [
  "Greetings from Hassane",
  "Namaste, My friend",
  "Get to the Choppa!",
];
const bodies = [
  "This is the first greeting from developer, Hassane",
  "A different way of greeting",
  "Just quoting a famous line!",
];
const icons = [
  "https://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/The-Simpsons-03-icon.png",
  "https://icons.iconarchive.com/icons/iconsmind/outline/128/Hello-icon.png",
  "https://icons.iconarchive.com/icons/firstline1/movie-mega-pack-3/128/Terminator-3-Rise-of-the-Machines-icon.png",
];

const selectedOption = 0;
const selectedAction = null;
const actionsList = [
  [
    {
      action: "open",
      title: "Open",
      icon: "https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Dossier-gris-icon.png",
    },
    {
      action: "close",
      title: "Close",
      icon: "https://icons.iconarchive.com/icons/awicons/vista-artistic/128/delete-icon.png",
    },
  ],
];

const options = {
  body: bodies[selectedOption],
  icon: icons[selectedOption],
  silent: false,
  // actions: selectedAction !== null ? actionsList[selectedAction] : [],
  badge:
    "data:image/png;base64,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",
};

const notificationBtn = document.getElementById("send-js");

// SERVICE WORKERS SETUP
// First we need to register a service worker
if ("Notification" in window && navigator.serviceWorker) {
  navigator.serviceWorker.register("sw.js").then(function (swRegistration) {
    console.log("sw registered!");
    eventInit();
    //you can do something with the service wrker registration (swRegistration)
  });
}

// EVENTS
function eventInit() {
  // alert("working");
  if (!notificationBtn) return;
  notificationBtn.addEventListener("click", (e) => {
    if (Notification.permission === "granted") {
      sendNotification();
    } else if (
      Notification.permission !== "denied" ||
      Notification.permission === "default"
    ) {
      Notification.requestPermission((permission) => {
        if (permission == "granted") {
          sendNotification();
        } else {
          notificationBtn.setAttribute("disabled", true);
        }
      });
    }
  });
}

function sendNotification() {
  // We can use serviceWorker.ready.then to wait until the registration has been done.
  navigator.serviceWorker.ready.then((serviceWorker) => {
    serviceWorker.showNotification(titles[selectedOption], options);
    // new Notification(titles[selectedOption], options);
  });
}

/**
 * Create push notification subscription
 */
const pushServerPublicKey = "<A PUSH SERVER PUBLIC KEY GOES HERE>";

function createNotificationSubscription() {
  //wait for service worker installation to be ready, and then
  return navigator.serviceWorker.ready.then(function (serviceWorker) {
    // subscribe and return the subscription
    return serviceWorker.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: pushServerPublicKey,
      })
      .then(function (subscription) {
        console.log("User is subscribed.", subscription);
        return subscription;
      });
  });
}
