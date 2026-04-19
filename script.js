const apiURL = "https://jsonplaceholder.typicode.com/users";

let usersData = [];

// Fetch data from API
async function fetchData() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    usersData = data;
    displayData(usersData);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Display data
function displayData(data) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  data.map((user) => {
    const li = document.createElement("li");
    li.textContent = user.name + " - " + user.email;
    userList.appendChild(li);
  });
}

// Filter functionality
document.getElementById("search").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();

  const filtered = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchValue),
  );

  displayData(filtered);
});

// Call API
fetchData();
