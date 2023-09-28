import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const MyClass = () => {
  const dummyData = [
    {
      id: 1,
      img: "img",
      category_name: "Category 1",
      course_name: "Course Name 1",
      schedule_date: "2023-09-28",
    },
    {
      id: 2,
      img: "img",
      category_name: "Category 2",
      course_name: "Course Name 2",
      schedule_date: "2023-09-29",
    },
  ];

  return (
    <div>
      {dummyData.map((list) => (
        <Stack
          sx={{ borderBottom: 3, borderColor: "grey.300", mx: 10, py: 5 }}
          direction="row"
        >
          <Box
            component="img"
            sx={{ height: "140px" }}
            src="https://placehold.co/600x400/EEE/31343C"
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
              {list.schedule_date}
            </Typography>
          </Box>
        </Stack>
      ))}
    </div>
  );
};

export default MyClass;
