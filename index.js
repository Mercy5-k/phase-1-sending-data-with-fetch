function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then((response) => response.json())
    .then((data) => {
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      document.body.appendChild(errorElement);
    });
}

