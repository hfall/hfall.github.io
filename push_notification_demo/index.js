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
  actions: selectedAction !== null ? actionsList[selectedAction] : [],
};

const notificationBtn = document.getElementById("send-js");

// SERVICE WORKERS SETUP
// First we need to register a service worker
navigator.serviceWorker.register("sw.js");

// We can use serviceWorker.ready.then to wait until the registration has been done.
navigator.serviceWorker.ready.then(() => {
  if ("Notification" in window && navigator.serviceWorker) {
    if (Notification.permission === "granted") {
      eventInit();
    } else if (
      Notification.permission !== "denied" ||
      Notification.permission === "default"
    ) {
      Notification.requestPermission((permission) => {
        if (permission == "granted") {
          eventInit();
        } else {
          notificationBtn.setAttribute("disabled", true);
        }
      });
    }
  }
});

// EVENTS
function eventInit() {
  // alert("working");
  if (!notificationBtn) return;
  notificationBtn.addEventListener("click", (e) => {
    // e.currentTarget.classList.add("v2");
    // Using the registration object, we can call the `showNotification` method to push notification
    navigator.serviceWorker.getRegistration().then((registration) => {
      // registration.showNotification(titles[selectedOption], options);
      new Notification(titles[selectedOption], options);
    });
  });
}
