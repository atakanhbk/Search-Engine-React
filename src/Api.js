import axios from "axios";
const GetDatasFromAPI = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID xOQx0Uk2UiprdUW7feg1WDLRRzUuGnyxZ2WC6oIgBm4",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default GetDatasFromAPI;
