import { Status, LoadsheddingStage } from "eskom-loadshedding-api";
import AlertStatus from "./AlertStatus";

const Loadshedding = async () => {
  const shedding = await Status.getStatus().then((status) => {
    console.log(
      "Is currently loadshedding?",
      status !== LoadsheddingStage.NOT_LOADSHEDDING
    );
    return status;
  });

  const status = await Status.getStatus().then((status: LoadsheddingStage) => {
    return status;
  });

  return (
    <>
      <AlertStatus shedding={shedding} status={status} />
    </>
  );
};

export default Loadshedding;
