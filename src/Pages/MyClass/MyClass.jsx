import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MyClass = () => {
  const [myClass, setmyClass] = useState([]);
  const { payload } = useAuth();
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + `/Order/ViewMyClass`)
      .then((response) => {
        setmyClass(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      {myClass.map((list) => (
        <Stack
          sx={{ borderBottom: 3, borderColor: "grey.300", mx: 10, py: 5 }}
          direction="row"
        >
          <Box
            component="img"
            sx={{ height: "140px" }}
            src={process.env.REACT_APP_IMG_URL + `${list.img}`}
          />
          <Box sx={{ px: 3 }}>
            <Typography sx={{ pb: 1 }}>{list.category_name}</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", pb: 1 }}>
              {list.course_name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#FABC1D", pb: 1, fontWeight: "bold" }}
            >
              {formatDate(list.schedule_date)}
            </Typography>
          </Box>
        </Stack>
      ))}
    </div>
  );
};

export default MyClass;
