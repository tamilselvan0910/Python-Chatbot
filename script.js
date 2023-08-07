<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Define a function to get a response for a given category
async function getCategoryResponse(category) {
  if (category === "definition") {
    try {
      const response = await axios.get(
        "https://en.wikipedia.org/w/api.php",
        {
          params: {
            action: "query",
            format: "json",
            titles: "Python (programming language)",
            prop: "extracts",
            exintro: true,
            explaintext: true,
          },
        }
      );
      const pages = response.data.query.pages;
      const pageId = Object.keys(pages)[0];
      const summary = pages[pageId].extract;

      if (summary) {
        return summary;
      } else {
        return "Sorry, I couldn't find information about Python at the moment.";
      }
    } catch (error) {
      console.error("Error fetching data from Wikipedia API:", error);
      return "Sorry, there was an error while fetching information.";
    }
  } else {
    // Define other category responses here if needed
    // For the categories that don't require dynamic fetching,
    // you can continue to use the hardcoded responses in the categoryResponses object.
  }
}
