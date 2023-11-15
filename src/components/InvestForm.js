import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { InvestDataContext } from "./InvestData";

const InvestForm = () => {
 
  const { updateInvestData } = useContext(InvestDataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    updateInvestData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth={"xs"}>
        <Typography variant="h6" gutterBottom>
          Investment Calculator
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Current Savings ($)"
              variant="standard"
              defaultValue="10000"
              {...register("current", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Yearly Savings ($)"
              variant="standard"
              defaultValue="1200"
              {...register("yearly", { required: true })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected Interest (% per year)"
              variant="standard"
              type="number"
              defaultValue={1000}
              {...register("expected", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Investment Duration (years)"
              variant="standard"
              defaultValue="10"
              {...register("duration", { required: true })}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button type="submit" variant="contained">
              Calculate
            </Button>
          </Grid>
        </Grid>
        {errors.exampleRequired && <span>This field is required</span>}
      </Container>
    </form>
  );
};

export default InvestForm;
