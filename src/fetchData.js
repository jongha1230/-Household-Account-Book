import fakeData from "./data/fakeData.json";

const fetchData = async () => {
  try {
    return fakeData;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

export default fetchData;
