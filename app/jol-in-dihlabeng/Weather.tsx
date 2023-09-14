import axios from "axios";
import dateFormat from "dateformat";

const Weather = async () => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "Bethlehem" },
    headers: {
      "X-RapidAPI-Key": "6c644fd532msh6303fddf6235f12p1b9386jsn1ba1ad3612be",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const response: any = await axios.request(options);
  console.log(response.data);

  return (
    <div>
      <h1 className="font-semi-bold text-2xl">
        {response.data.location.name} Weather
      </h1>
      <h2 className="font-bold text-4xl">
        {response.data.current.temp_c}&deg;C
      </h2>
      <p className="text-xl font-medium">
        {dateFormat(response.data.current.last_updated, "dddd")}
      </p>
    </div>
  );
};

export default Weather;
