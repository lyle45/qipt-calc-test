import { Box } from "@mui/material";
import CalculatorContainer from "@/app/components/CalculatorContainer/CalculatorContainer";

export default function Main() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CalculatorContainer />
      </Box>
    </>
  );
}
