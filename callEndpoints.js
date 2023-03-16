function getRequestObject() {
  const requestType = window.document.getElementById("requestType").value;
  let postBtn = window.document.getElementById("postBtn");
  let getBtn = window.document.getElementById("getBtn");
  let putBtn = window.document.getElementById("putBtn");
  let deleteBtn = window.document.getElementById("deleteBtn");
  let articleId = window.document.getElementById("id");
  let date = window.document.getElementById("date")
  
  if (requestType === "fetch") {
    date.value = new Date().toLocaleString();

    postBtn.addEventListener("click", (e) => {
      e.preventDefault(); 
      fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: window.document.getElementById("id").value,
          article_name: window.document.getElementById("article_name").value,
          article_body: window.document.getElementById("article_body").value,
          date: window.document.getElementById("date").value
        })
      })
      .then(response => response.json())
      .then(data => {
        window.document.getElementById("response").innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
  
    getBtn.addEventListener("click", (e) => {
      e.preventDefault();
      fetch("https://httpbin.org/get?id=" + articleId.value)
      .then(response => response.json())
      .then(data => {
        window.document.getElementById("response").innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
  
    putBtn.addEventListener("click", (e) => {
      e.preventDefault()
      fetch("https://httpbin.org/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: window.document.getElementById("id").value,
          article_name: window.document.getElementById("article_name").value,
          article_body: window.document.getElementById("article_body").value,
          date: window.document.getElementById("date").value
        })
      })
      .then(response => response.json())
      .then(data => {
        window.document.getElementById("response").innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
  
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault()
      fetch("https://httpbin.org/delete?id=" + articleId.value, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(data => {
        window.document.getElementById("response").innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    });
  } else if (requestType === "xmlhttprequest") {
    date.value = new Date().toLocaleString();

    postBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://httpbin.org/post");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = (e) => {
        window.document.getElementById("response").innerText = xhr.responseText;
      };
      xhr.send(JSON.stringify({
        id: window.document.getElementById("id").value,
        article_name: window.document.getElementById("article_name").value,
        article_body: window.document.getElementById("article_body").value,
        date: window.document.getElementById("date").value
      }));
    });

    getBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://httpbin.org/get?id=" + window.document.getElementById("id").value);
      xhr.onload = (e) => {
        window.document.getElementById("response").innerText = xhr.responseText;
      };
      xhr.send();
    });

    putBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const xhr = new XMLHttpRequest();
      xhr.open("PUT", "https://httpbin.org/put");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = (e) => {
        window.document.getElementById("response").innerText = xhr.responseText;
      };
      xhr.send(JSON.stringify({
        id: window.document.getElementById("id").value,
        article_name: window.document.getElementById("article_name").value,
        article_body: window.document.getElementById("article_body").value,
        date: window.document.getElementById("date").value
      }));
    });

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", "https://httpbin.org/delete?id=" + window.document.getElementById("id").value);
      xhr.onload = (e) => {
        window.document.getElementById("response").innerText = xhr.responseText;
      };
      xhr.send();
    });
  } else {
    throw new Error("Invalid request type");
  }
}
  
getRequestObject();












