const btn = document.querySelector("#btn");
      const btn2 = document.querySelector("#btn-2");
      const result1 = document.querySelector("#result1");
      const result2 = document.querySelector("#result2");

      btn.addEventListener("click", () => {
        result1.classList.add("show");
        result2.classList.remove("show");
        fetchResultsFromAPI(
          "https://www.scorebat.com/video-api/v3/feed/?token=MTAwMzQ3XzE2OTA5NzE5NjVfNGJkYzk0ZTViZDM4NTA4MTYzYWQyMmQwODYwNzE0YmVlNTJlY2JkMA==",
        );
      });

      btn2.addEventListener("click", () => {
        result1.classList.remove("show");
        result2.classList.add("show");
        loadLiveScore();
      });

      // Function to fetch and render the data from the given API
      async function fetchResultsFromAPI(URL) {
        try {
          const response = await fetch(URL);
          const results = await response.json();
          renderAllResults(results.response);
        } catch (error) {
          console.log(error.message);
          alert("Failed to fetch data! Please try again.");
        }
      }

      // Function to render the results in the result section
      function renderAllResults(response) {
        const displayResults = document.querySelector(".displayResults");
        displayResults.innerHTML = ""; // Clear previous results
        document.querySelector("#result1").hidden = false;
        let count = 0;
        for (const result of response) {
          if (count === 24) break;
          renderResult(result, displayResults);
          count++;
        }
      }

      function renderResult(match, parentElement) {
        const resultDiv = document.createElement("div");
        resultDiv.className = "card";
        resultDiv.innerHTML = `
        ${match.videos[0].embed}
        <p><b>Match: </b>${match.title}</p>
        <p><b>Competition: </b>${match.competition}</p>
        <p><b>Date: </b>${match.date}</p>
        `;
        parentElement.appendChild(resultDiv);
      }

      // Function to load the live score iframe
      function loadLiveScore() {
        // Check if the script has already been added
        if (!document.getElementById("scorebat-jssdk")) {
          const script = document.createElement("script");
          script.id = "scorebat-jssdk";
          script.src = "https://www.scorebat.com/embed/embed.js?v=arrv";
          document.getElementsByTagName("body")[0].appendChild(script);
        }
      }
